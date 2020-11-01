export const globalChangeCssClass = (object: HTMLElement | null) => {

    if (object) {
        const list = object.classList;
        console.log(list, object);
    }

}