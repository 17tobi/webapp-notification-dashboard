import {ValidationRule} from "@/declarations/ValidationRule";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import VueI18n from "@/plugins/i18n";

export default abstract class Validator {
	private label: string;
	private translateLabel: boolean;

	private labelInternal(): string {
		return this.translateLabel ? VueI18n.t(this.label).toString() : this.label
	}

	protected constructor(label: string, translateLabel: boolean = true) {
		this.label = label;
		this.translateLabel = translateLabel;
	}

	public validationRule(): ValidationRule {
		return (val: ValidationRuleInput) => this.validate(val);
	}

	protected success(): boolean {
		return true;
	}

	protected fail(reason: number | null = null): string {
		return this.validationFailedMessage(this.labelInternal(), reason);
	}

	protected abstract validate(value: ValidationRuleInput): boolean | string;

	protected abstract validationFailedMessage(label: string, reason: number | null): string;

}
