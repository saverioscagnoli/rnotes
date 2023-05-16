import { useTextarea } from "@renderer/hooks";

function Textarea() {
  const { /* val, */ onEdit } = useTextarea();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <textarea
        name="editor"
        onChange={onEdit}
        style={{
          width: "90%",
          height: "90%",
          border: "none",
          outline: "none",
          boxShadow: "none",
          overflow: "auto",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: "500",
          resize: "none"
        }}
      />
    </div>
  );
}

export default Textarea;
