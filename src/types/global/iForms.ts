export enum EFormItemType {
  input = "input"
}

export enum EInputTypes {
  text = "text",
  number = "number",
  email = "email",
  tel = "tel"
}

export interface IInputError {
  massage: string;
  exists: boolean;
}

export interface IInputItem {
  formType: EFormItemType;
  name: string;
  label: string;
  value: string;
  error: IInputError;
  required: boolean;
  inputType: EInputTypes;
  maxlength?: number;
  placeholder?: boolean;
}

export interface IForms {
  headline: string;
  formItems: Array<IInputItem>;
}

export interface IfromValidate {
  error: { exists: boolean };
  required?: boolean;
  value?: string;
}
