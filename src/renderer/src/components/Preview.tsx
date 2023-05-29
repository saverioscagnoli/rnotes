import { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { mdTheme } from "@renderer/assets";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import { EditorContext } from "@renderer/contexts";

const remarkPlugins = [remarkGfm, remarkMath, remarkBreaks, remarkEmoji];
const rehypePlugins = [rehypeKatex, rehypeRaw];

function Preview() {
  const { val } = useContext(EditorContext)!;
  return (
    <Flex justifyContent="center">
      <Box
        id="md"
        h="89vh"
        w="70%"
        fontWeight="semibold"
        wordBreak="break-all"
        overflow="auto"
      >
        <ReactMarkdown
          components={ChakraUIRenderer(mdTheme)}
          skipHtml
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
          children={val.length ? val : "Nothing to preview."}
        />
      </Box>
    </Flex>
  );
}

export default Preview;
