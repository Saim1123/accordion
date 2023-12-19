import { useState } from "react";
import "./App.css";
import data from "./data";
import Accordions from "./components/Accordions";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Accordions data={questions} />
    </main>
  );
}

export default App;
