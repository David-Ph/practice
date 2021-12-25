// 1. Import the custom hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // 2. And call the hooks here
  // this hook is used to "select" which part of the store that
  // we want to use in this component
  // as an argument, it will receive the whole state as
  // and then we can return the specific state we want
  // and this will also automatically subscribe this component
  // to the redux store
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const visible = useSelector((state) => state.visible);
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: "INCREASE", increase: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: "DECREASE", decrease: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>{counter}</div> */}
      <div className={classes.value}>
        {visible ? counter : "Counter Hidden"}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// using class way

// class Counter extends Component {
//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.dispatch({ type: "INCREMENT" });
//   };

//   decrementHandler = () => {
//     this.props.dispatch({ type: "DECREMENT" });
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ action: "INCREMENT" }),
//     decrement: () => dispatch({ action: "DECREMENT" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
