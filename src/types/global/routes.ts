export enum IComponentTypes {
  Default= 'ViewDefault',
  Home= 'Home',
  offerlist = 'offerlist'
}

export interface IRouteItem {
  label:string,
  route:string,
  title:string
  component: IComponentTypes;
}