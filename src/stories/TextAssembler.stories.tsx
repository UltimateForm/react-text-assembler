import { TextAssembler } from "../TextAssembler";
import React, { Fragment } from "react";
import { ComponentStory } from "@storybook/react";
import { IWordProps, Word } from "../Word/Word";
import { ILineProps } from "../Line";

const config = {
	component: TextAssembler,
	title: TextAssembler.name,
	decorators: [
		(Story) => (
			<div style={{ color: "white" }}>
				<Story />
			</div>
		)
	]
};
export default config;

const Template: ComponentStory<typeof TextAssembler> = (args) => (
	<TextAssembler {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
	text:
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!"
};

export function HandleWordClick() {
	const text =
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!";

	return (
		<TextAssembler
			text={text}
			onWordClick={(word: string) => {
				// eslint-disable-next-line no-alert
				window.alert("Clicked:" + word);
			}}
		/>
	);
}

export function CustomWordRenderer() {
	const text =
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!";
	const wordComponent = (props: IWordProps) => {
		// eslint-disable-next-line react/prop-types
		const { word } = props;
		const randomColor = Math.floor(Math.random() * 16_777_215).toString(16);
		return <span style={{ backgroundColor: "#" + randomColor }}>{word}</span>;
	};

	return <TextAssembler text={text} wordComponent={wordComponent} />;
}

export function HoverEffect() {
	const text =
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!";
	const MyWordComponent = (props: IWordProps) => {
		const { word } = props;
		const [isHovered, setIsHovered] = React.useState(false);
		return (
			<Word
				word={word}
				style={
					isHovered
						? {
								backgroundColor: "rgb(255,0,0, 0.75)"
						  }
						: {}
				}
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
			/>
		);
	};

	return <TextAssembler text={text} wordComponent={MyWordComponent} />;
}

export function CustomLineRenderer() {
	const text =
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!";
	const MyLineComponent = (props: ILineProps) => {
		const { line, isFinal } = props;
		const randomColor = Math.floor(Math.random() * 16_777_215).toString(16);

		return (
			<div
				style={{
					backgroundColor: "#" + randomColor,
					margin: "0.25rem",
					width: "max-content"
				}}
			>
				{line.map((word, w_index) => (
					<Fragment key={w_index}>
						<Word word={word} />
						{w_index !== line.length && <>&nbsp;</>}
					</Fragment>
				))}
				{!isFinal && <br />}
			</div>
		);
	};

	return <TextAssembler text={text} lineComponent={MyLineComponent} />;
}
