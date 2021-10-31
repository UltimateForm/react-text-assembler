import { mapLines } from "./mapLines";

describe(mapLines.name, () => {
	it("Deconstructs text into lines and words", () => {
		const text =
			"I know, I alone\nHow much it hurts, this heart\nWith no faith nor law\nNor melody nor thought.";
		const deconstructed = mapLines(text);
		expect(deconstructed).toHaveLength(4);
		expect(deconstructed[0]).toHaveLength(4);
		expect(deconstructed[1]).toHaveLength(6);
		expect(deconstructed[2]).toHaveLength(5);
		expect(deconstructed[3]).toHaveLength(4);
	});
});
