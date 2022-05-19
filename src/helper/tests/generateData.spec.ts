import { generateData } from "../generateData";

describe("<generateData>", function () {
	it("should generate data with 0", function () {
		const expected = [
			[0, 0],
			[0, 0],
		];

		expect(generateData(2, 2, 0)).toStrictEqual(expected)
	});

	it("should generate data with 2", function () {
		const expected = [
			[2, 2],
			[2, 2],
		];

		expect(generateData(2, 2, 2)).toStrictEqual(expected)
	});

	it('should generate data with random values', () => {
		const result = generateData(3, 3);

		expect(result.length).toBe(3);
		expect(result[1].length).toBe(3);
	});
});
