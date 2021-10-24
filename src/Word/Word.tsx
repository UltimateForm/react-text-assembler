import React from "react";

export interface IWordProps
	extends React.DOMAttributes<HTMLSpanElement>,
		React.HTMLAttributes<HTMLSpanElement> {
	onWordClick?: (word: string) => void;
	word: string;
}

export function Word(props: IWordProps) {
	const { word, onWordClick, ...restPropos } = props;

	return (
		<span
			onClick={() => {
				onWordClick(word);
			}}
			{...restPropos}
		>
			{word}
		</span>
	);
}
