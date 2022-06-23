export default class JwtHelper {

	public static tokenData(token: string): any {
		return JSON.parse(window.atob(token.split('.')[1]))
	}

	public static isTokenExpired(token: string): boolean {
		const tokenObj = JwtHelper.tokenData(token);
		if (null === tokenObj || undefined === tokenObj.exp) {
			return true;
		}
		const exp = tokenObj.exp as number;
		return Date.now() > exp * 1000;
	}

}
