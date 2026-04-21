# FRAGSA — Arquitectura de información y contenido del sitio

> Mapa página por página, sección por sección, con el **copy real extraído del Corporate Profile FRAGSA (40 pp)**. Este documento es el guión de implementación para la Fase 3.

---

## Navegación global

**Rutas:** `/` Inicio · `/nosotros` · `/servicios` · `/proyectos` · `/contacto`.
**Navbar:** logo FRAGSA (izq) + 5 links UPPERCASE + CTA secundario "Contáctanos" (der).
**Footer:** 4 columnas (Marca · Navegación · Contacto · Grupo) + fila legal.

### Datos de contacto oficiales
- Email principal: `dguarro@fraguaconstructora.com.mx`
- Sitios del grupo:
  - https://www.fragsa.com.mx
  - https://www.vigasa.mx
  - https://www.jalievali.com
  - https://www.gemco-construccion.com

---

## `/` — Inicio

### 1. Hero
- **Eyebrow:** `FRAGSA · GRUPO INTEGRAL`
- **Headline (display):** *SOLUCIONES INTEGRALES EN CONSTRUCCIÓN*
- **Subcopy:** *Más de 30 años diseñando, construyendo y comercializando espacios industriales, comerciales y residenciales en México.*
- **CTAs:** primario "Ver proyectos" (→ `/proyectos`) · secundario outline "Contáctanos" (→ `/contacto`).
- **Visual:** foto B/N de nave industrial o estructura metálica + glifo al 8 % en esquina.

### 2. Quiénes somos (intro)
- **Eyebrow:** `01 · NOSOTROS`
- **Headline:** *Una trayectoria de +30 años construyendo la industria de México.*
- **Body:**
  > Fragsa Constructora se especializa en el diseño, construcción y comercialización de espacios industriales, respaldada por una trayectoria de más de 30 años en el mercado. Fundada en 1989 por el Arq. Francisco J. Guarro Aceves, hemos evolucionado hacia un modelo de gestión integral a través del Grupo, integrado por JALIE-VALI, GEMCO y VIGASA.
- **Link:** "Conocer al grupo →" (→ `/nosotros`).

### 3. Stats strip (4 bloques)
| Número | Label |
|---|---|
| `30+` | años de trayectoria |
| `04` | empresas del grupo |
| `14+` | estados con cobertura |
| `300+` | sucursales colaboradas |

### 4. Servicios (preview)
- **Eyebrow:** `02 · SERVICIOS`
- **Headline:** *Cinco disciplinas, un solo responsable.*
- **Grid 5 bloques** (01 Ingeniería · 02 Estructura · 03 Construcción · 04 Operación y mantenimiento · 05 Gestión integral) con 1 línea descriptiva cada uno.
- **Link:** "Ver todos los servicios →" (→ `/servicios`).

### 5. Proyectos destacados
- **Eyebrow:** `03 · PROYECTOS`
- **Headline:** *Obra que habla por sí sola.*
- **3 project cards destacadas** (las de mayor monto/dimensión):
  1. Centro Logístico PCZ, Teoloyucan — 40,400 m² — $371M MXN — 2026.
  2. Parque Industrial, Chihuahua — 19,363 m² — $180.4M MXN — En proceso.
  3. Centro Logístico PCZ, SLP — 15,000 m² — $171.3M MXN — 2024.
- **Link:** "Portafolio completo →" (→ `/proyectos`).

### 6. Nuestros clientes (preview)
- **Eyebrow:** `04 · CLIENTES`
- **Headline:** *Marcas que confían en FRAGSA.*
- **Grid de logos** (4×3) en B/N: Productos de Consumo, Pitico, GNC Live Well, RAL, Ilusion Bowl, Thompson Hotels, RCO, CAPUFE, Glanbia, Grupo Carso, Scorpion.

### 7. CTA final
- Banda `fragsa-asphalt` full-width con headline *"¿Tienes un proyecto industrial en mente?"* y botón primario "Iniciar conversación" → `/contacto`.

---

## `/nosotros`

### 1. Hero interno
- **Eyebrow:** `NOSOTROS`
- **Headline:** *Construimos la infraestructura que mueve a la industria.*
- **Breadcrumb visual:** Inicio / Nosotros.

### 2. Quiénes somos
- **Eyebrow:** `01 · QUIÉNES SOMOS`
- **Body (copy literal PDF pág. 2):**
  > Fragsa Constructora se especializa en el diseño, construcción y comercialización de espacios industriales, respaldada por una trayectoria de más de 30 años en el mercado.
  >
  > Fundada en 1989 por el Arq. Francisco J. Guarro Aceves, nuestra empresa ha evolucionado hacia un modelo de gestión integral. Actualmente, consolidamos nuestra capacidad operativa a través del Grupo, integrado por JALIE-VALI, GEMCO y VIGASA, lo que nos permite abarcar con solvencia todas las etapas del proyecto: desde la planeación, diseño, gestión y la ejecución de obras de gran escala.
- **Visual:** foto institucional B/N + año de fundación destacado en columna lateral (`1989`).

### 3. Misión / Visión (dos columnas editorial)
- **Misión:**
  > Nuestra misión es desarrollar espacios que respondan a necesidades específicas, integrando funcionalidad y eficiencia técnica. Nos enfocamos en un riguroso control de costos para entregar proyectos integrales que superen las expectativas de nuestros clientes.
- **Visión:**
  > Consolidarnos como el grupo constructor referente en el mercado nacional, distinguiéndonos por la excelencia operativa en costos, tiempos y calidad, e impulsando el desarrollo de proyectos que transformen positivamente nuestro entorno.

### 4. Grupo (hexágonos)
- **Eyebrow:** `02 · EMPRESAS QUE INTEGRAN EL GRUPO`
- **Headline:** *Cuatro empresas, una sinergia operativa.*
- **4 cards hex:**
  - **FRAGSA — Constructora.** Dirección del grupo, gestión integral y ejecución de proyectos industriales de gran escala.
  - **GEMCO.** Construcción civil y obra especializada.
  - **VIGASA.** Ejecución · Fabricación · Montaje de estructura metálica.
  - **JALIE-VALI — Constructora.** Obra civil, infraestructura y edificación.
- **Link (opcional):** URL al sitio de cada marca (jalievali.com, gemco-construccion.com, vigasa.mx).

### 5. Cobertura
- **Eyebrow:** `03 · COBERTURA`
- **Headline:** *Presencia nacional.*
- **Subcopy:** *Estados de la república mexicana donde hemos trabajado.*
- **Visual:** mapa SVG de México con puntos en estados: Jalisco, Nuevo León, Querétaro, Michoacán, CDMX, Estado de México, San Luis Potosí, Oaxaca, Chihuahua, Sonora, Baja California, Puebla, Guanajuato, Veracruz.
- **Sidebar:** lista de estados + un highlight "14+ estados · Obra activa en 2026".

### 6. Fundador (bloque)
- **Título:** *Arq. Francisco J. Guarro Aceves · Fundador.*
- **Body:** *Desde 1989 ha dirigido la evolución de FRAGSA de un despacho de diseño hacia un grupo constructor con capacidad integral.*

---

## `/servicios`

### 1. Hero interno
- **Eyebrow:** `SERVICIOS`
- **Headline:** *Soluciones integrales en construcción industrial.*

### 2. Introducción
- **Body (copy literal PDF pág. 6):**
  > Ofrecemos soluciones integrales en construcción industrial, respaldadas por una ejecución técnica de alta precisión. A través de nuestra sinergia como grupo, garantizamos eficiencia operativa y altos estándares de calidad en cada fase del proyecto.
  >
  > Nos distinguimos por un enfoque innovador que integra tecnologías de vanguardia para resolver los desafíos estructurales y logísticos del sector. Desde la conceptualización hasta la entrega final, nuestra prioridad es la excelencia en el detalle y la plena satisfacción de nuestros clientes.

### 3. Cinco bloques de servicio (uno por uno, con número grande)

#### 01 · Ingeniería
*Ingeniería de valor y diseño detallado para llevar cada proyecto desde el concepto hasta el modelo ejecutable.*
- Ingeniería de valor
- Diseño detallado
- Modelo digital (BIM)
- Animación, realidad virtual y realidad aumentada
- Validación de requerimientos
- Presupuestos
- Modularización de construcción
- Planeación de la logística de materiales

#### 02 · Estructura
*Fabricación, habilitado y montaje de estructura metálica con control de calidad propio.*
- Fabricación
- Habilitado
- Recubrimiento
- Izado
- Montaje

#### 03 · Construcción
*Obra civil integral con soldadura especializada y acabados industriales.*
- Cimentación
- Terracerías
- Civil
- MEP: Mecánico, Eléctrico, Plomería
- Soldadura especializada
- Pintura
- Aislamientos
- "As built drawings"
- Instalación de equipos de precisión

#### 04 · Operación y mantenimiento
*Ciclo de vida del activo: desde el arranque hasta expansiones futuras.*
- Comisionamiento
- Mantenimiento preventivo
- Reportes de eficiencia
- Paros programados
- Relocalizaciones
- Expansiones

#### 05 · Gestión integral
*Project Management end-to-end.*
> Nuestro enfoque integral en la gestión de proyectos asegura un desarrollo fluido y exitoso, cumpliendo con los plazos y presupuestos establecidos.

### 4. Capacidades · Maquinaria propia
- **Eyebrow:** `04 · CAPACIDADES`
- **Headline:** *Flota y equipo técnico propios para ejecutar en sitio.*
- **Subcopy:** *Más de 80 unidades entre maquinaria pesada, transporte y equipo de generación.*
- **Tabla/grid resumido** con las categorías principales del PDF págs. 37–38:

| Categoría | Unidades destacadas |
|---|---|
| Movimiento de tierras | Excavadoras CAT 320 D / D-2, retroexcavadoras JCB y Komatsu, motoconformadoras CAT y John Deere, minicargador Bobcat. |
| Compactación y asfalto | Vibrocompactadores HAMM y Dynapac, petrolizadora Ingersoll Rand, plantas de asfalto caliente VELA y TRIASO, tanques de 65,000 L. |
| Concreto y acabado | Revolvedoras CIPSA, vibradores doble tandem, finishers Barbergreen, recuperadora de carpeta CAT. |
| Transporte | Camiones Freightliner, Kenworth, Volvo; góndolas 30 m, low-boys, flow-boys, autotanques de asfalto 28–36 t. |
| Energía y apoyo | Generadores CAT 500 / 312 kVA, Generac, Powermate; torres de iluminación Wacker 4,000 W. |
| Equipo ligero | Rodillos, planchas de compactación, bailarinas Waker Neuson, barredoras Sweep Master. |

- **Nota a pie:** *Relación completa de maquinaria disponible bajo solicitud.*

### 5. CTA servicios
- Banda con headline *"¿Listo para integrar tu proyecto con un solo responsable?"* + botón primario "Cotizar un proyecto" → `/contacto`.

---

## `/proyectos`

### 1. Hero interno
- **Eyebrow:** `PORTAFOLIO`
- **Headline:** *Obras que sostienen cadenas de valor completas.*
- **Subcopy:** *Más de $1,600 millones MXN en proyectos industriales ejecutados y en ejecución.*

### 2. Filtros
Tabs horizontales: **Todos · Industrial · Comercial · Residencial**.

### 3. Industrial (8 proyectos, copy literal del PDF)

| # | Obra | Ubicación | Año | Dimensión | Monto (MXN) |
|---|---|---|---|---|---|
| 1 | Centro Logístico PCZ, SLP | Eje 140, San Luis Potosí, SLP | 2024 | 15,000 m² | $171,316,200.34 |
| 2 | Centro Logístico PCZ, OAX | San Pablo Etla, Oaxaca | En ejecución | 14,500 m² | $165,941,340.12 |
| 3 | V5 | Elite 8 de Julio | 2025 | 6,051.64 m² | $56,159,219.20 |
| 4 | V6 y V7 | Elite 8 de Julio | 2025 | 8,231.89 m² | $76,391,939.20 |
| 5 | V12 | Elite López Mateos | En ejecución | 10,730 m² | $93,351,000.00 |
| 6 | Parque Industrial, CHIH | Chihuahua, Chihuahua | En proceso | 19,363.01 m² | $180,461,446.49 |
| 7 | Centro Logístico PCZ, CHIH | Chihuahua, Chihuahua | 2026 | 17,997.91 m² | $180,070,872.70 |
| 8 | Centro Logístico PCZ, Teoloyucan | Teoloyucan, Edo. Mex. | 2026 | 40,400 m² | $371,200,000.00 |

### 4. Comercial

| # | Proyecto | Cliente / Grupo | Ubicación | Dimensión | Monto / Nota |
|---|---|---|---|---|---|
| 1 | Ilusion Bowl | Grupo Ilusion Bowl | Plaza Ciudadela (Jal.) · Plaza Galerías Tlajomulco · Plaza San Pedro Garza (NL) · Zona Real (Jal.) | 53,000 m² (suma) | $328,690.20 — adecuaciones tipo retail/entretenimiento. |
| 2 | Uncommon Society | Grupo Uncommon Society | Nuevo León | 25,000 m² | Diseño de boliche. |
| 3 | Strike 22 | Grupo Strike 22 | Querétaro | 50,000 m² | Diseño de boliche. |
| 4 | Vino Sin Prisa | Grupo Vino Sin Prisa | Zapopan, Jalisco | 180 m² | Diseño y construcción. |

### 5. Residencial
- **Casa MT** — Ayamonte, 2025. Residencia de autor desarrollada integralmente.

### 6. Colaboraciones estratégicas (pág. 34)
Tres bloques tipo stat:
- **+300 sucursales** · Colaborando con una marca líder en retail a nivel nacional.
- **17 proyectos** · Colaborando en conjunto con un partner estratégico.
- **40 sucursales** · Colaborando con una marca en expansión.

> *Nota al implementar:* el PDF no nombra explícitamente a los tres clientes de estas colaboraciones (sólo muestra sus logos). Confirmar con el cliente antes de publicar nombres. Por ahora mostramos los números y descripción genérica.

### 7. CTA
*"¿Listo para sumar tu proyecto a este portafolio?"* + botón → `/contacto`.

---

## `/contacto`

### 1. Hero
- **Eyebrow:** `CONTACTO`
- **Headline:** *Hablemos de tu próximo proyecto.*
- **Subcopy:** *Presupuestos, dudas técnicas y colaboraciones institucionales.*

### 2. Dos columnas

**Columna izquierda — Datos directos**
- **Email:** `dguarro@fraguaconstructora.com.mx`
- **Sitios del grupo (4 links externos en tarjeta pequeña cada uno):**
  - FRAGSA Constructora → fragsa.com.mx
  - GEMCO → gemco-construccion.com
  - VIGASA → vigasa.mx
  - JALIE-VALI → jalievali.com
- **Cobertura:** Operación nacional, oficinas en Guadalajara, Jalisco (confirmar dirección física con cliente antes de publicar).

**Columna derecha — Formulario**
Campos:
- Nombre completo *
- Empresa
- Correo electrónico *
- Teléfono
- Tipo de proyecto (select): Industrial · Comercial · Residencial · Consultoría · Otro
- Mensaje * (textarea)
- Checkbox: "Acepto el aviso de privacidad."
- Botón primario "Enviar mensaje".

> *Implementación Fase 3:* por ahora el submit es un `console.log` + estado de "Mensaje enviado" simulado en cliente. Integración real (Resend / Formspree / backend) queda fuera de alcance de esta iteración.

### 3. Mapa compacto
Mapa de México pequeño resaltando estados de cobertura (reutilizar componente `CoverageMap`).

---

## Clientes (sección reutilizable)

Logos oficiales (PDF pág. 39), a colocar como placeholders con texto hasta tener los SVG reales:
- Productos de Consumo
- Pitico
- GNC Live Well
- RAL
- Ilusion Bowl
- Thompson Hotels
- RCO — Red de Carreteras de Occidente
- CAPUFE
- Glanbia
- Grupo Carso
- Scorpion

---

## Notas de implementación

1. **Imágenes:** usar `/tmp/fragsa_pages/page_XX.png` como placeholders B/N iniciales para proyectos industriales (tenemos los renders del PDF). Reemplazar por fotografía profesional cuando el cliente entregue el shooting.
2. **Moneda:** formatear montos con `Intl.NumberFormat('es-MX', { style:'currency', currency:'MXN', maximumFractionDigits:0 })`.
3. **m²:** renderizar con `toLocaleString('es-MX')` + `m²` (HTML entity `&sup2;` o literal).
4. **Estados "En ejecución / En proceso":** mostrar como chip de acento `fragsa-blue` en lugar del año.
5. **Copy sin cambios:** respetar literalmente los bloques tomados del PDF en Nosotros, Servicios, Misión/Visión; ajustes menores de puntuación permitidos.
6. **Preguntas abiertas al cliente** (consolidar en lista para enviar):
   - Nombres de los 3 clientes de "Colaboraciones estratégicas" (pág. 34).
   - Dirección física de oficina para sección Contacto.
   - URLs oficiales y confirmar que `fragsa.com.mx` es el dominio público.
   - ¿Incluir equipo/organigrama o mantener solo al fundador?
   - Galería de fotos profesional de proyectos para sustituir placeholders.

---

*Última actualización: 21 abr 2026 · Basado en FRAGSA Corporate Profile (40 pp).*
