import {ETextTypes, ITextComponentData, ITextEdit, ITextItem, ITextLabels} from "@/types/components/text";
import {EFormItemType, EInputTypes} from "@/types/global/iForms";

export const staticTextLabels: ITextLabels = {
    form: {
        label: "Text component",
        inputHeadline: "headline",
        inputData: "content",
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

export const staticTextComponentData : ITextComponentData = {
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
}

export const staticTextEdit: ITextEdit = {
    form: {
        label: staticTextLabels.form.label,
        inputs:{
            headline: staticTextLabels.form.inputHeadline,
            headlineError: staticTextLabels.form.error,
            data: staticTextLabels.form.inputData,
            dataError: staticTextLabels.form.inputData
        },
        formActions: {
            loadlabel: staticTextLabels.form.load,
            savelabel: staticTextLabels.form.save,
            resetlabel: staticTextLabels.form.reset
        }
    },
    view: {
        label: staticTextLabels.view.label,
        tabs: [
            staticTextLabels.view.data,
            staticTextLabels.view.site,
            staticTextLabels.view.documentation
        ]
    }
}