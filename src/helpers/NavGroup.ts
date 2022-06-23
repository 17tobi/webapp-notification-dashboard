import VueI18n from "vue-i18n";
import TranslateResult = VueI18n.TranslateResult;
import NavEntry from "@/helpers/NavEntry";

export default class NavGroup {

	public label: string | TranslateResult | null;
	public entries: NavEntry[];

	public constructor(label: string | TranslateResult | null = null, entries: NavEntry[] = []) {
		this.label = label;
		this.entries = entries;
	}

	public add(entry: NavEntry): void {
		this.entries.push(entry);
	}

}
