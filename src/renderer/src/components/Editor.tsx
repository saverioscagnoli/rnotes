import { ChangeEvent, RefObject, KeyboardEvent } from "react";
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

interface EditorProps {
  val: string;
  onEdit: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  txRef: RefObject<HTMLTextAreaElement>;
}

function Editor({ val, onEdit, onKeyDown, txRef }: EditorProps) {
  return (
    <Flex h="100%" justifyContent="center" gap="0.5rem">
      <Textarea
        ref={txRef}
        value={val}
        onChange={onEdit}
        onKeyDown={onKeyDown}
        w="100%"
        h="89%"
        ml="0.5rem"
        border="none"
        outline="none"
        boxShadow="none"
        overflow="auto"
        fontWeight="semibold"
        resize="none"
        _focusVisible={{ outline: "none" }}
      />
      <Box
        w="100%"
        h="89%"
        fontWeight="semibold"
        mr="0.5rem"
        wordBreak="break-all"
        overflow="auto"
      >
        <ReactMarkdown
          components={ChakraUIRenderer()}
          skipHtml
          remarkPlugins={[remarkGfm, remarkMath, remarkBreaks, remarkEmoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          children={val}
        />
      </Box>
    </Flex>
  );
}

export default Editor;
