import axios from "axios";
import store from "@/store";

import {IText} from "@/types/components/text";

export class TextService {
    // config ---
    private service = process.env.VUE_APP_TEXT_SERVICE;

    public load(text: IText) {
        axios({
            method: "post",
            url: this.service,
            headers: {
                accept: "application/json;charset=UTF-8",
                "content-type": "application/x-www-form-urlencoded"
            },
            data: text
        }).then(
            result => {
                let resultText = result.data as IText;
                text.headline = resultText.headline;
                text.data = resultText.response;
                store.commit("UpdateTextData", text);
            },
            error => {
                console.error(error)
            }
        );
    }

    public save(text: IText) {
        text.generate = true;
        axios({
            method: "post",
            url: this.service,
            headers: {
                accept: "application/json;charset=UTF-8",
                "content-type": "application/x-www-form-urlencoded"
            },
            data: text
        }).then(
            result => {
                let resultText = result.data as IText;
                text.headline = resultText.headline;
                text.response = resultText.response;
                text.generate = false;
                store.commit("UpdateTextData", text);
            },
            error => {
                console.error(error)
            }
        );
    }
}
