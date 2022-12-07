import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      // This is the properties that will trigger on different state
      // of the component
      onEnter={() => console.log("OnEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}
      // so this will automatically adds classes
      // depending on the state of the animation
      // it will truncate enter, enter-active, exit, exit-active
      // at the end of the classNames we entered below
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
