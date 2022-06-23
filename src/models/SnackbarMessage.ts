export default interface SnackbarMessage {
  message: string;
  color: string | null;
  timeout: number | null;
  dark: boolean | null;
}
