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
*/