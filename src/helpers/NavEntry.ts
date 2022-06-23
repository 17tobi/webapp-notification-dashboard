import {RawLocation} from "vue-router";
import VueI18n from "vue-i18n";
import TranslateResult = VueI18n.TranslateResult;

export default class NavEntry {

	public label: string | TranslateResult;
	public target: RawLocation | (() => RawLocation);
	public exact: boolean;
	public badgeValue: (() => string | null) | null = null;
	public badgeColor: (() => string | null) | null = null;

	public constructor(label: string | TranslateResult, target: RawLocation | Function, exact: boolean = true) {
		this.label = label;
		this.exact = exact;
		this.target = target;
	}

	public setBadge(value: (() => string | null) | null, color: (() => string | null) | null = null): void {
		this.badgeValue = value;
		this.badgeColor = color;
	}

}
