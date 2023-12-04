import { BaseStorage, StateKey, StateType } from "@tgairbot/core";

class <%= classify(name) %>Storage extends BaseStorage {
	constructor() {
		super();
	}

	getState(key: StateKey): Promise<StateType> {
		return super.getState(key);
	}

	setState(key: StateKey, state?: StateType): Promise<void> {
		return super.setState(key, state);
	}

	getData(key: StateKey): Promise<any> {
		return super.getData(key);
	}

	setData(key: StateKey, data?: any): Promise<void> {
		return super.setData(key, data);
	}

	clear(): Promise<void> {
		return super.clear();
	}
}

export const <%= name %>Storage = new <%= classify(name) %>Storage();


