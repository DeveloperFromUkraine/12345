import { transformData } from "../transformData";

describe('<transformData>', function() {
	it('should transform data', () => {
		const input = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		];

		const tick1 = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		];

		const tick2 = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		];

		expect(transformData(input)).toStrictEqual(tick1);
		expect(transformData(tick1)).toStrictEqual(tick2);
	});

	it('should transform data #1', () => {
		const input = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0]
		];

		const tick1 = [
			[ 0, 0, 1, 0, 0 ],
			[ 0, 1, 0, 1, 0 ],
			[ 1, 0, 0, 0, 1 ],
			[ 0, 1, 0, 1, 0 ],
			[ 0, 0, 1, 0, 0 ]
		];

		const tick2 = [
			[ 0, 0, 1, 0, 0 ],
			[ 0, 1, 1, 1, 0 ],
			[ 1, 1, 0, 1, 1 ],
			[ 0, 1, 1, 1, 0 ],
			[ 0, 0, 1, 0, 0 ]
		];

		expect(transformData(input)).toStrictEqual(tick1);
		expect(transformData(tick1)).toStrictEqual(tick2);
	});
})
