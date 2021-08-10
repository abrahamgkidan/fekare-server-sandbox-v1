import React from "react";
import TextInput from "../TextInput";

export default function ExamForm({ exam, onExamSubmit }) {
  const initialState = exam || {
    title: "",
    description: "",
    questions: [],
    answers: [],
    timeAllowed: 0
  };
  const [state, setState] = React.useState(initialState);

  const handleChange = (property) => (e) => {
    const { name, value } = e.target;
    setState({ ...state, [property || name]: value });
  };

  const handleSubmit = () => {
    // Maybe validate before submitting
    // typeof onExamSubmit === 'function' && onExamSubmit(state);
  };
  const handleReset = () => {
    setState(initialState);
  };

  return (
    <div>
      <h2>{exam ? "Edit exam" : "Create exam"} </h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <TextInput
          label={"Title"}
          name="title"
          onChange={handleChange("title")}
          value={state.title}
        />

        <TextInput
          multiline
          label={"Description"}
          name="description"
          onChange={handleChange("description")}
          value={state.description}
        />

        <TextInput
          type="number"
          label="Time Allowed (mins)"
          name="duration"
          min="5"
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="button">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
