import React from "react";

export function QuestionFeedback({ success, remark, feedback }) {
  return <div></div>;
}

export function QuestionChoices({
  choiceType = "alphabet",
  choices,
  onSelectionChange
}) {
  const [selection, setSelection] = React.useState(null);

  const handleSelectionChange = (value) => () => {
    setSelection(value);
    typeof onSelectionChange === "function" && onSelectionChange(value);
  };

  return (
    <ol
      style={{
        listStyleType:
          choiceType === "numeric"
            ? "decimal"
            : choiceType === "roman"
            ? "upper-roman"
            : "upper-alpha"
      }}
    >
      {choices.map(({ key, choice }) => (
        <li
          style={{
            textDecoration: selection === choice ? "line-through" : "none"
          }}
          onClick={handleSelectionChange(choice)}
          key={key}
        >
          <span>{choice}</span>
        </li>
      ))}
    </ol>
  );
}

export function QuestionResponse({ response, onResponseChange }) {
  return (
    <input
      style={{
        minWidth: "15ch",
        width: "100%",
        border: "none",
        borderBottom: "2px solid #111"
      }}
      value={response}
      onChange={onResponseChange}
      placeholder="Enter your answer here"
    />
  );
}

export function QuestionQuery({ query, media }) {
  // if (media === "image") {
  // } else if (media === "video") {
  // } else {

  // }

  return (
    <div>
      <p>{query}</p>
    </div>
  );
}

export default function QuestionView({
  qIndex = 1,
  question = {},
  onResponseChange
}) {
  const { questionType, query, queryMedia, choices } = question;
  const [response, setResponse] = React.useState("");

  const handleResponseChange = (r) => {
    setResponse(r);
    onResponseChange(r);
  };

  return (
    <div>
      <h5>Question #{qIndex}</h5>
      <QuestionQuery qIndex={qIndex} query={query} media={queryMedia} />
      {questionType === "choice" ? (
        <QuestionChoices
          choices={choices}
          onSelectionChange={handleResponseChange}
        />
      ) : (
        <QuestionResponse
          response={response}
          onResponseChange={handleResponseChange}
        />
      )}
    </div>
  );
}
