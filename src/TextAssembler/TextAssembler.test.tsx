import React from "react";
import { render } from "@testing-library/react";
import { TextAssembler } from "./TextAssembler";
import { ILineProps } from "../Line/Line";

describe(TextAssembler.name, () => {
	it("Renders line components according to text", () => {
		const text =
			"I know, I alone\nHow much it hurts, this heart\nWith no faith nor law\nNor melody nor thought.";
		function MyLineComponent(props: ILineProps) {
			return <div data-testid="MyLineComponent"></div>;
		}
		const dom = render(<TextAssembler text={text} lineComponent={MyLineComponent}/>);
		const lineComponents = dom.queryAllByTestId("MyLineComponent");
		expect(lineComponents).toBeTruthy();
		expect(lineComponents).toHaveLength(4);
	});
});
