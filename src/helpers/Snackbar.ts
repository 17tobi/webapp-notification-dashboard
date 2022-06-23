import SnackbarMessage from "@/models/SnackbarMessage";
import store from '@/store/index';
import i18n from "@/plugins/i18n";
import VueI18n from "vue-i18n";
import TranslateResult = VueI18n.TranslateResult;
import {AxiosError} from "axios";

export default class Snackbar {

	public static loadingError(): void {
		this.show(i18n.t('snackbar.loadingError'), 'error');
	}

	public static createError(): void {
		this.show(i18n.t('snackbar.createError'), 'error');
	}

	public static updateError(): void {
		this.show(i18n.t('snackbar.updateError'), 'error');
	}

	public static deleteError(): void {
		this.show(i18n.t('snackbar.deleteError'), 'error');
	}

	public static downloadError(): void {
		this.show(i18n.t('snackbar.downloadError'), 'error');
	}

	public static uploadError(err: AxiosError | null = null): void {
		const msg = err?.response?.status === 413 ? i18n.t('snackbar.uploadErrorFileSize') : i18n.t('snackbar.uploadError');
		this.show(msg, 'error');
	}

	public static exportError(): void {
		this.show(i18n.t('snackbar.exportError'), 'error');
	}

	public static show(msg: string | TranslateResult, color: string | null = null, timeout: number | null = null, dark: boolean | null = null): void {
		store.commit('ui/showSnackbar', {
			message: msg,
			color: color,
			timeout: timeout,
			dark: dark,
		} as SnackbarMessage);
	}

}
