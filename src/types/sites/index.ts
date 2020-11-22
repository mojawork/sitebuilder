import {ITextItem} from "@/types/components/text";
import {EComponentTypes} from "@/types/components/global";

interface testOfferlist {
    show: boolean
    componentType: EComponentTypes;
}

export interface ISites {
    components: Array<ITextItem | testOfferlist>
}

