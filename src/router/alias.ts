import {staticHeaderRoutes} from "@/data/routes/routes";
import _filter from "lodash/filter"
import {IComponentTypes} from "@/types/global/routes";

export const setAlias = (component: IComponentTypes): string[] => {
    let aliases: string [] = [];
    _filter(staticHeaderRoutes, (item) => {
        if (item.component === component) {
            aliases.push(item.route);
        }
    });
    return aliases
}