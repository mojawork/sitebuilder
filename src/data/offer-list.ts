import {EFormItemType, EInputTypes, IInputItem} from "@/types/global/iForms";
import {IOfferList} from "@/types/views/offer-list";

export const offerformItem: IInputItem[] = [
    {
        formType: EFormItemType.input,
        name: "name",
        label: "Name",
        value: "",
        error: {
            massage: "error",
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 40,
        placeholder: false
    },
    {
        formType: EFormItemType.input,
        name: "description",
        label: "Beschreibung",
        value: "",
        error: {
            massage: "error",
            exists: false
        },
        required: false,
        inputType: EInputTypes.text,
        maxlength: 500,
        placeholder: false
    },
    {
        formType: EFormItemType.input,
        name: "price",
        label: "Preis",
        value: "",
        error: {
            massage: "error",
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 7,
        placeholder: false
    }
];

export const dataOfferList: IOfferList = {
    form: {
        headline: "OfferForm",
        entries: [],
        footer: {
            savelabel: 'save',
            resetlabel: 'reset'
        },
    },
    view: {
        headline: "headline"
    }
};
