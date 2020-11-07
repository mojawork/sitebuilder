import { EFormItemType, EInputTypes, IInputItem } from "@/types/global/iForms";
import {
  EofferListDataNames,
  IOfferList,
  IOfferListLabels
} from "@/types/views/offer-list";

export const offerlistLabels: IOfferListLabels = {
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

export const offerFormHeader: IInputItem[] = [
  {
    formType: EFormItemType.input,
    name: "headline",
    label: offerlistLabels.form.headline,
    value: "",
    error: {
      massage: offerlistLabels.form.error,
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
    label: offerlistLabels.form.date,
    value: "",
    error: {
      massage: offerlistLabels.form.error,
      exists: false
    },
    required: true,
    inputType: EInputTypes.text,
    maxlength: 12,
    placeholder: false
  }
];

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
    placeholder: false
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
    label: offerlistLabels.form.label,
    formActions: {
      loadlabel: offerlistLabels.form.load,
      savelabel: offerlistLabels.form.save,
      resetlabel: offerlistLabels.form.reset
    }
  },
  view: {
    label: offerlistLabels.view.label,
    tabs: [
      offerlistLabels.view.data,
      offerlistLabels.view.site,
      offerlistLabels.view.documentation
    ]
  },
  site: {
    headline: offerlistLabels.site.headline
  },
  data: {
    [EofferListDataNames.header]: [],
    [EofferListDataNames.entries]: [],
    [EofferListDataNames.footer]: [],
    error: false
  },
  response: {
    [EofferListDataNames.header]: [],
    [EofferListDataNames.entries]: [],
    [EofferListDataNames.footer]: [],
    error: false
  }
};
