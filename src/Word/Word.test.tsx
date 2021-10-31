import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Word} from "./Word";

describe(Word.name, ()=>{
	it("Invokes onClick callback when clicked", ()=>{
		const onClickMock = jest.fn();
		const dom = render(<Word word="lorem" onWordClick={onClickMock} data-testid="wordElement"/>)
		const wordElement = dom.queryByTestId("wordElement");
		expect(wordElement).toBeTruthy();
		fireEvent.click(wordElement);
		expect(onClickMock).toHaveBeenCalledTimes(1);
		expect(onClickMock).toHaveBeenCalledWith("lorem");
	})
})