export class Cell {
	#state: cellState;
	#position: cellPosition;

	constructor(inistialState: cellState = 0, position: cellPosition) {
		this.#state = inistialState;
		this.#position = position;
	}

	public get position() {
		return this.#position;
	}

	public get state() {
		return this.#state;
	}

	public set state(newState: cellState) {
		this.#state = newState;
	}

	public checkNeighborhood(neighboors: Cell[]) {
		return neighboors.reduce(
			(accumulator, current) => accumulator + current.state,
			0
		);
	}
}

type cellState = 1 | 0;
type cellPosition = [number, number];