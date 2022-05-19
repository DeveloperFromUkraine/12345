import { getAliveNeighbours } from "../getAliveNeighbours";

describe('<getAliveNeighbours>', function() {
	it('should count alive neighbours', () => {
		const data = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		];

		const outcome = [
			[ 0, 1, 1, 1, 0 ],
			[ 0, 2, 1, 2, 0 ],
			[ 0, 3, 2, 3, 0 ],
			[ 0, 2, 1, 2, 0 ],
			[ 0, 1, 1, 1, 0 ]
		];
		expect(getAliveNeighbours(data)).toStrictEqual(outcome);
	});
})
