import Validator from "@/validators/Validator";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";

export class FileValidator extends Validator {

	private readonly maxSizeBytes: number | null;
	private readonly accept: string | null;

	public constructor(label: string, translateLabel: boolean = true, maxSizeBytes: number | null = null, accept: string | null = null) {
		super(label, translateLabel);
		this.maxSizeBytes = maxSizeBytes;
		this.accept = accept;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected validate(value: ValidationRuleInput): boolean | string {
		return this.fail();
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected validationFailedMessage(label: string, reason: number | null): string {
		return "";
	}

}
