import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import Validator from "@/validators/Validator";

export default class RequiredValidator extends Validator {

	public constructor(label: string, translateLabel: boolean = true) {
		super(label, translateLabel);
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (Array.isArray(value)) {
			if (value.length > 0) {
				return this.success();
			}
		} else {
			if (!!value || value === 0) {
				return this.success();
			}
		}

		return this.fail();
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.isRequired', {field: label}).toString();
	}

}
