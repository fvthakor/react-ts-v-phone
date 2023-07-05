export interface ConfigState {
    darkMode: boolean;
    activeTab: string;
    subMenuOpen:boolean;
    errorMessage?: string | null;
    successMessage?: string | null;
    rightSidebar: boolean
}