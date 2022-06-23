export default class FileHelper {

	public static extensionFromFilename(filename: string): string | null {
		if (filename === null) return null;
		const extPos = filename.lastIndexOf('.');
		return extPos === -1 ? null : filename.substr(extPos + 1);
	}

}
