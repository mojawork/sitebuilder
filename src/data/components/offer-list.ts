import {EInputTypes, IInputItem} from "@/types/global/iForms";
import {
    EofferListDataNames,
    IOfferList, IOfferListHeadlineItems,
    IOfferListLabels, IOfferListOfferItems
} from "@/types/components/offer-list";
import {IImage} from "@/types/global/IImage";

export const staticOfferlistLabels: IOfferListLabels = {
    form: {
        label: "offers",
        headline: "headline",
        date: "date",
        offerHeadline: "Headline Offers",
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
    }
};

export const saticOfferHeaderImage: IImage = {
    //src: "svg/logo-berger.svg",
    src: "svg/logo-mojawork.svg",
    // url: 'https://mojawork.de',
    alt: "logo",
    // caption: 'caption',
    title: "title"
}

export const saticOfferFormHeader: IInputItem[] = [
    {
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
        name: "date",
        label: staticOfferlistLabels.form.date,
        value: "",
        error: {
            massage: staticOfferlistLabels.form.error,
            exists: false
        },
        required: true,
        inputType: EInputTypes.date,
        maxlength: 12,
        placeholder: false
    }
];

export const staticOfferListOfferItems: IOfferListOfferItems = {
    offer:[
        {
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
            placeholder: true
        },
        {
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
            name: "price",
            label: staticOfferlistLabels.form.price,
            value: "",
            error: {
                massage: staticOfferlistLabels.form.error,
                exists: false
            },
            required: true,
            inputType: EInputTypes.price,
            maxlength: 9,
            placeholder: true
        }
    ]
};

export const staticOfferListHeadlineItems: IOfferListHeadlineItems = {
    headline:[
            {
                name: "headline",
                label: staticOfferlistLabels.form.offerHeadline,
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
    data: {
        [EofferListDataNames.header]: [],
        [EofferListDataNames.items]: [],
        [EofferListDataNames.footer]: [],
    },
    response: {
        [EofferListDataNames.header]: [],
        [EofferListDataNames.items]: [],
        [EofferListDataNames.footer]: [],
    },
    error: false
};
