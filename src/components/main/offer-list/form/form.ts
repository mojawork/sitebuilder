import {Component, Prop, Vue} from "vue-property-decorator";
import {dataOfferList} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {IOfferListForm} from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";
import {FormValidate} from "@/components/global/form-items/validate/validate";

@Component({
    components: {
        GlobalInput
    }
})
export default class MainOfferListForm extends Vue {
    @Prop({required: true})
    public options!: IOfferListForm;
    public cloneEntry = dataOfferList.form.entries[0];
    private validate = new FormValidate();

    public addEntry(): void {

      console.log(this.cloneEntry.items[0].error)

        this.options.entries.push(_cloneDeep(this.cloneEntry));
    }

    public removeEntry(index: number): void {
        this.options.entries.splice(index, 1);
    }

  public reset (): void {
    console.log('reset');
    this.options.entries = [];
  }

    public save (): void {

      this.options.entries.forEach((entry) => {

        this.validate.checkErrors(entry.items)
        //console.log(entry)

      } )

      // const test = this.validate.checkErrors(this.options.entries[0].items)

      // console.log('save',  test);
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        console.log("MainOfferListForm", this.options);
    }
}
