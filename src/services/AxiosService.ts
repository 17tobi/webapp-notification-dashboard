export default abstract class AxiosService {

    private readonly baseUrl!: string;

    public constructor() {
        this.baseUrl = this.defineBaseUrl().trim()
        if (!this.baseUrl.startsWith('/')) {
            this.baseUrl = '/' + this.baseUrl;
        }
    }

    public url(path: string | null = null, baseUrl: string = this.baseUrl): string {
        if (path !== null && !path.startsWith('/')) {
            path = '/' + path;
        }

        return `${baseUrl}${path === null ? '' : path}`;
    }

    protected abstract defineBaseUrl(): string;

}
