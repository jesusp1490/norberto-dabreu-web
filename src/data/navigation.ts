export type NavItem = {
  href: '/' | '/bio' | '/exhibiciones' | '/testimoniales' | '/retratos' | '/obras-en-venta' | '/contacto';
  labelKey: string;
};

export const navItems: NavItem[] = [
  {
    href: '/',
    labelKey: 'home',
  },
  {
    href: '/bio',
    labelKey: 'bio',
  },
  {
    href: '/exhibiciones',
    labelKey: 'exhibitions',
  },
  {
    href: '/testimoniales',
    labelKey: 'testimonials',
  },
  {
    href: '/retratos',
    labelKey: 'portraits',
  },
  {
    href: '/obras-en-venta',
    labelKey: 'shop',
  },
  {
    href: '/contacto',
    labelKey: 'contact',
  },
];