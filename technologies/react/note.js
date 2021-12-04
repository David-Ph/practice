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

In react, we can do conditonal rendering by doing
? {filteredExpenses.length === 0 && <p>No expenses on this year.</p>}

In react, if we want to do inline css, we put the style property in the html, and then we insert a javascript object inside of it
? <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>

My simple explanation of what this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.

* Common problem with react is that JSX can't return two adjacent element, so you need to wrap them in a single div. The problem with this is you can end up with a lot of unnecessary div.

? the solution to this is you can create a wrapper component that only returns props.children, so this is basically an empty element.

You can create your own empty wrapper component, or you can just use the one that comes with react called
? <React.Fragment> {props.children} </React.Fragment> OR
?   <> {props.children} </>

another problem with react jsx is that sometimes you don't want to write the html in the component you're rendering, for example, for a modal, you probably want to put it on the top level of html.

THis is where react portal can help you.

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

*/