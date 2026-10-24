export const mainNav = [{href:"/catalog",label:"Equipment Catalogue"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}] as const;
export type MainNavItem=(typeof mainNav)[number];