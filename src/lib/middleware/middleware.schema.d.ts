import { Path } from "@angular-devkit/core";

export interface MiddlewareOptions {
	name: string;
	path?: string | Path;
	sourceRoot?: string;
	flat?: boolean;
}
