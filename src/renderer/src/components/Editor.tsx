import { useEditor } from "@renderer/hooks";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import "katex/dist/katex.min.css";

function Editor() {
  const { val, onEdit, onKeyDown, txRef } = useEditor();

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem"
      }}
    >
      <textarea
        name="editor"
        ref={txRef}
        value={val}
        onChange={onEdit}
        onKeyDown={onKeyDown}
        style={{
          width: "100%",
          height: "92%",
          marginLeft: "0.5rem",
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
      <div
        style={{
          width: "100%",
          height: "92%",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: "500",
          marginRight: "0.5rem",
          wordBreak: "break-all",
          overflow: "auto"
        }}
      >
        <ReactMarkdown
          skipHtml
          remarkPlugins={[remarkGfm, remarkMath, remarkBreaks, remarkEmoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          children={val}
        />
      </div>
    </div>
  );
}

export default Editor;
