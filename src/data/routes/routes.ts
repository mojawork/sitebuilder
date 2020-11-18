import {IComponentTypes, IRouteItem} from "@/types/global/routes";


export const staticHeaderRoutes: IRouteItem[] = [
    {
        label: 'Home',
        title: 'Homepage',
        route: '/hutzegrunz',
        component: IComponentTypes.Home
    },
    {
        label: 'Default',
        title: 'Default Component',
        route: '/impint',
        component: IComponentTypes.Default
    }
]

export const staticFooterRoutes = {}

