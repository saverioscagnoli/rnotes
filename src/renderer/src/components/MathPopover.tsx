import { Popover, PopoverBody, PopoverContent } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

interface MathPopoverProps {
  katex: string;
}

interface Pos {
  x: number;
  y: number;
}

const Y_OFFSET = 30;

function MathPopover({ katex }: MathPopoverProps) {
  const [pos, setPos] = useState<Pos | null>(null);

  useEffect(() => {
    let sel = window.getSelection();
    let range = sel?.getRangeAt(0);
    let rect = range?.getClientRects()[0];
    let [x, y] = [rect?.left!, rect?.top! + Y_OFFSET!];
    setPos({ x, y });
  }, []);

  return (
    <Popover isOpen autoFocus={false}>
      <PopoverContent left={pos?.x} top={pos?.y}>
        <PopoverBody>
          <ReactMarkdown
            children={`$$${katex}$$`}
            components={ChakraUIRenderer()}
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkMath]}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default MathPopover;
