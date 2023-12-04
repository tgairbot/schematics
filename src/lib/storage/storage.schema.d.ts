import { Path } from "@angular-devkit/core";

export interface StorageOptions {
	name: string;
	path?: string | Path;
	sourceRoot?: string;
	flat?: boolean;
}
