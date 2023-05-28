import { useContext, useCallback, useRef } from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { dark, light } from "@renderer/assets";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "@renderer/contexts";
import { EditorView } from "@codemirror/view";
import Preview from "./Preview";
import MathPopover from "./MathPopover";
import { useKeymaps, useKeydown, useMathPopover } from "@renderer/hooks";

const extensions = [
  markdown({ base: markdownLanguage, codeLanguages: languages }),
  EditorView.lineWrapping
];

function Editor() {
  const { colorMode } = useColorMode();
  const ref = useRef<ReactCodeMirrorRef>(null);
  const { val, setVal, prev, setPrev } = useContext(EditorContext)!;
  const math = useMathPopover(ref, val);
  const onEdit = useCallback((v: string) => setVal(v), []);
  const onKey = useKeymaps(val, ref, setVal);

  useKeydown(setPrev);

  return !prev ? (
    <Flex w="100%" h="100%" justifyContent="center">
      <CodeMirror
        value={val}
        extensions={extensions}
        basicSetup={{
          foldGutter: false,
          autocompletion: true,
          bracketMatching: true,
          lineNumbers: false
        }}
        ref={ref}
        onChange={onEdit}
        /* @ts-ignore */
        onKeyDown={onKey}
        theme={colorMode === "light" ? light : dark}
        placeholder="# Hello world!"
        style={{
          width: "70%",
          height: "89%",
          overflow: "auto"
        }}
      />
      {math && math.split("").some(c => c !== " " && c !== "\n") && (
        <MathPopover katex={math} />
      )}
    </Flex>
  ) : (
    <Preview />
  );
}

export default Editor;
