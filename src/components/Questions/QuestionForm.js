import React from "react";

const actionTypes = {
  CHANGE: "CHANGE",
  SUBMIT: "SUBMIT"
};

const initialState = {
  questionType: "",
  query: "",
  choices: [],
  answer: ""
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE:
    case actionTypes.SUBMIT:
    default:
      return state;
  }
};

export default function QuestionForm() {
  const [questionState, setQuestionState] = React.useState({});
  const handleChange = (param) => {
    console.log("Param: ", param);
  };
  const handleSubmit = () => {};
  const handleReset = () => {};
  return (
    <form onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset}>
      {/* 
        QuestionTpe: ['choice', 'blank']
        QuestionQuery: String, 
        Choices: Array<Choice>, 
        Answer: String
    */}
    </form>
  );
}
