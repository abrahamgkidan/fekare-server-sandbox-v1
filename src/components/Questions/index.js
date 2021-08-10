import React from "react";
import QuestionList from "./QuestionList";
import QuestionView from "./QuestionView";

const initialState = {
  questions: [
    {
      id: "1",
      questionType: "choice",
      query: "Are you a person",
      choices: [
        { key: "A", choice: "Yes" },
        { key: "B", choice: "No" }
      ]
    }
  ],
  responses: {},
  selected: null
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_Q":
      return { ...state, selected: payload };
    case "ADD_Q":
    case "UPDATE_Q":
    case "DELETE_Q":
    case "SET_R":
      return { ...state, responses: { ...state.responses, ...payload } };
    default:
      return state;
  }
};

export default function Questions() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleAddQuestion = (q) => {
    dispatch({ type: "ADD_Q", payload: q });
  };

  const handleUpdateQuestion = (q) => {
    dispatch({ type: "UPDATE_Q", payload: q });
  };

  const handleDeleteQuestion = (q) => {
    dispatch({ type: "DELETE_Q", payload: q });
  };

  const handleEditQuestionClick = (id) => {
    // Do some form logic
  };

  const handleQuestionSelectionChange = (id) => {
    dispatch({ type: "SELECT_Q", payload: id });
  };

  const handleResponseChange = (response) => {
    dispatch({ type: "SET_R", payload: response });
  };

  return (
    <div>
      <h3>Question Bank</h3>
      <QuestionList
        questions={state.questions}
        onEditQuestion={handleEditQuestionClick}
        onDeleteQuestion={handleDeleteQuestion}
        onSelectQuestion={handleQuestionSelectionChange}
      />
      {state.selected ? (
        <QuestionView
          qIndex={state.selected}
          question={state.questions.filter((q) => q.id === state.selected)[0]}
          onResponseChange={handleResponseChange}
        />
      ) : (
        <h5>Select a question</h5>
      )}
    </div>
  );
}
