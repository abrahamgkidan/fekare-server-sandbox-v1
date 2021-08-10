export default function TextInput({ fullWidth, multiline, label, ...rest }) {
  return (
    <div
      style={{
        width: fullWidth ? "100%" : "inherit",
        boxSizing: "content-box",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        border: "1px solid #666",
        margin: "10px 0"
      }}
    >
      {label && (
        <label
          style={{
            fontWeight: 500,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            background: "#ddd",
            padding: "0 5px 5px 5px"
          }}
        >
          {label}
        </label>
      )}
      {multiline ? (
        <textarea style={{ padding: "8px" }}></textarea>
      ) : (
        <input
          style={{ padding: "8px", outline: "none", border: "none" }}
          {...rest}
        />
      )}{" "}
    </div>
  );
}
