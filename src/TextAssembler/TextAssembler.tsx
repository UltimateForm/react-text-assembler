import React, { Fragment } from "react";
import { splitByLine, splitByWord } from "utils/text";
import { Word } from "Word";
import { IWordProps } from "Word";
import { Line, ILineProps } from "Line";

interface ITextAssemblerProps
	extends Pick<ILineProps, "wordComponent" | "onWordClick"> {
	text: string;
	lineComponent?: (props: ILineProps) => React.ReactElement;
}

/**
 * Assembles text content by aggregating words in separate containers.
 * You can pass a custom Word renderer to handle the rendering for each word.
 * @param props
 * @returns React.ReactElement
 */
export function TextAssembler(props: ITextAssemblerProps) {
	const { text, ...lineProps } = props;
	const mappedLines = React.useMemo(() => {
		const lines = splitByLine(text).map((line) => {
			const words = splitByWord(line);
			return words;
		});
		return lines;
	}, [text]);
	return (
		<>
			{mappedLines.map((line, index) => (
				<Line
					line={line}
					key={`rta-line-${index}`}
					isFinal={index === mappedLines.length - 1}
					{...lineProps}
				/>
			))}
		</>
	);
}
