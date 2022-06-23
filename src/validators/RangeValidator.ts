import Validator from "@/validators/Validator";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import StringHelper from "@/helpers/StringHelper";

export class RangeValidator extends Validator {

	private readonly validValues: any[];

	public constructor(label: string, translateLabel: boolean = true, values: any[]) {
		super(label, translateLabel);
		this.validValues = values;
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (value === null || value === undefined || StringHelper.isEmpty(value.toString())) return this.success();

		if (this.validValues.includes(value)) {
			return this.success();
		}

		return this.fail();
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.notInRange', {field: label}).toString();
	}

}
