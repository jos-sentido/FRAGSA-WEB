export const config = { runtime: 'edge' };

/**
 * Recibe el formulario de contacto y envía un correo vía Resend.
 *
 * Variables de entorno requeridas (configurar en Vercel → Settings → Environment Variables):
 *  - RESEND_API_KEY   API key de Resend (re_...)
 *  - CONTACT_TO       (opcional) destino. Default: contacto@fragsa.mx
 *  - CONTACT_FROM     (opcional) remitente verificado en Resend.
 *                     Default: onboarding@resend.dev (solo para pruebas)
 */

const TO = (globalThis as any).process?.env?.CONTACT_TO || 'contacto@fragsa.mx';
const FROM =
  (globalThis as any).process?.env?.CONTACT_FROM || 'Fragsa Web <onboarding@resend.dev>';
const API_KEY = (globalThis as any).process?.env?.RESEND_API_KEY as string | undefined;

const PROJECT_TYPES = ['Industrial', 'Comercial', 'Residencial', 'Consultoría', 'Otro'];

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: 'Cuerpo inválido' }, 400);
  }

  // Honeypot anti-spam: si viene lleno, fingimos éxito y descartamos.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return json({ ok: true });
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();
  const company = String(body.company || '').trim();
  const phone = String(body.phone || '').trim();
  const type = PROJECT_TYPES.includes(String(body.type)) ? String(body.type) : 'Otro';
  const privacy = body.privacy === true;

  // Validación mínima
  if (!name || !email || !message) {
    return json({ ok: false, error: 'Faltan campos obligatorios.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Correo inválido.' }, 400);
  }
  if (!privacy) {
    return json({ ok: false, error: 'Debes aceptar el aviso de privacidad.' }, 400);
  }

  if (!API_KEY) {
    // Falta configurar la env var en Vercel. Registramos y devolvemos error claro.
    console.error('[contact] RESEND_API_KEY no está configurada');
    return json({ ok: false, error: 'El servidor no está configurado para enviar correos.' }, 500);
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;line-height:1.6">
      <h2 style="margin:0 0 16px">Nuevo mensaje del formulario — fragsa.com</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td style="color:#666">Nombre</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="color:#666">Empresa</td><td>${escapeHtml(company) || '—'}</td></tr>
        <tr><td style="color:#666">Correo</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="color:#666">Teléfono</td><td>${escapeHtml(phone) || '—'}</td></tr>
        <tr><td style="color:#666">Tipo de proyecto</td><td>${escapeHtml(type)}</td></tr>
      </table>
      <p style="margin:16px 0 4px;color:#666">Mensaje:</p>
      <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px">${escapeHtml(message)}</p>
    </div>`;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Nuevo contacto — ${name}${company ? ` (${company})` : ''}`,
        html,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('[contact] Resend error', resp.status, detail);
      return json({ ok: false, error: 'No se pudo enviar el mensaje.' }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('[contact] fetch error', err);
    return json({ ok: false, error: 'No se pudo enviar el mensaje.' }, 502);
  }
}
