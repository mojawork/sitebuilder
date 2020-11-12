import axios from "axios";
import store from "@/store";

import {IText} from "@/types/components/text";

export class TextService {
    // config ---
    private loadService = process.env.VUE_APP_TEXT_SERVICE;

    public load(text: IText) {
        axios({
            method: "get",
            url: this.loadService + '?folder=' + text.folder + '&file=' + text.file + '&type=' + text.type,
            headers: {
                accept: "application/json;charset=UTF-8",
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(
            result => {
                text.response = result.data;
                store.commit("UpdateTextData", text);
            },
            error => {
                console.error(error)
            }
        );
    }

}
