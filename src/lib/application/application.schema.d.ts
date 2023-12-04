export interface ApplicationOptions {
	name: string | number;
	author?: string;
	description?: string;
	directory?: string;
	strict?: boolean;
	version?: string;
	packageManager?: "npm" | "yarn" | "pnpm" | "undefined";
	dependencies?: string;
	devDependencies?: string;
}
