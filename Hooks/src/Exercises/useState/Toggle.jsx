import React from "react";

function Toggle() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello! How do you feel? ^^</p>}
    </div>
  );
}

export default Toggle;
