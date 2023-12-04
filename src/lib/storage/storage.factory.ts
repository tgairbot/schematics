import { join, Path, strings } from "@angular-devkit/core";
import {
	apply,
	chain,
	mergeWith,
	move,
	Rule,
	SchematicContext,
	SchematicsException,
	Source,
	template,
	url,
} from "@angular-devkit/schematics";
import { normalizeToKebabOrSnakeCase } from "../../utils/formatting";
import { Location, NameParser } from "../../utils/name.parser";
import { mergeSourceRoot } from "../../utils/source-root.helpers";
import { StorageOptions } from "./storage.schema";

export function main(options: StorageOptions): Rule {
	options = transform(options);
	return chain([mergeSourceRoot(options), mergeWith(generate(options))]);
}

function transform(options: StorageOptions): StorageOptions {
	const target: StorageOptions = Object.assign({}, options);
	if (!target.name) {
		throw new SchematicsException("Option (name) is required.");
	}
	const location: Location = new NameParser().parse(target);
	target.name = normalizeToKebabOrSnakeCase(location.name);
	target.path = normalizeToKebabOrSnakeCase(location.path);

	target.path = target.flat
		? target.path
		: join(target.path as Path, target.name);
	return target;
}

function generate(options: StorageOptions): Source {
	return (context: SchematicContext) =>
		apply(url(join("./files" as Path)), [
			template({
				...strings,
				...options,
			}),
			move(options.path),
		])(context);
}
