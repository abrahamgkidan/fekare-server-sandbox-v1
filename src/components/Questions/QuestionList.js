import Table from "../Table";

export default function QuestionList({
  questions,
  onEditQuestion,
  onDeleteQuestion,
  onSelectQuestion
}) {
  return (
    <Table
      columns={[
        { field: "id", label: "ID" },
        { field: "query", label: "Question" },
        { field: "actions", label: "" }
      ]}
      data={questions.map(({ id, query, ...rest }) => ({
        id,
        query,

        actions: (
          <span>
            <button onClick={() => onSelectQuestion(id)}>select</button>
            <button onClick={() => onEditQuestion(id)}>edit</button>
            <button onClick={() => onDeleteQuestion(id)}>delete</button>
          </span>
        )
      }))}
    />
  );
}
