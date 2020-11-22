import {IViewNames, IRouteItem} from "@/types/global/routes";


export const staticHeaderRoutes: IRouteItem[] = [
    {
        label: 'Home',
        title: 'Homepage',
        route: '/home',
        viewName: IViewNames.index,
    },
    {
        label: 'Test',
        title: 'test',
        route: '/test',
        viewName: IViewNames.index,
    }
]

export const staticFooterRoutes = {}

