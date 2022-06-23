export default interface AsiConfirmDialogDefinition {
	openDialog(title?: string | null, message?: string | null, icon?: string): Promise<boolean>;
}
