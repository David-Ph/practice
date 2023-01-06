import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText((state) => !state);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText ? (
        <Output>its good to see you!</Output>
      ) : (
        <Output>Text is changed!</Output>
      )}
      <button onClick={handleChangeText}>Change text!</button>
    </div>
  );
}

export default Greeting;
