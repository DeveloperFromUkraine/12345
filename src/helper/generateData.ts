export const generateData = (width: number, height: number, startState?: number): number[][] => {
	const data: number[][] = [];

	for (let i: number = 0; i < height; i++) {
		data[i] = [];
		for (let j: number = 0; j < width; j++) {
			data[i][j] = startState ?? Math.round(Math.random());
		}
	}

	return data;
}
