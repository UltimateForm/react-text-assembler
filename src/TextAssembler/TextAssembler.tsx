import React from "react";
import { Line, ILineProps } from "../Line";
import { mapLines } from "./mapLines";

export interface ITextAssemblerProps
	extends Partial<Pick<ILineProps, "wordComponent" | "onWordClick">> {
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
		return mapLines(text);
	}, [text]);
	const LineComponent = lineComponent ?? Line;
	return (
		<>
			{mappedLines.map((line, index) => (
				<LineComponent
					key={`rta-line-${index}`}
					line={line}
					isFinal={index === mappedLines.length - 1}
					{...lineProps}
				/>
			))}
		</>
	);
}
