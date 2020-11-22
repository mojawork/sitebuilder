export enum IViewNames {
    index = 'index',
    textEdit = 'textEdit',
    offerListEdit = 'offerListEdit',
}

export interface IRouteItem {
    label: string;
    route: string;
    title: string;
    viewName: IViewNames;
}