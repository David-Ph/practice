/* 
With react, you can create a component that wraps other html or component elements
? for example <Card className="expense-item">HTML ELEMENT</Card>
in that case, you need to set {props.children} or {props.className}
in the wrapper component

? import {useState} from 'React';
useState is a function provided from React library, it allows us to define values as state, and any change to those values should force the component function to rerender again

useState needs a default value, for example
? const [title, setTitle] = useState(props.title);

you can also useState to an object
const [input, setInput]useState = ({
    title: "",
    amount: "",
    date: ""
})

setInput({
    ...input,
    title = event.target.value
})

whenever your setState functions depends on the previous state, you should do it like this
setInput((prevState)=>{
    return {...prevState, title: event.target.value}
})

We can pass data from parents to child by passing props from parent to child.
We can also pass data from child to parent by parent passing a function as pointer, and then the child components will need to call that function and return a value to the parent component.

Lifting a state up is when a child component passes data to another sibling component by passing the data through the parent component, and that parent component passes the data to the component that needed it

TODO: React conditional rendering
In react, we can do conditonal rendering by doing
? {filteredExpenses.length === 0 && <p>No expenses on this year.</p>}

TODO: React inline css
In react, if we want to do inline css, we put the style property in the html, and then we insert a javascript object inside of it
? <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>

TODO: react props children
My simple explanation of what this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.

TODO: React Wrapper and Fragment
* Common problem with react is that JSX can't return two adjacent element, so you need to wrap them in a single div. The problem with this is you can end up with a lot of unnecessary div.

? the solution to this is you can create a wrapper component that only returns props.children, so this is basically an empty element.

You can create your own empty wrapper component, or you can just use the one that comes with react called
? <React.Fragment> {props.children} </React.Fragment> OR
?   <> {props.children} </>



TODO: React Portal
another problem with react jsx is that sometimes you don't want to write the html in the component you're rendering, for example, for a modal, you probably want to put it on the top level of html.

THis is where react portal can help you.

TODO: react ref
use you use react useRef to get reference to a DOM element, kinda similar to document.querySelector

TODO: React side effects
React main job is to render UI and react to user input, to do that, react evaluates and render jsx, manages state and props, react to events and inputs, and reevaluate components upon state and prop changes.

Side effect is anything else, for example, store data in browser storage, send HTTP request, set and manage timers, etc.

? useEffect(() => {}, [dependencies]);
first argument is a function that runs after every component evaluation if the specified dependencies changes

the second argument is the dependencies of this effect, the function only runs if this changes.

another example of using useEffect:
?    import { useEffect, useState } from 'react';
?     
?    let myTimer;
?     
?    const MyComponent = (props) => {
?      const [timerIsActive, setTimerIsActive] = useState(false);
?     
?      const { timerDuration } = props; // using destructuring to pull out specific props values
?     
?      useEffect(() => {
?        if (!timerIsActive) {
?          setTimerIsActive(true);
?          myTimer = setTimeout(() => {
?            setTimerIsActive(false);
?          }, timerDuration);
?        }
?      }, [timerIsActive, timerDuration]);
?    };

In every useEffect, you can return a function, this is called cleanup.
it runs before every new side effects function execution.


TODO: React usereducer
somtimes in react when you have too many state to manage, it can be buggy and hard to manage
usereducer can help you

In general, updating a state depending on another state might not be a good idea, because not only it gets messy, but also because it might not be the latest update of that state.

in that case, merging it into one state with the help of useReducer is a good idea.

? const [state, dispatchFn] = useReducer(reducerFn, initialState, initFNn;
state = the latest state snapshot used in the component
dispatchFn = a function to dispatch a new action(updating the state), this action will be consumed by reducerFn
reducerFn = a function that is triggered automatically once an action is dispatched, it receives the latest state snapshot and should return the new, updated state
initialState = ?
initFn = a function to set the initial state

so basically the flow is, state is the state that holds all the states you want to handle. 
dispatchFn is the function you call when you want to update the state, in it, you typically pass an object with the updated value and a type property. and this action will be passed to reducerFn

in reducerFn, you check what type is the action that is passed, and depending on that type, you decide what state to update.

? useReducer vs useState.
Usually you want to use useState, but when it gets cumbersome or it becomes too big, you want to use useReducer. useReducer can also be useful when you have a state that depends on other state

TODO: React Context
In react, sometimes we need to pass data through props to other components
this can get troublesome in bigger app because we might pass props through a LOT of components that doesn't actually need it.
this is where react context can help

the flow is: We create a AuthContext, then we export and import it in the component that needs it the most, then we create a provider, and then set up a consumer in the child component that needs it

we can also pass a function through context

? When to use props vs context?
If your component is reusable, use props
if it's something very specific and it has to go through a lot of components, use context

*/