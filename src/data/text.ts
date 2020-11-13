import {ETextTypes, IText} from "@/types/components/text";


export const saticTextLoad: IText = {
    id: '01',
    type: ETextTypes.html,
    folder: 'index',
    file: 'home',
    headline:'',
    data:'',
    response: '',
    generate: false
}

export const saticTextSave: IText = {
    id: '01',
    type: ETextTypes.html,
    folder: 'index',
    file: 'home',
    headline: 'Text Component',
    data: 'Content Home',
    response: '',
    generate: true
}
