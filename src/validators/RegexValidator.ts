import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import Validator from "@/validators/Validator";
import StringHelper from "@/helpers/StringHelper";

export default class RegexValidator extends Validator {

	protected pattern: RegExp;

	public constructor(label: string, translateLabel: boolean = true, pattern: RegExp) {
		super(label, translateLabel);
		this.pattern = pattern;
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (value === null || StringHelper.isEmpty(value.toString())) return this.success();

		if (typeof value === 'string' && this.pattern.test(value)) {
			return this.success();
		}

		return this.fail();
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.invalidPattern', {label: label}).toString();
	}

}
