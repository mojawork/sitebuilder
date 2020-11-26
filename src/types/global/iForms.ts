export enum EFormItemType {
  input = "input"
}

export enum EInputTypes {
  text = "text",
  number = "number",
  email = "email",
  tel = "tel",
  price = "price",
  date = "date"
}

export interface IInputError {
  massage: string;
  exists: boolean;
}

export interface IInputItem {
  name: string;
  label: string;
  value: string;
  error: IInputError;
  required: boolean;
  inputType: EInputTypes;
  maxlength?: number;
  placeholder?: boolean;
}

export interface ITextAreaEditorItem {
  name: string;
  label: string;
  value: string;
  error: IInputError;
  required: boolean;
}



export interface IFromValidate {
  error: { exists: boolean };
  required?: boolean;
  value?: string;
}
