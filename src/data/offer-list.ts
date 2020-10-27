import {EFormItemType, EInputTypes, IInputItem} from "@/types/global/iForms";
import {IOfferList, IOfferListLabels} from "@/types/views/offer-list";

export const offerlistLabels: IOfferListLabels = {
    form: {
        headline: 'offers',
        name: 'name',
        description: 'description',
        price: 'price',
        load: 'load',
        save: 'save',
        reset: 'reset',
        error: 'error'
    },
    view: {
        headline: 'preview',
        data: 'data',
        site: 'site',
        documentation: 'documentation',
    },
    site: {
        headline: 'headline'
    }
}

export const offerFormItems: IInputItem[] = [
    {
        formType: EFormItemType.input,
        name: "name",
        label: offerlistLabels.form.name,
        value: "",
        error: {
            massage: offerlistLabels.form.error,
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 40,
        placeholder: true
    },
    {
        formType: EFormItemType.input,
        name: "description",
        label: offerlistLabels.form.description,
        value: "",
        error: {
            massage: offerlistLabels.form.error,
            exists: false
        },
        required: false,
        inputType: EInputTypes.text,
        maxlength: 500,
        placeholder: true
    },
    {
        formType: EFormItemType.input,
        name: "price",
        label: offerlistLabels.form.price,
        value: "",
        error: {
            massage: offerlistLabels.form.error,
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 7,
        placeholder: true
    }
];

export const dataOfferList: IOfferList = {
    form: {
        headline: offerlistLabels.form.headline,

        formActions: {
            loadlabel: offerlistLabels.form.load,
            savelabel: offerlistLabels.form.save,
            resetlabel: offerlistLabels.form.reset
        },
    },
    view: {
        headline: offerlistLabels.view.headline,
        tabs: [offerlistLabels.view.data, offerlistLabels.view.site, offerlistLabels.view.documentation]
    },
    site: {
        headline: offerlistLabels.site.headline,
    },
    data: {
        entries: [],
        entriesResonse: [],
    }


};
