import React from "react";
import { splitByLine, splitByWord } from "utils/text";
import { Line, ILineProps } from "Line";

interface ITextAssemblerProps
	extends Pick<ILineProps, "wordComponent" | "onWordClick"> {
	text: string;
	lineComponent?: (props: ILineProps) => React.ReactElement;
}

/**
 * Assembles text content by aggregating words in separate containers.
 * You can pass a custom Line or Word renderer to handle the rendering for each word or line.
 * @param props
 * @returns React.ReactElement
 */
export function TextAssembler(props: ITextAssemblerProps) {
	const { text, lineComponent, ...lineProps } = props;
	const mappedLines = React.useMemo(() => {
		const lines = splitByLine(text).map((line) => {
			const words = splitByWord(line);
			return words;
		});
		return lines;
	}, [text]);
	const LineComponent = lineComponent ?? Line;
	return (
		<>
			{mappedLines.map((line, index) => (
				<LineComponent
					line={line}
					key={`rta-line-${index}`}
					isFinal={index === mappedLines.length - 1}
					{...lineProps}
				/>
			))}
		</>
	);
}
