import { generateData } from "./generateData";

export const getAliveNeighbours = (data: number[][]): number[][] => {

	const height = data.length;
	const width = data[0].length;
	const neighboursData = generateData(width, height, 0);
	const offsetPairs = [[0,1], [1,0], [1,1], [0,-1], [-1,0], [1,-1], [-1,-1], [-1,1]];

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			const value = data[i][j];
			if (value) {
				offsetPairs.forEach(([xOffset, yOffset]) => {
					const x = j + xOffset;
					const y = i + yOffset;
					neighboursData[y]?.[x] != null && neighboursData[y][x]++
				});
			}
		}
	}

	return neighboursData;
}
