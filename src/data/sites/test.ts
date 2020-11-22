import {ETextTypes} from "@/types/components/text";
import {staticTextComponentData} from "@/data/components/text";
import {EComponentTypes} from "@/types/components/global";
import {ISites} from "@/types/sites";

export const staticSiteTest: ISites ={
    components: [
        {
            id: 'testintro',
            type: ETextTypes.html,
            componentType:EComponentTypes.text,
            folder: 'test',
            file: 'intro',
            componentData: staticTextComponentData,
            componentResponse: null,
            generate: false
        },
        {
            id: 'testmain',
            type: ETextTypes.html,
            componentType:EComponentTypes.text,
            folder: 'test',
            file: 'main',
            componentData: staticTextComponentData,
            componentResponse: null,
            generate: false
        }
    ]
}