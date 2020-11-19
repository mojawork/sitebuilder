import {staticHeaderRoutes} from "@/data/routes/routes";
import _filter from "lodash/filter"
import {IComponentTypes} from "@/types/global/routes";
import {RouteService} from "@/services/routes";
import store from "@/store";

export const setAlias = (component: IComponentTypes): string[] => {

    const service = new RouteService();
    service.save()

    //console.log(store)

    let aliases: string [] = [];
    _filter(staticHeaderRoutes, (item) => {
        if (item.component === component) {
            aliases.push(item.route);
        }
    });
    return aliases
}