import { useEffect, useState } from "react";
import Card from "../components/cards";
import Category from "../components/category";
import { supabase } from "./api/client";

export default function Cve541() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    Data();
  }, []);
  async function Data() {
    let { data: cve541, error } = await supabase.from("cve541").select("*");
    console.log(cve541[0].question);
    if (cve541) {
      setQuestion(cve541);
    }
    if (error) {
      console.log(error);
    }
  }
  const quiz = question.map((element) => (
    <Card
      key={element.id}
      question={element.question}
      answer={element.answer}
      id={element.id}
    />
  ));
  const number = question.map((element) => (
    <Category key={element.id} id={element.id} />
  ));
  return (
    <div className="card-container">
      <div className="scroll">
        <div className="number-container">{number}</div>
      </div>

      <div className="quiz-container">{quiz}</div>
    </div>
  );
}
