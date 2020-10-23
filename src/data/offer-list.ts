import { EFormItemType, EInputTypes, IInputItem } from "@/types/global/iForms";
import { IOfferList } from "@/types/views/offer-list";

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
    label: "Beschribung",
    value: "",
    error: {
      massage: "error",
      exists: false
    },
    required: true,
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
    maxlength: 500,
    placeholder: false
  }
];

export const dataOfferList: IOfferList = {
  form: {
    headline: "OfferForm",
    entries: [
      {
        items: offerformItem
      }
    ]
  },
  view: {
    headline: "headline"
  }
};
