export const mainNav = [{href:"/jackpot-screens",label:"Jackpot Screens"},{href:"/slot-machines",label:"Slot Machines"},{href:"/catalog",label:"Catalogue"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}] as const;
export type MainNavItem=(typeof mainNav)[number];
