import React from "react";
import { render } from "@testing-library/react";
import { Line } from "./Line";
import { IWordProps } from "../Word";

describe(Line.name, () => {
	it("Should render custom word component", () => {
		function CustomWordComponent(props: IWordProps) {
			const { word } = props;
			return <div data-testid="CustomWordComponent">{word}</div>;
		}
		const dom = render(
			<Line
				line={["hello", "world"]}
				isFinal={true}
				wordComponent={CustomWordComponent}
			/>
		);
		const wordComponents = dom.queryAllByTestId("CustomWordComponent");
		expect(wordComponents).toHaveLength(2);
	});

	it("Should render line break if is not final line", ()=>{
		const dom = render(
			<Line
				line={["hello", "world"]}
				isFinal={false}
			/>
		);
		const lineBreak = dom.queryByLabelText("line-break");
		expect(lineBreak).toBeTruthy();
	})

	it("Should not render line break if is final line", ()=>{
		const dom = render(
			<Line
				line={["hello", "world"]}
				isFinal={true}
			/>
		);
		const lineBreak = dom.queryByLabelText("line-break");
		expect(lineBreak).toBeNull();
	})
});
