import {
  siAstro,
  siCss,
  siDocker,
  siDotnet,
  siFlutter,
  siGithubcopilot,
  siGit,
  siHtml5,
  siJavascript,
  siN8n,
  siPostgresql,
  siTypescript,
} from 'simple-icons';

export interface IconData {
  path: string;
  hex: string;
}

export type LinkKind = 'core' | 'platform' | 'ecosystem';
export type TechGroup = 'frontend' | 'automation' | 'core' | 'data';
export type TechPriority = 'hero' | 'core' | 'support';

export interface TechGlyph {
  id: string;
  label: string;
  icon?: IconData;
  iconSrc?: string;
  brandHex?: string;
  fallback?: string;
}

export interface TechNode extends TechGlyph {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  group?: TechGroup;
  priority?: TechPriority;
  labelDx?: number;
  labelDy?: number;
  showOnMobile?: boolean;
}

export interface TechLink {
  from: string;
  to: string;
  kind: LinkKind;
}

type ThemeMode = 'dark' | 'light';

const FALLBACK_BRAND = '#2f7df6';

const normalizeHex = (value: string) => {
  const hex = value.replace('#', '').trim();
  if (hex.length === 3) {
    return hex
      .split('')
      .map((part) => `${part}${part}`)
      .join('');
  }

  return hex.length === 6 ? hex : FALLBACK_BRAND.slice(1);
};

const parseHex = (value: string) => {
  const hex = normalizeHex(value);

  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16),
  };
};

const toHex = (value: number) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0');

const mixHex = (base: string, target: string, ratio: number) => {
  const from = parseHex(base);
  const to = parseHex(target);
  const blend = Math.max(0, Math.min(1, ratio));
  const mix = (start: number, end: number) => start * (1 - blend) + end * blend;

  return `#${toHex(mix(from.r, to.r))}${toHex(mix(from.g, to.g))}${toHex(mix(from.b, to.b))}`;
};

const luminance = (value: string) => {
  const { r, g, b } = parseHex(value);
  const channel = (sample: number) => {
    const normalized = sample / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const getBrandHex = (glyph: Pick<TechGlyph, 'icon' | 'brandHex'>) => `#${glyph.icon?.hex ?? glyph.brandHex ?? FALLBACK_BRAND.slice(1)}`;

export const techNodes: TechNode[] = [
  {
    id: 'flutter',
    label: 'Flutter',
    x: 16,
    y: 22,
    size: 50,
    dx: -6,
    dy: -4,
    group: 'frontend',
    priority: 'hero',
    icon: siFlutter,
  },
  {
    id: 'astro',
    label: 'Astro',
    x: 29,
    y: 16,
    size: 46,
    dx: 6,
    dy: -5,
    group: 'frontend',
    priority: 'core',
    icon: siAstro,
  },
  {
    id: 'html',
    label: 'HTML5',
    x: 49,
    y: 12,
    size: 44,
    dx: 5,
    dy: -4,
    group: 'frontend',
    priority: 'support',
    icon: siHtml5,
  },
  {
    id: 'css',
    label: 'CSS',
    x: 63,
    y: 16,
    size: 40,
    dx: -4,
    dy: -3,
    group: 'frontend',
    priority: 'support',
    icon: siCss,
  },
  {
    id: 'js',
    label: 'JavaScript',
    x: 76,
    y: 27,
    size: 46,
    dx: 4,
    dy: 2,
    labelDx: -2,
    group: 'frontend',
    priority: 'hero',
    icon: siJavascript,
  },
  {
    id: 'ts',
    label: 'TypeScript',
    x: 80,
    y: 44,
    size: 42,
    dx: 4,
    dy: 3,
    labelDx: -2,
    labelDy: 1,
    group: 'frontend',
    priority: 'core',
    icon: siTypescript,
  },
  {
    id: 'csharp',
    label: 'C#',
    x: 58,
    y: 63,
    size: 36,
    dx: 2,
    dy: 1,
    labelDy: 1,
    group: 'core',
    priority: 'hero',
    iconSrc: '/icons/brands/csharp.svg',
    brandHex: '512bd4',
    fallback: 'C#',
    showOnMobile: true,
  },
  {
    id: 'dotnet',
    label: '.NET',
    x: 68,
    y: 78,
    size: 48,
    dx: -3,
    dy: 2,
    labelDy: 2,
    group: 'core',
    priority: 'hero',
    icon: siDotnet,
    showOnMobile: true,
  },
  {
    id: 'sqlserver',
    label: 'SQL Server',
    x: 44,
    y: 79,
    size: 40,
    dx: 3,
    dy: 3,
    labelDx: 2,
    labelDy: 3,
    group: 'data',
    priority: 'core',
    iconSrc: '/icons/brands/sql-server.svg',
    brandHex: '0078d4',
    fallback: 'SQL',
    showOnMobile: true,
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    x: 30,
    y: 84,
    size: 44,
    dx: 4,
    dy: 4,
    labelDx: -2,
    labelDy: 3,
    group: 'data',
    priority: 'core',
    icon: siPostgresql,
  },
  {
    id: 'sqlite',
    label: 'SQLite',
    x: 15,
    y: 74,
    size: 40,
    dx: -4,
    dy: 3,
    group: 'data',
    priority: 'support',
    iconSrc: '/icons/brands/sqlite.gif',
    brandHex: '003b57',
    fallback: 'SQL',
  },
  {
    id: 'docker',
    label: 'Docker',
    x: 11,
    y: 52,
    size: 44,
    dx: -4,
    dy: -2,
    group: 'automation',
    priority: 'support',
    icon: siDocker,
  },
  {
    id: 'git',
    label: 'Git',
    x: 10,
    y: 35,
    size: 38,
    dx: -3,
    dy: 2,
    group: 'automation',
    priority: 'support',
    icon: siGit,
  },
  {
    id: 'chatfuel',
    label: 'Chatfuel',
    x: 34,
    y: 57,
    size: 50,
    dx: -1,
    dy: 1,
    group: 'automation',
    priority: 'core',
    iconSrc: '/icons/brands/chatfuel.png',
    brandHex: 'ff5d8f',
    fallback: 'CF',
    showOnMobile: true,
  },
  {
    id: 'n8n',
    label: 'n8n',
    x: 24,
    y: 63,
    size: 44,
    dx: -2,
    dy: 2,
    group: 'automation',
    priority: 'core',
    icon: siN8n,
    showOnMobile: true,
  },
  {
    id: 'microsoft',
    label: 'Microsoft',
    x: 45,
    y: 50,
    size: 48,
    dx: 1,
    dy: 1,
    group: 'core',
    priority: 'hero',
    iconSrc: '/icons/brands/microsoft.svg',
    brandHex: '00a4ef',
    fallback: 'MS',
    showOnMobile: true,
  },
  {
    id: 'azure',
    label: 'Azure',
    x: 58,
    y: 41,
    size: 42,
    dx: 2,
    dy: -2,
    group: 'core',
    priority: 'hero',
    iconSrc: '/icons/brands/azure.svg',
    brandHex: '0078d4',
    fallback: 'AZ',
    showOnMobile: true,
  },
  {
    id: 'powerautomate',
    label: 'Power Automate',
    x: 68,
    y: 43,
    size: 34,
    dx: 1,
    dy: -1,
    labelDx: 1,
    labelDy: 0,
    group: 'automation',
    priority: 'core',
    iconSrc: '/icons/brands/power-automate.svg',
    brandHex: '2d7dfa',
    fallback: 'PA',
    showOnMobile: true,
  },
  {
    id: 'outlook',
    label: 'Outlook',
    x: 84,
    y: 60,
    size: 34,
    dx: 1,
    dy: 1,
    labelDx: -1,
    labelDy: 1,
    group: 'automation',
    priority: 'support',
    iconSrc: '/icons/brands/outlook.svg',
    brandHex: '0078d4',
    fallback: 'OL',
    showOnMobile: true,
  },
  {
    id: 'teams',
    label: 'Teams',
    x: 77,
    y: 79,
    size: 34,
    dx: 1,
    dy: 1,
    labelDx: 0,
    labelDy: 2,
    group: 'automation',
    priority: 'core',
    iconSrc: '/icons/brands/teams.svg',
    brandHex: '6264a7',
    fallback: 'TM',
    showOnMobile: true,
  },
  {
    id: 'copilot',
    label: 'Copilot',
    x: 53,
    y: 29,
    size: 34,
    dx: 1,
    dy: -1,
    group: 'core',
    priority: 'support',
    fallback: 'CP',
    icon: siGithubcopilot,
    showOnMobile: true,
  },
  {
    id: 'al',
    label: 'AL',
    x: 50,
    y: 72,
    size: 32,
    dx: 1,
    dy: 1,
    labelDx: 0,
    labelDy: -1,
    group: 'core',
    priority: 'support',
    iconSrc: '/icons/brands/al.svg',
    brandHex: '00b7c3',
    fallback: 'AL',
    showOnMobile: true,
  },
];

export const techLinks: TechLink[] = [
  { from: 'microsoft', to: 'azure', kind: 'core' },
  { from: 'microsoft', to: 'csharp', kind: 'core' },
  { from: 'microsoft', to: 'teams', kind: 'core' },
  { from: 'microsoft', to: 'outlook', kind: 'core' },
  { from: 'microsoft', to: 'powerautomate', kind: 'core' },
  { from: 'microsoft', to: 'copilot', kind: 'core' },
  { from: 'microsoft', to: 'al', kind: 'core' },
  { from: 'microsoft', to: 'sqlserver', kind: 'core' },
  { from: 'azure', to: 'dotnet', kind: 'platform' },
  { from: 'csharp', to: 'dotnet', kind: 'platform' },
  { from: 'chatfuel', to: 'n8n', kind: 'platform' },
  { from: 'n8n', to: 'microsoft', kind: 'platform' },
  { from: 'n8n', to: 'azure', kind: 'platform' },
  { from: 'flutter', to: 'astro', kind: 'ecosystem' },
  { from: 'astro', to: 'html', kind: 'ecosystem' },
  { from: 'html', to: 'css', kind: 'ecosystem' },
  { from: 'css', to: 'js', kind: 'ecosystem' },
  { from: 'js', to: 'ts', kind: 'ecosystem' },
  { from: 'ts', to: 'dotnet', kind: 'ecosystem' },
  { from: 'dotnet', to: 'sqlserver', kind: 'ecosystem' },
  { from: 'sqlserver', to: 'postgres', kind: 'ecosystem' },
  { from: 'dotnet', to: 'postgres', kind: 'ecosystem' },
  { from: 'postgres', to: 'sqlite', kind: 'ecosystem' },
  { from: 'sqlite', to: 'docker', kind: 'ecosystem' },
  { from: 'docker', to: 'git', kind: 'ecosystem' },
  { from: 'flutter', to: 'n8n', kind: 'ecosystem' },
  { from: 'chatfuel', to: 'microsoft', kind: 'ecosystem' },
  { from: 'chatfuel', to: 'azure', kind: 'ecosystem' },
  { from: 'n8n', to: 'dotnet', kind: 'ecosystem' },
  { from: 'n8n', to: 'postgres', kind: 'ecosystem' },
  { from: 'azure', to: 'powerautomate', kind: 'ecosystem' },
  { from: 'powerautomate', to: 'outlook', kind: 'ecosystem' },
  { from: 'teams', to: 'outlook', kind: 'ecosystem' },
  { from: 'copilot', to: 'js', kind: 'ecosystem' },
  { from: 'al', to: 'dotnet', kind: 'ecosystem' },
];

export const brandStackIcons: TechGlyph[] = techNodes.map(({ id, label, icon, iconSrc, brandHex, fallback }) => ({
  id,
  label,
  icon,
  iconSrc,
  brandHex,
  fallback,
}));

export const resolveTechBrand = (glyph: Pick<TechGlyph, 'icon' | 'brandHex'>) => getBrandHex(glyph);

export const resolveTechTone = (glyph: Pick<TechGlyph, 'icon' | 'brandHex'>, theme: ThemeMode) => {
  const brand = getBrandHex(glyph);
  const toneLuminance = luminance(brand);

  if (theme === 'dark') {
    if (toneLuminance < 0.08) return mixHex(brand, '#dff5ff', 0.88);
    if (toneLuminance < 0.16) return mixHex(brand, '#f5fbff', 0.74);
    if (toneLuminance < 0.3) return mixHex(brand, '#ffffff', 0.48);
    return mixHex(brand, '#ffffff', 0.16);
  }

  if (toneLuminance > 0.86) return mixHex(brand, '#102338', 0.44);
  if (toneLuminance > 0.72) return mixHex(brand, '#102338', 0.3);
  if (toneLuminance < 0.1) return mixHex(brand, '#2f7df6', 0.12);
  return mixHex(brand, '#102338', 0.08);
};
