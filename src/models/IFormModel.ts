import {ValidationRule} from "@/declarations/ValidationRule";

export default interface IFormModel {

    reset(): void;
    rules(property: string): ValidationRule[];

}
