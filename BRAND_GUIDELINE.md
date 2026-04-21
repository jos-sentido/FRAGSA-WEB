# FRAGSA — Brand Guideline (Sitio Web)

> Documento fuente de verdad para el diseño y desarrollo del sitio oficial de **FRAGSA — Grupo Integral**.
> Basado en el Corporate Profile 2026 (PDF, 40 páginas) y el logotipo oficial.

---

## 1. Esencia de marca

- **Nombre legal / marca:** FRAGSA (subíndice "GI" = Grupo Integral).
- **Razón social / emisor de contacto:** Fragua Constructora S.A. de C.V. (email `dguarro@fraguaconstructora.com.mx`).
- **Tagline oficial:** *Soluciones integrales en construcción.*
- **Año de fundación:** 1989.
- **Fundador:** Arq. Francisco J. Guarro Aceves.
- **Grupo:** FRAGSA, GEMCO, VIGASA, JALIE-VALI.
- **Años de trayectoria:** +30 años.
- **Sector:** construcción industrial, comercial y residencial, con énfasis industrial (naves, centros logísticos, parques industriales).

### 1.1 Personalidad
Industrial · Técnica · Corporativa · Sobria · Experta · Confiable · Precisa.

### 1.2 Tono de voz
- Formal-profesional, tercera persona.
- Frases cortas, afirmativas, sin adjetivos floreados.
- Se apoya en **datos duros**: m², montos en MXN, años, número de sucursales/proyectos.
- Orientada a cliente B2B (industrial/inmobiliario/corporativo), no al consumidor final.

Ejemplo bueno: *"Nave industrial de 15,000 m² entregada en 2024 en San Luis Potosí con presupuesto ejercido de $171.3M MXN."*
Ejemplo malo: *"Nuestra hermosa obra se convierte en el sueño hecho realidad de nuestros queridos clientes."*

### 1.3 Qué SÍ decimos
- "Soluciones integrales", "ejecución técnica de alta precisión", "sinergia como grupo", "excelencia operativa en costos, tiempos y calidad", "tecnologías de vanguardia", "cumplimiento normativo".

### 1.4 Qué NO decimos
- Cualquier lenguaje emocional o aspiracional residencial ("tu hogar soñado").
- Promesas no verificables ("los mejores", "los más rápidos").
- Jerga trendy de marketing ("disruptivo", "game-changer", "ecosistema").

---

## 2. Logo

### 2.1 Asset principal
- Archivo base: `/public/brand/logo-fragsa-color.png` (exportado desde `logo fragsa.png`, 1166×660 px, RGBA).
- Estructura: **glifo arquitectónico** (trapecio superior en `#4E7BB0` + dos rombos + base en `#1B2B4A`) sobre el **wordmark "FRAGSA"** en `#1B2B4A`, con subíndice "GI" en `#4E7BB0`.

### 2.2 Variantes a generar
| Archivo | Uso |
|---|---|
| `logo-fragsa-color.png` | Principal, sobre fondos claros (`fragsa-paper`, `fragsa-mist`). |
| `logo-fragsa-mono-dark.png` | Todo `fragsa-navy`, para documentos o fondos muy claros. |
| `logo-fragsa-white.png` | Todo blanco, para fondos `fragsa-asphalt` / fotos oscuras. |
| `glifo-fragsa.svg` | Solo el monograma, para favicon, loaders, watermarks, cards de proyecto. |
| `favicon.ico` / `favicon-32.png` | Generados del glifo en `fragsa-navy`. |

### 2.3 Reglas de uso
- **Área de respeto:** mínimo 1× altura de la letra "F" del wordmark libre alrededor del logo.
- **Tamaño mínimo digital:** 120 px de ancho para el lockup completo; 32 px para el glifo solo.
- **Alineación:** usar siempre el lockup completo en navbar/footer; el glifo aislado solo como elemento gráfico secundario.
- **Nunca:** distorsionar, re-colorear fuera de los tokens, agregar sombras/outlines, colocar sobre fotos sin suficiente contraste.

---

## 3. Paleta de color

Implementada en Tailwind (CDN) dentro de `index.html` como `theme.extend.colors.fragsa.*`.

| Token | Hex | RGB | Uso |
|---|---|---|---|
| `fragsa-navy` | `#1B2B4A` | 27 · 43 · 74 | Color primario. Wordmark, titulares H1/H2, botón primario, footer. |
| `fragsa-blue` | `#4E7BB0` | 78 · 123 · 176 | Acento secundario. Glifo, links, hover, iconografía, puntos del mapa. |
| `fragsa-ink` | `#0E1116` | 14 · 17 · 22 | Texto principal sobre fondos claros. |
| `fragsa-graphite` | `#2A2E35` | 42 · 46 · 53 | Texto secundario, subheadings, fondos de footer claro. |
| `fragsa-steel` | `#8A8F98` | 138 · 143 · 152 | Metadatos, labels, eyebrows, texto de apoyo. |
| `fragsa-line` | `#D9DCE1` | 217 · 220 · 225 | Bordes 1px, separadores tipo blueprint. |
| `fragsa-mist` | `#F3F4F6` | 243 · 244 · 246 | Fondo de secciones alternadas, hover states sutiles. |
| `fragsa-paper` | `#FFFFFF` | 255 · 255 · 255 | Fondo principal del sitio. |
| `fragsa-asphalt` | `#111418` | 17 · 20 · 24 | Fondo dark opcional para hero/footer de alto contraste. |

### 3.1 Combinaciones permitidas
- **Default:** `fragsa-paper` + texto `fragsa-ink`, acentos `fragsa-navy`.
- **Sección alterna:** `fragsa-mist` + `fragsa-ink`.
- **Hero dark:** `fragsa-asphalt` + `fragsa-paper` + acentos `fragsa-blue`.
- **Botón primario:** fondo `fragsa-navy`, texto `#FFFFFF`, hover `fragsa-blue`.
- **Botón secundario (outline):** borde `fragsa-navy` 1.5px, texto `fragsa-navy`, hover fondo `fragsa-navy` + texto blanco.

### 3.2 Contraste accesibilidad
Todas las combinaciones anteriores superan WCAG AA (4.5:1) para texto. Validar siempre contra devtools.

---

## 4. Tipografía

Fuentes servidas desde Google Fonts (`<link>` ya presente en `index.html`).

| Rol | Familia | Peso | Estilo | Tracking |
|---|---|---|---|---|
| Display / H1–H2 | **Montserrat** | 800 ExtraBold | UPPERCASE | 0.02em – 0.04em |
| H3–H4 | Montserrat | 700 Bold | UPPERCASE | 0.04em |
| Eyebrow / Labels | Montserrat | 500 Medium | UPPERCASE | 0.25em (`widest-xl`) |
| Body | **Inter** | 400 / 500 | sentence-case | normal |
| Body énfasis | Inter | 600 SemiBold | — | — |
| Datos numéricos | Montserrat | 600 | tabular-nums | — |

### 4.1 Escala tipográfica (desktop)
| Nivel | Tamaño | Line-height |
|---|---|---|
| Hero display | 72–96 px | 1.05 |
| H1 | 56–72 px | 1.1 |
| H2 | 40–48 px | 1.15 |
| H3 | 28–32 px | 1.25 |
| H4 | 22–24 px | 1.3 |
| Body L | 18 px | 1.65 |
| Body | 16 px | 1.6 |
| Small / meta | 14 px | 1.5 |
| Eyebrow | 12–13 px | 1.4 |

En mobile la escala baja ~25 % de forma fluida (`clamp()`).

---

## 5. Sistema visual

### 5.1 Grid y layout
- **Max-width:** 1280 px centrado.
- **Gutters:** 32 px desktop · 24 px tablet · 16 px mobile.
- **Columnas:** 12 desktop · 8 tablet · 4 mobile.
- **Secciones:** padding vertical 96–128 px desktop · 64–80 px mobile.
- **Separación de bloques:** líneas 1px `fragsa-line` al inicio de cada sección interna.

### 5.2 Fotografía
- **Tratamiento:** blanco y negro (`grayscale(100%)` + `contrast(1.05)`), grano sutil opcional (textura PNG al 4–8 %).
- **Excepciones de color permitido:** logos de empresas del grupo, logos de clientes, mapa de cobertura.
- **Estilo preferido:** arquitectura industrial, estructuras metálicas, fachadas, interiores corporativos. Evitar stock genérico con personas sonriendo.
- **Encuadre:** composiciones amplias, geometrías limpias, contraste fuerte cielo/estructura.

### 5.3 Elementos gráficos
- **Glifo como watermark:** colocar el monograma (`glifo-fragsa.svg`) en esquinas de sección al 6–12 % de opacidad (referencia: esquina superior izquierda de cada página del PDF).
- **Reglas blueprint:** `border-top: 1px solid #D9DCE1` como transición entre subsecciones.
- **Números ordinales grandes:** "01 / 02 / 03 / 04 / 05" en `fragsa-steel` 0.15 opacity o `fragsa-navy` 100 % según jerarquía (ref. PDF pág. 6, servicios).
- **Contenedores hex/trapecio:** para logos de grupo y clientes (ref. páginas 4 y 39); implementar con `clip-path` o SVG.
- **Chips direccionales:** botón circular de 40 px con flecha `→` (ref. paginador del PDF en esquina inferior derecha).

### 5.4 Iconografía
- Librería: `lucide-react` (ya instalada).
- Trazo: 1.5 px, color `fragsa-navy` o `fragsa-blue`.
- Tamaño estándar: 20 / 24 / 32 px.

### 5.5 Motion
- **Fade-in** y **slide-up** ya definidos en `index.html`; mantenerlos con `cubic-bezier(0.16, 1, 0.3, 1)`.
- Añadir `Reveal` wrapper con `IntersectionObserver` (threshold 0.15) para triggear las animaciones cuando la sección entra al viewport.
- Duración estándar: 800–1000 ms. Nada de rebotes ni efectos llamativos.
- **Hover:** transiciones 200–300 ms sobre color y `transform: translateY(-2px)` en cards.

---

## 6. Componentes UI base

### 6.1 Botones
- **Primario:** `bg-fragsa-navy text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-fragsa-blue transition`.
- **Secundario (outline):** `border-[1.5px] border-fragsa-navy text-fragsa-navy px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-fragsa-navy hover:text-white transition`.
- **Ghost link:** texto `fragsa-navy` con subrayado animado de izquierda a derecha en hover.
- **Chip circular:** `w-10 h-10 rounded-full border border-fragsa-line` con ícono `ArrowRight` — para paginar secciones.

### 6.2 Eyebrow
```
<p class="text-xs uppercase tracking-[0.25em] text-fragsa-steel flex items-center gap-3">
  <span class="w-8 h-px bg-fragsa-steel"></span>
  Label
</p>
```

### 6.3 Stat block
```
<div>
  <div class="font-display font-extrabold text-6xl text-fragsa-navy">30+</div>
  <div class="text-xs uppercase tracking-[0.25em] text-fragsa-steel mt-2">años de trayectoria</div>
</div>
```

### 6.4 Project card (estilo editorial)
- Imagen B/N full-bleed arriba, ratio 4:3.
- Eyebrow con categoría (Industrial / Comercial / Residencial).
- Título Montserrat ExtraBold UPPERCASE.
- Meta en una línea: `ubicación · año · m²` con puntos medios como separadores.
- Monto destacado: `fragsa-navy` bold, tabular-nums.
- Hover: imagen `scale(1.03)` + card `translateY(-4px)`.

### 6.5 Service block
- Número `01` grande, `fragsa-navy`.
- Título UPPERCASE, bullets alineados a la izquierda con guión largo o `•`.
- Separador 1px arriba y abajo.

### 6.6 Group company card (hex)
- Contenedor hexagonal (SVG o clip-path) con logo de la empresa del grupo al centro.
- Border `fragsa-line`, hover `fragsa-blue`.

### 6.7 Coverage map
- SVG de México con los ~14 estados marcados (Jalisco, CDMX, SLP, Oaxaca, Chihuahua, Edo. Mex., Nuevo León, Querétaro, etc.).
- Puntos azul medio (`fragsa-blue`) con halo radial al 40 %.
- Estados sin marcar en `fragsa-line`.

### 6.8 Clients grid
- Rectángulos con borde 1px `fragsa-line`, logos en B/N (salvo cuando el logo del cliente lo requiera a color).
- Grid 4 cols desktop · 2 cols mobile.

### 6.9 Navbar
- Altura 80 px desktop · 64 px mobile.
- Transparente sobre hero, cambia a `bg-fragsa-paper/90 backdrop-blur` con shadow sutil al hacer scroll > 80 px.
- Logo a la izquierda (variante color o mono según fondo).
- Links UPPERCASE tracking 0.2em, color `fragsa-ink`, hover `fragsa-navy` + underline animado.
- CTA derecha: botón secundario "Contáctanos".

### 6.10 Footer
- Fondo `fragsa-asphalt`, texto `fragsa-paper`.
- 4 columnas: Marca (logo + tagline), Navegación, Contacto, Grupo (sitios hermanos con su URL).
- Línea 1px `fragsa-graphite` entre contenido y la fila legal.
- Copyright: `© 2026 FRAGSA — Grupo Integral. Todos los derechos reservados.`

---

## 7. Aplicaciones prácticas

### 7.1 Home hero
Fondo `fragsa-asphalt` con foto B/N de nave industrial al 60 % opacity + glifo gigante al 8 %. Hero display blanco, eyebrow `fragsa-blue`, CTA primario blanco + secundario outline blanco.

### 7.2 Secciones alternadas
Secuencia recomendada: `paper → mist → paper → asphalt (dark) → paper` para dar ritmo visual.

### 7.3 Favicon / OG
- Favicon: glifo en `fragsa-navy` sobre `fragsa-paper`.
- Open Graph: hero image con logo completo + tagline, 1200×630, `fragsa-asphalt` de fondo.

---

## 8. Checklist de cumplimiento
Antes de publicar cualquier sección o página nueva, verificar:

- [ ] Paleta solo usa tokens `fragsa-*` (ninguna clase `blue-500`, `gray-800`, etc.).
- [ ] Tipografía: Montserrat para UPPERCASE + Inter para body.
- [ ] Tracking amplio (0.2–0.25em) en eyebrows y labels.
- [ ] Fotos en B/N salvo excepción documentada.
- [ ] Contraste AA mínimo en todos los textos.
- [ ] Glifo presente como watermark o ancla visual en secciones grandes.
- [ ] Datos duros (números, m², montos, años) destacados con `font-display font-bold tabular-nums`.
- [ ] Copy en tono formal-profesional, sin jerga marketera.
- [ ] Footer con los 4 sitios hermanos y el email oficial.

---

*Última actualización: 21 abr 2026 · Fuente: FRAGSA Corporate Profile (40 pp) + logo oficial.*
