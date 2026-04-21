import {
  Wrench, Layers, HardHat, Activity, ClipboardCheck,
  Truck, Mountain, Construction, Factory, Zap, Cog
} from 'lucide-react';
import {
  Project, ServiceItem, GroupCompany, CoverageState, Client,
  MachineryCategory, NavLink, SiblingSite
} from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/contacto', label: 'Contacto' },
];

export const CONTACT = {
  email: 'dguarro@fraguaconstructora.com.mx',
  city: 'Guadalajara, Jalisco',
  country: 'México',
};

export const SIBLING_SITES: SiblingSite[] = [
  { name: 'FRAGSA',     descriptor: 'Constructora',           url: 'https://www.fragsa.com.mx' },
  { name: 'GEMCO',      descriptor: 'Construcción civil',     url: 'https://www.gemco-construccion.com' },
  { name: 'VIGASA',     descriptor: 'Estructura metálica',    url: 'https://www.vigasa.mx' },
  { name: 'JALIE-VALI', descriptor: 'Obra civil',             url: 'https://www.jalievali.com' },
];

export const GROUP_COMPANIES: GroupCompany[] = [
  {
    id: 'fragsa',
    name: 'FRAGSA',
    descriptor: 'Constructora',
    description: 'Dirección del grupo, gestión integral y ejecución de proyectos industriales de gran escala.',
    url: 'https://www.fragsa.com.mx',
  },
  {
    id: 'gemco',
    name: 'GEMCO',
    descriptor: 'Construcción civil',
    description: 'Obra civil y construcción especializada para proyectos industriales y de infraestructura.',
    url: 'https://www.gemco-construccion.com',
  },
  {
    id: 'vigasa',
    name: 'VIGASA',
    descriptor: 'Ejecución · Fabricación · Montaje',
    description: 'Estructura metálica integral: fabricación, habilitado, recubrimiento y montaje en sitio.',
    url: 'https://www.vigasa.mx',
  },
  {
    id: 'jalievali',
    name: 'JALIE-VALI',
    descriptor: 'Constructora',
    description: 'Obra civil, infraestructura, edificación y movimiento de tierras.',
    url: 'https://www.jalievali.com',
  },
];

export const COVERAGE_STATES: CoverageState[] = [
  { code: 'JAL', name: 'Jalisco' },
  { code: 'NLE', name: 'Nuevo León' },
  { code: 'QRO', name: 'Querétaro' },
  { code: 'MIC', name: 'Michoacán' },
  { code: 'CMX', name: 'Ciudad de México' },
  { code: 'MEX', name: 'Estado de México' },
  { code: 'SLP', name: 'San Luis Potosí' },
  { code: 'OAX', name: 'Oaxaca' },
  { code: 'CHH', name: 'Chihuahua' },
  { code: 'SON', name: 'Sonora' },
  { code: 'BCN', name: 'Baja California' },
  { code: 'PUE', name: 'Puebla' },
  { code: 'GTO', name: 'Guanajuato' },
  { code: 'VER', name: 'Veracruz' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ingenieria',
    number: '01',
    title: 'Ingeniería',
    summary: 'Ingeniería de valor y diseño detallado para llevar cada proyecto desde el concepto hasta el modelo ejecutable.',
    icon: Wrench,
    bullets: [
      'Ingeniería de valor',
      'Diseño detallado',
      'Modelo digital (BIM)',
      'Animación, realidad virtual y realidad aumentada',
      'Validación de requerimientos',
      'Presupuestos',
      'Modularización de construcción',
      'Planeación de la logística de materiales',
    ],
  },
  {
    id: 'estructura',
    number: '02',
    title: 'Estructura',
    summary: 'Fabricación, habilitado y montaje de estructura metálica con control de calidad propio.',
    icon: Layers,
    bullets: [
      'Fabricación',
      'Habilitado',
      'Recubrimiento',
      'Izado',
      'Montaje',
    ],
  },
  {
    id: 'construccion',
    number: '03',
    title: 'Construcción',
    summary: 'Obra civil integral con soldadura especializada y acabados industriales.',
    icon: HardHat,
    bullets: [
      'Cimentación',
      'Terracerías',
      'Obra civil',
      'MEP: Mecánico, Eléctrico, Plomería',
      'Soldadura especializada',
      'Pintura',
      'Aislamientos',
      'As-built drawings',
      'Instalación de equipos de precisión',
    ],
  },
  {
    id: 'operacion',
    number: '04',
    title: 'Operación y mantenimiento',
    summary: 'Ciclo de vida del activo: desde el arranque hasta expansiones futuras.',
    icon: Activity,
    bullets: [
      'Comisionamiento',
      'Mantenimiento preventivo',
      'Reportes de eficiencia',
      'Paros programados',
      'Relocalizaciones',
      'Expansiones',
    ],
  },
  {
    id: 'gestion',
    number: '05',
    title: 'Gestión integral',
    summary: 'Project Management end-to-end. Nuestro enfoque integral asegura un desarrollo fluido cumpliendo plazos y presupuestos.',
    icon: ClipboardCheck,
    bullets: [
      'Project Management',
      'Control de costos',
      'Control de calendario',
      'Gestión de riesgos',
      'Interfase con stakeholders',
      'Reporting ejecutivo',
    ],
  },
];

export const PROJECTS: Project[] = [
  // INDUSTRIAL
  {
    id: 1,
    title: 'Centro Logístico PCZ · Teoloyucan',
    category: 'Industrial',
    location: 'Teoloyucan, Estado de México',
    year: '2026',
    sizeM2: 40400,
    amountMXN: 371200000,
    scope: 'Construcción integral de centro logístico de gran escala.',
  },
  {
    id: 2,
    title: 'Parque Industrial · Chihuahua',
    category: 'Industrial',
    location: 'Chihuahua, Chihuahua',
    year: 'En proceso',
    sizeM2: 19363.01,
    amountMXN: 180461446.49,
    scope: 'Desarrollo de parque industrial con obra civil e infraestructura.',
  },
  {
    id: 3,
    title: 'Centro Logístico PCZ · Chihuahua',
    category: 'Industrial',
    location: 'Chihuahua, Chihuahua',
    year: '2026',
    sizeM2: 17997.91,
    amountMXN: 180070872.7,
    scope: 'Construcción de centro logístico con patios de maniobra.',
  },
  {
    id: 4,
    title: 'Centro Logístico PCZ · SLP',
    category: 'Industrial',
    location: 'Eje 140, San Luis Potosí, SLP',
    year: '2024',
    sizeM2: 15000,
    amountMXN: 171316200.34,
    scope: 'Centro logístico entregado con infraestructura completa de operación.',
  },
  {
    id: 5,
    title: 'Centro Logístico PCZ · Oaxaca',
    category: 'Industrial',
    location: 'San Pablo Etla, Oaxaca',
    year: 'En ejecución',
    sizeM2: 14500,
    amountMXN: 165941340.12,
    scope: 'Construcción en ejecución de centro logístico regional.',
  },
  {
    id: 6,
    title: 'V12',
    category: 'Industrial',
    location: 'Elite López Mateos, Jalisco',
    year: 'En ejecución',
    sizeM2: 10730,
    amountMXN: 93351000,
    scope: 'Nave industrial en desarrollo sobre Av. López Mateos.',
  },
  {
    id: 7,
    title: 'V6 y V7',
    category: 'Industrial',
    location: 'Elite 8 de Julio, Jalisco',
    year: '2025',
    sizeM2: 8231.89,
    amountMXN: 76391939.2,
    scope: 'Dos naves industriales del complejo Elite 8 de Julio.',
  },
  {
    id: 8,
    title: 'V5',
    category: 'Industrial',
    location: 'Elite 8 de Julio, Jalisco',
    year: '2025',
    sizeM2: 6051.64,
    amountMXN: 56159219.2,
    scope: 'Nave industrial del complejo Elite 8 de Julio.',
  },
  // COMERCIAL
  {
    id: 9,
    title: 'Strike 22',
    category: 'Comercial',
    clientGroup: 'Grupo Strike 22',
    location: 'Querétaro',
    year: '2025',
    sizeM2: 50000,
    amountMXN: null,
    scope: 'Diseño y construcción de boliche.',
  },
  {
    id: 10,
    title: 'Ilusion Bowl',
    category: 'Comercial',
    clientGroup: 'Grupo Ilusion Bowl',
    location: 'Plaza Ciudadela (JAL) · Plaza Galerías Tlajomulco · San Pedro Garza (NL) · Zona Real (JAL)',
    year: '2024',
    sizeM2: 53000,
    amountMXN: 328690.2,
    scope: 'Adecuaciones tipo retail y entretenimiento en múltiples plazas.',
  },
  {
    id: 11,
    title: 'Uncommon Society',
    category: 'Comercial',
    clientGroup: 'Grupo Uncommon Society',
    location: 'Nuevo León',
    year: '2024',
    sizeM2: 25000,
    amountMXN: null,
    scope: 'Diseño de boliche de alta gama.',
  },
  {
    id: 12,
    title: 'Vino Sin Prisa',
    category: 'Comercial',
    clientGroup: 'Grupo Vino Sin Prisa',
    location: 'Zapopan, Jalisco',
    year: '2024',
    sizeM2: 180,
    amountMXN: null,
    scope: 'Diseño y construcción de vinatería boutique.',
  },
  // RESIDENCIAL
  {
    id: 13,
    title: 'Casa MT',
    category: 'Residencial',
    location: 'Ayamonte',
    year: '2025',
    sizeM2: null,
    amountMXN: null,
    scope: 'Residencia de autor desarrollada integralmente.',
  },
];

export const STRATEGIC_COLLABORATIONS = [
  { figure: '+300', label: 'sucursales', description: 'Colaboración con una marca líder de retail a nivel nacional.' },
  { figure: '17',    label: 'proyectos',  description: 'Desarrollo conjunto con un partner estratégico.' },
  { figure: '40',    label: 'sucursales', description: 'Despliegue con una marca comercial en expansión.' },
];

export const CLIENTS: Client[] = [
  { name: 'Productos de Consumo' },
  { name: 'Pitico' },
  { name: 'GNC Live Well' },
  { name: 'RAL' },
  { name: 'Ilusion Bowl' },
  { name: 'Thompson Hotels' },
  { name: 'RCO — Red de Carreteras de Occidente' },
  { name: 'CAPUFE' },
  { name: 'Glanbia' },
  { name: 'Grupo Carso' },
  { name: 'Scorpion' },
];

export const MACHINERY: MachineryCategory[] = [
  {
    title: 'Movimiento de tierras',
    description: 'Excavadoras CAT 320 D / D-2, retroexcavadoras JCB y Komatsu, motoconformadoras CAT y John Deere, minicargador Bobcat.',
    icon: Mountain,
  },
  {
    title: 'Compactación y asfalto',
    description: 'Vibrocompactadores HAMM y Dynapac, petrolizadora Ingersoll Rand, plantas de asfalto caliente VELA y TRIASO, tanques de 65,000 L.',
    icon: Construction,
  },
  {
    title: 'Concreto y acabado',
    description: 'Revolvedoras CIPSA, vibradores doble tandem, finishers Barbergreen, recuperadora de carpeta CAT.',
    icon: Cog,
  },
  {
    title: 'Transporte pesado',
    description: 'Camiones Freightliner, Kenworth y Volvo; góndolas 30 m, low-boys, flow-boys, autotanques de asfalto 28–36 t.',
    icon: Truck,
  },
  {
    title: 'Energía y apoyo',
    description: 'Generadores CAT 500 / 312 kVA, Generac y Powermate; torres de iluminación Wacker 4,000 W.',
    icon: Zap,
  },
  {
    title: 'Equipo ligero',
    description: 'Rodillos, planchas de compactación, bailarinas Waker Neuson, barredoras Sweep Master.',
    icon: Factory,
  },
];

export const STATS_HOME = [
  { figure: '30+', label: 'años de trayectoria' },
  { figure: '04',  label: 'empresas del grupo' },
  { figure: '14+', label: 'estados con cobertura' },
  { figure: '300+', label: 'sucursales colaboradas' },
];

// Helpers
export const formatMXN = (value: number | null): string => {
  if (value === null) return '—';
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatM2 = (value: number | null): string => {
  if (value === null) return '—';
  return `${value.toLocaleString('es-MX', { maximumFractionDigits: 0 })} m²`;
};
