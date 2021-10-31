import { splitByLine, splitByWord } from "utils/text";

export function mapLines(text: string) {
	const lines = splitByLine(text).map((line) => {
		const words = splitByWord(line);
		return words;
	});
	return lines;
}
