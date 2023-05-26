import { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { editorTheme } from "@renderer/assets";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import { EditorContext } from "@renderer/contexts";

function Preview() {
  const { val } = useContext(EditorContext)!;
  return (
    <Flex w="70%" h="89%" justifyContent="center">
      <Box id="md" fontWeight="semibold" wordBreak="break-all" overflow="auto">
        <ReactMarkdown
          components={ChakraUIRenderer(editorTheme)}
          skipHtml
          remarkPlugins={[remarkGfm, remarkMath, remarkBreaks, remarkEmoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          children={val}
        />
      </Box>
    </Flex>
  );
}

export default Preview;
