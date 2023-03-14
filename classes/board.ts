import { Cell } from "./cell";

export class Board {
	#size: number;
	#cells!: Cell[];

	constructor(size: number) {
		this.#size = size;
	}

	private initializeCell() {}
}