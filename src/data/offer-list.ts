import {EFormItemType, EInputTypes, IInputItem} from "@/types/global/iForms";
import {
    EofferListDataNames,
    IOfferList,
    IOfferListLabels, IOfferListOfferItems
} from "@/types/views/offer-list";

export const staticOfferlistLabels: IOfferListLabels = {
    form: {
        label: "offers",
        headline: "headline",
        date: "date",
        name: "name",
        description: "description",
        price: "price",
        load: "load",
        save: "save",
        reset: "reset",
        error: "error"
    },
    view: {
        label: "preview",
        data: "data",
        site: "site",
        documentation: "documentation"
    },
    site: {
        headline: "headline"
    }
};

export const saticOfferFormHeader: IInputItem[] = [
    {
        formType: EFormItemType.input,
        name: "headline",
        label: staticOfferlistLabels.form.headline,
        value: "",
        error: {
            massage: staticOfferlistLabels.form.error,
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 200,
        placeholder: false
    },
    {
        formType: EFormItemType.input,
        name: "date",
        label: staticOfferlistLabels.form.date,
        value: "",
        error: {
            massage: staticOfferlistLabels.form.error,
            exists: false
        },
        required: true,
        inputType: EInputTypes.text,
        maxlength: 12,
        placeholder: false
    }
];

export const staticOfferListOfferItems: IOfferListOfferItems = {
    offer:[
            {
                formType: EFormItemType.input,
                name: "name",
                label: staticOfferlistLabels.form.name,
                value: "",
                error: {
                    massage: staticOfferlistLabels.form.error,
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
                label: staticOfferlistLabels.form.description,
                value: "",
                error: {
                    massage: staticOfferlistLabels.form.error,
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
                label: staticOfferlistLabels.form.price,
                value: "",
                error: {
                    massage: staticOfferlistLabels.form.error,
                    exists: false
                },
                required: true,
                inputType: EInputTypes.text,
                maxlength: 7,
                placeholder: true
            }
        ]
};

export const staticDataOfferList: IOfferList = {
    form: {
        label: staticOfferlistLabels.form.label,
        formActions: {
            loadlabel: staticOfferlistLabels.form.load,
            savelabel: staticOfferlistLabels.form.save,
            resetlabel: staticOfferlistLabels.form.reset
        }
    },
    view: {
        label: staticOfferlistLabels.view.label,
        tabs: [
            staticOfferlistLabels.view.data,
            staticOfferlistLabels.view.site,
            staticOfferlistLabels.view.documentation
        ]
    },
    site: {
        headline: staticOfferlistLabels.site.headline
    },
    data: {
        [EofferListDataNames.header]: [],
        [EofferListDataNames.items]: [],
        [EofferListDataNames.footer]: [],
        error: false
    },
    response: {
        [EofferListDataNames.header]: [],
        [EofferListDataNames.items]: [],
        [EofferListDataNames.footer]: [],
        error: false
    }
};
