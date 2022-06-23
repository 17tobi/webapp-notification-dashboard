import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";

export type ValidationRule = ((value: ValidationRuleInput) => (boolean | string));
