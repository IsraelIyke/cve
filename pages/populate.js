import { useState } from "react";
import { supabase } from "./api/client";

export default function Populate() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  console.log(question);

  async function handleSubmit() {
    const { data, error } = await supabase
      .from("cve541")
      .insert([{ question: question, answer: answer }]);
    if (error) {
      console.log(error);
    } else {
      setAnswer("");
      setQuestion("");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="question"
      />
      <br />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="answer"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
