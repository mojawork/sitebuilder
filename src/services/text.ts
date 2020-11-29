import axios from "axios";
import store from "@/store";

import {ITextItem} from "@/types/components/text";

export class TextService {
    // config ---
    private service = process.env.VUE_APP_TEXT_SERVICE;

    private error() {
        store.state.data.main.text.error = true;
        store.commit("updateState", store.state);
    }

    public load(text: ITextItem) {
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
                let resultText = result.data as ITextItem;
                if (resultText.componentResponse?.content.value) {
                    text.componentData = resultText.componentResponse
                    store.commit("UpdateTextData", text);
                } else {
                    this.error()
                }
            },
            error => {
                this.error()
            }
        );
    }

    public save(text: ITextItem) {
        store.commit("updateSpinner", true);
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
                let resultText = result.data as ITextItem;
                if (resultText.componentResponse?.content.value) {
                    text.componentResponse = resultText.componentResponse;
                    text.generate = false;
                    store.commit("UpdateTextData", text);
                } else {
                    this.error()
                }
            },
            error => {
                this.error()
            }
        );
    }
}
