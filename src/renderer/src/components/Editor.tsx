import {
  ChangeEvent,
  RefObject,
  KeyboardEvent,
  useState,
  useCallback
} from "react";
import { Box, Flex, Textarea } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import "katex/dist/katex.min.css";
import { editorTheme } from "@renderer/assets";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import createTheme from "@uiw/codemirror-themes";

interface EditorProps {
  val: string;
  onEdit: (e: any) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  txRef: RefObject<HTMLTextAreaElement>;
}

const theme = createTheme({
  theme: "light",
  settings: {
    background: "transparent",
    foreground: "#75baff"
  },

  styles: []
});

function Editor({ val, onEdit, onKeyDown, txRef }: EditorProps) {
  const [value, setValue] = useState("");
  const onChange = useCallback((value, viewUpdate) => {
    setValue(value);
  }, []);
  return (
    <Flex h="100%" justifyContent="center" gap="0.5rem">
      <CodeMirror
        value={value}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages })
        ]}
        theme={theme}
        onChange={onChange}
        style={{
          width: "100%",
          height: "89%",
          overflow: "auto"
        }}
      />
      ;
      <Box
        id="md"
        w="100%"
        h="89%"
        fontWeight="semibold"
        mr="0.5rem"
        wordBreak="break-all"
        overflow="auto"
      >
        <ReactMarkdown
          components={ChakraUIRenderer(editorTheme)}
          skipHtml
          remarkPlugins={[remarkGfm, remarkMath, remarkBreaks, remarkEmoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          children={value}
        />
      </Box>
    </Flex>
  );
}

export default Editor;
