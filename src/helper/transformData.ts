import { getAliveNeighbours } from "./getAliveNeighbours";

export const transformData = (data: number[][]): number[][] => {
	const neighboursData = getAliveNeighbours(data);
	const matrix = [];

	for (let i = 0; i < data.length; i++) {
		const row = [];
		for (let j = 0; j < data[i].length; j++) {
			const alive = data[i][j];
			const neighbours = neighboursData[i][j];
			if (alive) {
				if (neighbours < 2 || neighbours > 3) {
					row.push(0);
				} else {
					row.push(1);
				}
			} else if (neighbours === 3) {
				row.push(1);
			} else {
				row.push(0);
			}
		}
		matrix.push(row);
	}
	return matrix;
}
