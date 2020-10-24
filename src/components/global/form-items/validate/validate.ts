import _find from "lodash/find";
import {IfromValidate} from "@/types/global/iForms";

export class FormInputValidate {
    public required(value: string, required: boolean): boolean {
        return required && value.length <= 1;
    }

    public text(value: string): boolean {
        console.info(value);
        return false;
    }

    public number(value: string): boolean {
        return !/^[0-9]+$/.test(value.toString());
    }

    public email(value: string): boolean {
        if (value.length === 0) {
            return false;
        }
        return !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value.toString()
        );
    }

    public tel(value: string): boolean {
        if (value.length === 0) {
            return false;
        }
        return !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
            value.toString()
        );
    }
}

export class FormValidate {
    public checkErrors(
        formItems: Record<string, IfromValidate> | Array<IfromValidate>
    ): boolean {
        _find(formItems, (item: IfromValidate) => {
            if (item.required) {
                item.error.exists = (item.value?.length ?? 0) <= 1;
            }
        });

        let result = false;
        _find(formItems, (item: IfromValidate) => {
            if (item.error && item.error.exists) {
                result = item.error.exists;
            }
        });

        return result;
    }
}
