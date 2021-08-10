import ExamForm from "./components/Exams/ExamForm";
import Questions from "./components/Questions";

import "./styles.css";

export function HelloSandbox() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Quizzap</h1>
      <Questions />

      <ExamForm />
    </>
  );
}
