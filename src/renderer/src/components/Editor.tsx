import { useContext, useCallback } from "react";
import { useColorMode } from "@chakra-ui/react";
import { dark, light } from "@renderer/assets";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "@renderer/contexts";
import Preview from "./Preview";
import "katex/dist/katex.min.css";

function Editor() {
  const { colorMode } = useColorMode();
  const { val, setVal, prev } = useContext(EditorContext)!;
  const onEdit = useCallback((v: string) => setVal(v), []);

  return !prev ? (
    <CodeMirror
      value={val}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages })
      ]}
      basicSetup={{
        foldGutter: false,
        autocompletion: true,
        bracketMatching: true
      }}
      onChange={onEdit}
      theme={colorMode === "light" ? light : dark}
      placeholder="# Hello world!"
    
      style={{
        width: "100%",
        height: "89%",
        overflow: "auto"
      }}
    />
  ) : (
    <Preview />
  );
}

export default Editor;
