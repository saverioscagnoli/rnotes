import { useContext, useCallback } from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { dark, light } from "@renderer/assets";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "@renderer/contexts";
import { EditorView } from "@codemirror/view";
import { MathPopover, Navbar } from "../components";
import { useKeymaps, useKeydown, useMathPopover } from "@renderer/hooks";

const extensions = [
  markdown({ base: markdownLanguage, codeLanguages: languages }),
  EditorView.lineWrapping
];

function Editor() {
  const { colorMode } = useColorMode();
  const { editorRef, val, setVal, prev } = useContext(EditorContext)!;
  const math = useMathPopover(editorRef, val);
  const onEdit = useCallback((v: string) => setVal(v), []);
  const onKey = useKeymaps(val, editorRef, setVal);

  useKeydown(editorRef, prev);

  return (
    <>
      <Navbar />
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
          ref={editorRef}
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
    </>
  );
}

export default Editor;
