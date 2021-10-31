# react-text-assembler

[![Node CI](https://github.com/UltimateForm/react-text-assembler/actions/workflows/node.yml/badge.svg)](https://github.com/UltimateForm/react-text-assembler/actions/workflows/node.yml)

React tooling for rendering text in segregated word containers like rapgenius.

See [Storybook](https://ultimateform.github.io/react-text-assembler/) for docs and more examples.

Usage:

```tsx
import { TextAssembler } from "react-text-assembler";

function App() {
	const text =
		"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!";
	return <TextAssembler text={text} />;
}
```

You can use your own custom Word and/or Line renderers but this library also exposes the default implementations in case you want to add up to them instead doing a completely custom approach.

```tsx
import {Word, IWordProps, Line, ILineProps} from "react-text-assembler";
...
function MyCustomWordComponent(props:IWordProps){
	//do whatever custom work you want
	//you can also wrap the Word with your own component
	return <Word {...props} />
}
...
function MyCustomLineComponent(props:ILineProps){
	//do whatever custom work you want
	//you can also wrap the Line with your own component (like using a bullet list)
	return <Line {...props} />
}
...
function App() {
	return <TextAssembler wordComponent={MyCustomWordComponent} lineComponent={MyCustomLineComponent}/>
}
```
