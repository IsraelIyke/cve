import { useState } from "react";

export default function Card(props) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prev) => !prev);
  }
  return (
    <div className="card" id={props.id}>
      <h3>{props.question}</h3>
      <div className="answer">
        <div className="point" onClick={handleClick}></div>
        {clicked && <div>{props.answer}</div>}
      </div>
    </div>
  );
}
