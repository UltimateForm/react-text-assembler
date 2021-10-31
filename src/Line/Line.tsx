import React, { Fragment } from "react";
import { IWordProps, Word } from "../Word";

export interface ILineProps
	extends React.DOMAttributes<HTMLSpanElement>,
		React.HTMLAttributes<HTMLSpanElement> {
	line: string[];
	isFinal: boolean;
	wordComponent?: (props: IWordProps) => React.ReactElement;
	onWordClick?: IWordProps["onWordClick"];
}

export function Line(props: ILineProps) {
	const { line, isFinal, wordComponent, onWordClick } = props;
	const WordComponent = wordComponent ?? Word;
	return (
		<>
			<span>
				{line.map((word, w_index) => (
					<Fragment key={`word-${w_index}`}>
						<WordComponent word={word} onWordClick={onWordClick} />
						{w_index !== line.length && <> </>}
					</Fragment>
				))}
			</span>
			{!isFinal && <br aria-label="line-break" />}
		</>
	);
}
