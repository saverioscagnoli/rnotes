import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown.css";

interface PreviewProps {
  preview: boolean;
  doc: string;
}

const Preview = ({ preview, doc }: PreviewProps) => {
  return (
    <div
      className={`preview markdown-body ${preview ? "show" : "hide"}`}
      style={{ width: "100%" }}
    >
      <Markdown
        children={doc}
        remarkPlugins={[remarkGfm, remarkBreaks, remarkMath]}
        rehypePlugins={[rehypeSanitize, rehypeKatex, rehypeRaw]}
      />
    </div>
  );
};

export { Preview };
