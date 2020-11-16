import {IViewPageHome} from "@/types/views/home";
import {ETextTypes} from "@/types/components/text";
import {EFormItemType, EInputTypes} from "@/types/global/iForms";
import {staticTextLabels} from "@/data/components/text";
import {EComponentTypes} from "@/types/components/global";

export const staticViewPageHome: IViewPageHome ={
    components: [
        {
            id: 'hometext',
            type: ETextTypes.html,
            componentType:EComponentTypes.text,
            folder: 'home',
            file: 'intro',
            data: {
                headline: {
                    name: "headline",
                    label: staticTextLabels.form.inputHeadline,
                    value: '',
                    error: {
                        massage: staticTextLabels.form.error,
                        exists: false
                    },
                    required: true,
                    inputType: EInputTypes.text,
                    maxlength: 40,
                    placeholder: true
                },
                content: {
                    name: "headline",
                    label: staticTextLabels.form.inputData,
                    value: '',
                    error: {
                        massage: staticTextLabels.form.error,
                        exists: false
                    },
                    required: true,
                },
            },
            response: null,
            generate: false
        }
    ]
}