# react-text-assembler

[![Node CI](https://github.com/UltimateForm/react-text-assembler/actions/workflows/node.yml/badge.svg)](https://github.com/UltimateForm/react-text-assembler/actions/workflows/node.yml)

React tooling for rendering text in segregated word containers like rapgenius.

See [Storybook](https://ultimateform.github.io/react-text-assembler/) for examples.

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
