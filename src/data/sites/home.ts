import {ETextTypes} from "@/types/components/text";
import {staticTextComponentData} from "@/data/components/text";
import {EComponentTypes} from "@/types/components/global";
import {ISites} from "@/types/sites";

export const staticSiteHome: ISites ={
    components: [
        {
            id: 'index',
            type: ETextTypes.html,
            componentType:EComponentTypes.text,
            folder: 'home',
            file: 'intro',
            componentData: staticTextComponentData,
            componentResponse: null,
            generate: false
        },
        {
            show: true,
            componentType:EComponentTypes.offerList
        }
    ]
}