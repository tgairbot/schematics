import { Path } from "@angular-devkit/core";

export interface LayoutOptions {
	name: string;
	path?: string | Path;
	sourceRoot?: string;
	flat?: boolean;
}
