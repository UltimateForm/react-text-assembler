import { IWordProps, Word } from "Word";

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
					<>
						<WordComponent
							key={`word-${w_index}`}
							word={word}
							onWordClick={onWordClick}
						/>
						{w_index !== line.length && <> </>}
					</>
				))}
			</span>
			{!isFinal && <br />}
		</>
	);
}
