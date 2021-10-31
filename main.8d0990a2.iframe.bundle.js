(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(638),__webpack_require__(639),__webpack_require__(848),__webpack_require__(849),__webpack_require__(855),__webpack_require__(856),__webpack_require__(854),__webpack_require__(851),__webpack_require__(857),__webpack_require__(852),__webpack_require__(853),__webpack_require__(858),module.exports=__webpack_require__(841)},549:function(module,exports){},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(346)},841:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(346).configure)([__webpack_require__(842),__webpack_require__(843)],module,!1)}).call(this,__webpack_require__(205)(module))},842:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=842},843:function(module,exports,__webpack_require__){var map={"./stories/TextAssembler.stories.tsx":850};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=843},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Simple})),__webpack_require__.d(__webpack_exports__,"HandleWordClick",(function(){return TextAssembler_stories_HandleWordClick})),__webpack_require__.d(__webpack_exports__,"CustomWordRenderer",(function(){return TextAssembler_stories_CustomWordRenderer})),__webpack_require__.d(__webpack_exports__,"HoverEffect",(function(){return TextAssembler_stories_HoverEffect})),__webpack_require__.d(__webpack_exports__,"CustomLineRenderer",(function(){return TextAssembler_stories_CustomLineRenderer}));__webpack_require__(6),__webpack_require__(14),__webpack_require__(844),__webpack_require__(7),__webpack_require__(77),__webpack_require__(845),__webpack_require__(24),__webpack_require__(846),__webpack_require__(5),__webpack_require__(9),__webpack_require__(20),__webpack_require__(17),__webpack_require__(12),__webpack_require__(16),__webpack_require__(15),__webpack_require__(27),__webpack_require__(23),__webpack_require__(436);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),jsx_runtime=__webpack_require__(30),_excluded=["word","onWordClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Word(props){var word=props.word,onWordClick=props.onWordClick,restPropos=_objectWithoutProperties(props,_excluded);return Object(jsx_runtime.jsx)("span",Object.assign({onClick:function onClick(){onWordClick(word)}},restPropos,{children:word}))}Word.displayName="Word";try{Word.displayName="Word",Word.__docgenInfo={description:"",displayName:"Word",props:{onWordClick:{defaultValue:null,description:"",name:"onWordClick",required:!1,type:{name:"(word: string) => void"}},word:{defaultValue:null,description:"",name:"word",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Word/Word.tsx#Word"]={docgenInfo:Word.__docgenInfo,name:"Word",path:"src/Word/Word.tsx#Word"})}catch(__react_docgen_typescript_loader_error){}function Line(props){var line=props.line,isFinal=props.isFinal,wordComponent=props.wordComponent,onWordClick=props.onWordClick,WordComponent=null!=wordComponent?wordComponent:Word;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("span",{children:line.map((function(word,w_index){return Object(jsx_runtime.jsxs)(react.Fragment,{children:[Object(jsx_runtime.jsx)(WordComponent,{word:word,onWordClick:onWordClick}),w_index!==line.length&&Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "})]},"word-"+w_index)}))}),!isFinal&&Object(jsx_runtime.jsx)("br",{"aria-label":"line-break"})]})}try{Line.displayName="Line",Line.__docgenInfo={description:"",displayName:"Line",props:{line:{defaultValue:null,description:"",name:"line",required:!0,type:{name:"string[]"}},isFinal:{defaultValue:null,description:"",name:"isFinal",required:!0,type:{name:"boolean"}},wordComponent:{defaultValue:null,description:"",name:"wordComponent",required:!1,type:{name:"(props: IWordProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},onWordClick:{defaultValue:null,description:"",name:"onWordClick",required:!1,type:{name:"(word: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Line/Line.tsx#Line"]={docgenInfo:Line.__docgenInfo,name:"Line",path:"src/Line/Line.tsx#Line"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(67),__webpack_require__(31);var TextAssembler_excluded=["text","lineComponent"];function TextAssembler_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TextAssembler_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TextAssembler(props){var text=props.text,lineComponent=props.lineComponent,lineProps=TextAssembler_objectWithoutProperties(props,TextAssembler_excluded),mappedLines=react_default.a.useMemo((function(){return function mapLines(text){var lines=function splitByLine(text){return text.split("\n")}(text).map((function(line){var words=function splitByWord(text){return text.split(" ")}(line);return words}));return lines}(text)}),[text]),LineComponent=null!=lineComponent?lineComponent:Line;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:mappedLines.map((function(line,index){return Object(jsx_runtime.jsx)(LineComponent,Object.assign({line:line,isFinal:index===mappedLines.length-1},lineProps),"rta-line-"+index)}))})}try{TextAssembler.displayName="TextAssembler",TextAssembler.__docgenInfo={description:"Assembles text content by aggregating words in separate containers.\nYou can pass a custom Line or Word renderer to handle the rendering for each word or line.",displayName:"TextAssembler",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},lineComponent:{defaultValue:null,description:"",name:"lineComponent",required:!1,type:{name:"(props: ILineProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},wordComponent:{defaultValue:null,description:"",name:"wordComponent",required:!1,type:{name:"(props: IWordProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},onWordClick:{defaultValue:null,description:"",name:"onWordClick",required:!1,type:{name:"(word: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextAssembler/TextAssembler.tsx#TextAssembler"]={docgenInfo:TextAssembler.__docgenInfo,name:"TextAssembler",path:"src/TextAssembler/TextAssembler.tsx#TextAssembler"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var config={component:TextAssembler,title:TextAssembler.name,decorators:[function(Story){return Object(jsx_runtime.jsx)("div",{style:{color:"white"},children:Object(jsx_runtime.jsx)(Story,{})})}]},TextAssembler_stories_Template=(__webpack_exports__.default=config,function Template(args){return Object(jsx_runtime.jsx)(TextAssembler,Object.assign({},args))});TextAssembler_stories_Template.displayName="Template";var Simple=TextAssembler_stories_Template.bind({});Simple.args={text:"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!"};var TextAssembler_stories_HandleWordClick=function HandleWordClick(){return Object(jsx_runtime.jsx)(TextAssembler,{text:"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!",onWordClick:function onWordClick(word){window.alert("Clicked:"+word)}})};TextAssembler_stories_HandleWordClick.displayName="HandleWordClick";var TextAssembler_stories_CustomWordRenderer=function CustomWordRenderer(){return Object(jsx_runtime.jsx)(TextAssembler,{text:"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!",wordComponent:function wordComponent(props){var word=props.word,randomColor=Math.floor(16777215*Math.random()).toString(16);return Object(jsx_runtime.jsx)("span",{style:{backgroundColor:"#"+randomColor},children:word})}})};TextAssembler_stories_CustomWordRenderer.displayName="CustomWordRenderer";var TextAssembler_stories_HoverEffect=function HoverEffect(){return Object(jsx_runtime.jsx)(TextAssembler,{text:"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!",wordComponent:function MyWordComponent(props){var word=props.word,_React$useState2=_slicedToArray(react_default.a.useState(!1),2),isHovered=_React$useState2[0],setIsHovered=_React$useState2[1];return Object(jsx_runtime.jsx)(Word,{word:word,style:isHovered?{backgroundColor:"rgb(255,0,0, 0.75)"}:{},onMouseEnter:function onMouseEnter(){setIsHovered(!0)},onMouseLeave:function onMouseLeave(){setIsHovered(!1)}})}})};TextAssembler_stories_HoverEffect.displayName="HoverEffect";var TextAssembler_stories_CustomLineRenderer=function CustomLineRenderer(){return Object(jsx_runtime.jsx)(TextAssembler,{text:"They say I pretend or lie\r\nAll I write. No such thing.\r\nIt simply is that I\r\nFeel by imagining.\r\nI don't use the heart-string.\r\n\r\nAll that I dream or lose,\r\nThat falls short or dies on me,\r\nIs like a terrace which looks\r\nOn another thing beyond.\r\nIt's that thing leads me on.\r\n\r\nAnd so I write in the middle\r\nOf things not next one's feet,\r\nFree from my own muddle,\r\nConcerned for what is not.\r\nFeel? Let the reader feel!",lineComponent:function MyLineComponent(props){var line=props.line,isFinal=props.isFinal,randomColor=Math.floor(16777215*Math.random()).toString(16);return Object(jsx_runtime.jsxs)("div",{style:{backgroundColor:"#"+randomColor,margin:"0.25rem",width:"max-content"},children:[line.map((function(word,w_index){return Object(jsx_runtime.jsxs)(react.Fragment,{children:[Object(jsx_runtime.jsx)(Word,{word:word}),w_index!==line.length&&Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "})]},w_index)})),!isFinal&&Object(jsx_runtime.jsx)("br",{})]})}})};TextAssembler_stories_CustomLineRenderer.displayName="CustomLineRenderer",Simple.parameters=Object.assign({storySource:{source:"(args) => (\n\t<TextAssembler {...args} />\n)"}},Simple.parameters),TextAssembler_stories_HandleWordClick.parameters=Object.assign({storySource:{source:'function HandleWordClick() {\n\tconst text =\n\t\t"They say I pretend or lie\\r\\nAll I write. No such thing.\\r\\nIt simply is that I\\r\\nFeel by imagining.\\r\\nI don\'t use the heart-string.\\r\\n\\r\\nAll that I dream or lose,\\r\\nThat falls short or dies on me,\\r\\nIs like a terrace which looks\\r\\nOn another thing beyond.\\r\\nIt\'s that thing leads me on.\\r\\n\\r\\nAnd so I write in the middle\\r\\nOf things not next one\'s feet,\\r\\nFree from my own muddle,\\r\\nConcerned for what is not.\\r\\nFeel? Let the reader feel!";\n\n\treturn (\n\t\t<TextAssembler\n\t\t\ttext={text}\n\t\t\tonWordClick={(word: string) => {\n\t\t\t\t\n\t\t\t\twindow.alert("Clicked:" + word);\n\t\t\t}}\n\t\t/>\n\t);\n}'}},TextAssembler_stories_HandleWordClick.parameters),TextAssembler_stories_CustomWordRenderer.parameters=Object.assign({storySource:{source:'function CustomWordRenderer() {\n\tconst text =\n\t\t"They say I pretend or lie\\r\\nAll I write. No such thing.\\r\\nIt simply is that I\\r\\nFeel by imagining.\\r\\nI don\'t use the heart-string.\\r\\n\\r\\nAll that I dream or lose,\\r\\nThat falls short or dies on me,\\r\\nIs like a terrace which looks\\r\\nOn another thing beyond.\\r\\nIt\'s that thing leads me on.\\r\\n\\r\\nAnd so I write in the middle\\r\\nOf things not next one\'s feet,\\r\\nFree from my own muddle,\\r\\nConcerned for what is not.\\r\\nFeel? Let the reader feel!";\n\tconst wordComponent = (props: IWordProps) => {\n\t\t\n\t\tconst { word } = props;\n\t\tconst randomColor = Math.floor(Math.random() * 16_777_215).toString(16);\n\t\treturn <span style={{ backgroundColor: "#" + randomColor }}>{word}</span>;\n\t};\n\n\treturn <TextAssembler text={text} wordComponent={wordComponent} />;\n}'}},TextAssembler_stories_CustomWordRenderer.parameters),TextAssembler_stories_HoverEffect.parameters=Object.assign({storySource:{source:'function HoverEffect() {\n\tconst text =\n\t\t"They say I pretend or lie\\r\\nAll I write. No such thing.\\r\\nIt simply is that I\\r\\nFeel by imagining.\\r\\nI don\'t use the heart-string.\\r\\n\\r\\nAll that I dream or lose,\\r\\nThat falls short or dies on me,\\r\\nIs like a terrace which looks\\r\\nOn another thing beyond.\\r\\nIt\'s that thing leads me on.\\r\\n\\r\\nAnd so I write in the middle\\r\\nOf things not next one\'s feet,\\r\\nFree from my own muddle,\\r\\nConcerned for what is not.\\r\\nFeel? Let the reader feel!";\n\tconst MyWordComponent = (props: IWordProps) => {\n\t\tconst { word } = props;\n\t\tconst [isHovered, setIsHovered] = React.useState(false);\n\t\treturn (\n\t\t\t<Word\n\t\t\t\tword={word}\n\t\t\t\tstyle={\n\t\t\t\t\tisHovered\n\t\t\t\t\t\t? {\n\t\t\t\t\t\t\t\tbackgroundColor: "rgb(255,0,0, 0.75)"\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t: {}\n\t\t\t\t}\n\t\t\t\tonMouseEnter={() => {\n\t\t\t\t\tsetIsHovered(true);\n\t\t\t\t}}\n\t\t\t\tonMouseLeave={() => {\n\t\t\t\t\tsetIsHovered(false);\n\t\t\t\t}}\n\t\t\t/>\n\t\t);\n\t};\n\n\treturn <TextAssembler text={text} wordComponent={MyWordComponent} />;\n}'}},TextAssembler_stories_HoverEffect.parameters),TextAssembler_stories_CustomLineRenderer.parameters=Object.assign({storySource:{source:'function CustomLineRenderer() {\n\tconst text =\n\t\t"They say I pretend or lie\\r\\nAll I write. No such thing.\\r\\nIt simply is that I\\r\\nFeel by imagining.\\r\\nI don\'t use the heart-string.\\r\\n\\r\\nAll that I dream or lose,\\r\\nThat falls short or dies on me,\\r\\nIs like a terrace which looks\\r\\nOn another thing beyond.\\r\\nIt\'s that thing leads me on.\\r\\n\\r\\nAnd so I write in the middle\\r\\nOf things not next one\'s feet,\\r\\nFree from my own muddle,\\r\\nConcerned for what is not.\\r\\nFeel? Let the reader feel!";\n\tconst MyLineComponent = (props: ILineProps) => {\n\t\tconst { line, isFinal } = props;\n\t\tconst randomColor = Math.floor(Math.random() * 16_777_215).toString(16);\n\n\t\treturn (\n\t\t\t<div\n\t\t\t\tstyle={{\n\t\t\t\t\tbackgroundColor: "#" + randomColor,\n\t\t\t\t\tmargin: "0.25rem",\n\t\t\t\t\twidth: "max-content"\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t{line.map((word, w_index) => (\n\t\t\t\t\t<Fragment key={w_index}>\n\t\t\t\t\t\t<Word word={word} />\n\t\t\t\t\t\t{w_index !== line.length && <>&nbsp;</>}\n\t\t\t\t\t</Fragment>\n\t\t\t\t))}\n\t\t\t\t{!isFinal && <br />}\n\t\t\t</div>\n\t\t);\n\t};\n\n\treturn <TextAssembler text={text} lineComponent={MyLineComponent} />;\n}'}},TextAssembler_stories_CustomLineRenderer.parameters)},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(52),__webpack_require__(428),__webpack_require__(838),__webpack_require__(50),__webpack_require__(839),__webpack_require__(840),__webpack_require__(427);var client_api=__webpack_require__(865),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:__webpack_require__(140).a.dark}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[482,2,3]]]);