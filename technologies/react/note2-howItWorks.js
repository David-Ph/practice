/* 
lecture: 158
https://www.udemy.com/course/react-the-complete-guide-incl-redux/
? How react works
react is all about components, we use components to compose and update those user interfaces.

react only manages the components, states, props, data, context, etc. But the one who's actually responsible for rendering it on the browser is react-dom. Anytime component/states changes that needs the UI to change, react lets react-dom knows about it.

React determines how the component tree currently looks like and what it should look like, then ReactDOM receives the differences and manipulates the real DOM.

whenever state props, or context of a component changes, that component is reevaluated, reexecuted by react and rerendered if it has changes.

it will only rerender the differences. Not the entire component.

for example

<div>
    <h1>hello</h1>
</div>

then it changes to

<div>
    <h1>hello</h1>
    <p>hello</p>
</div>

in this case, only the p tag will be rerendered. not the entire div or h1.

? Child components are also reevaluated and reexecuted when the parent components are reevaluated.

Now comes an important question, isn't it a waste if the child components will never change but it's reexecuted anyway? That's where React.memo can help us.

TODO: React.memo
? export default React.memo(DemoComponent)
just wrap the children exporting it with React.memo
the way this works is, it will only reexecute the child component if the props value in the child component changes

But this React.memo also has some performance cost for comparing props. So you shouldn't overdo it, only use React.memo if it has a big component tree.

common gotchas with React.memo is that it compares with ===, so if it's only comparing between two primitive values like boolean, string, numbers, it will work. but if it's comparing reference values like function, objects, etc, it will not work, because you're actually comparting the pointer of those values. 

TODO: useCallback
If you want to use a function or object as props and you don't want to keep reexecuting the children component that uses it, for example the setState function, you can use useCallback. just wrap the function to it in useCallback.

? const toggleParahgraph = useCallback(() => {
?     setParagraph((prevState) => != prevState)
? }, [])

you can put your dependencies in the second argument. For example, if you're passing an array, or if you need a closure. for example

? const toggleParahgraph = useCallback(() => {
?   if(allowToggle){
?       setParagraph((prevState) => != prevState)
?   }    
? }, [allowToggle])

with this, we will recreate the function if allowToggle changes

this works like
const obj1 = {};
const obj2 = obj1;
obj2 === obj1 // true;

? Reevaluating or reexecuting a component is not the same as manipulating the dom. the dom will only be manipulated when there's something that needs to change

If a component function is reexecuted every time something changes, then what happens to useState initial value? does it get reset everytime?

No. The way react works, is that the initial value we put in useState, is only executed once, so it will store the state somewhere in memory. For the subsequent component execution, react will know that the state has already been created, and it will not create a new state.

TODO: How to properly use state that depends on previous state?
So the way react works is, when we use setStateFn(), it schedules that changes and only changes it when it got the chance to. Sometimes so many things may happens at once and this schedules might be full, so when you use setStateFn() and use the state directly, it will use the value from when it was last rerendered, and that may not be the value you want when so many schedules are happening.

so thats why you can use ((prevstate)) to make sure you DO get the previousState, not just the state from the last time the component was rerendered.

if, in one function, you use two setStates together in the same block, react will batch those updates into one state update. So it's just one process that will change two states.

another example is in this code below

?const nameInputChangeHandler = (event) => {
?    setEnteredName(event.target.value);
?
?    // the reason why we're accessing event target value here and not 
?    // the enteredName state is, because the way react works, it schedules 
?    // the state changes, so when this code below executes, we may not have\
?    // the latest state changes yet
?    
?    if (event.target.value.trim() !== "") {
?      setNameIsValid(true);
?    }
?  };

TODO: useMemo
so if we do a performance intensive task like sorting in the child component, and we pass props to that child component, even if the sorting doesn't change, we'd still need to reexecute and redo the sorting if props changes. this is where useMemo can help us

? const {items} = props;
? 
? const sortedList = useMemo(() => {
?     return items.sort((a, b) => a - b);
? }, [items])

first argument is a function of we want to return, the second argument is the dependencies. basically the function will reexecute everytime the dependencies changes.

now even if the whole component is reexecuted, if items does not change, the sorting will not be reexecuted.

in parents components, this might be how it looks too because we want to make sure the parents doesnt give new object everytime

? <DemoList title={newTitle} items={useMemo(() => [2, 3, 5, 1, 4], [])}

we pass empty array as dependencies beucase that array enver changes
*/
