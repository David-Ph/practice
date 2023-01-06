import { useState } from "react";

function Greeting() {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText((state) => !state);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText ? <p>its good to see you!</p> : <p>Text is changed!</p>}
      <button onClick={handleChangeText}>Change text!</button>
    </div>
  );
}

export default Greeting;
