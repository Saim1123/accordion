import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main className=" w-3/6 m-auto flex min-h-120 justify-center items-center bg-white ">
      <Accordion data={questions} />
    </main>
  );
}

export default App;
