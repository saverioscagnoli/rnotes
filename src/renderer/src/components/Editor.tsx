import { useEditor } from "@renderer/hooks";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import "katex/dist/katex.min.css";

const def = "# Hello world! \nThis is **markdown!**";

function Editor() {
  const { val, onEdit } = useEditor();
  const scrollRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView();
    }, 10);
  }, [val]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem"
      }}
    >
      <textarea
        name="editor"
        value={val}
        onChange={onEdit}
        style={{
          width: "100%",
          height: "90%",
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
          height: "90%",
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
        >
          {val}
        </ReactMarkdown>
        <span ref={scrollRef}></span>
      </div>
    </div>
  );
}

export default Editor;
