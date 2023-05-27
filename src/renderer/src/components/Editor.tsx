import { useContext, useCallback, useRef, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { dark, light } from "@renderer/assets";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorContext } from "@renderer/contexts";
import Preview from "./Preview";
import "katex/dist/katex.min.css";

function Editor() {
  const { colorMode } = useColorMode();
  const { val, setVal, prev } = useContext(EditorContext)!;
  const onEdit = useCallback((v: string) => setVal(v), []);

  const ref = useRef<ReactCodeMirrorRef>(null);

  useEffect(() => {
    let cm = ref.current;
    if (cm) {
      /* cm.view?.dispatch({
            changes: { from: 0, to: cm.state?.doc.length, insert: "a" }
          }); */
      let caret = cm.view?.state?.selection.main.head;

      var precedingText = val.substring(0, caret);
      var followingText = val.substring(caret!);

      var openingParenthesesIndex = precedingText.lastIndexOf("$$");
      var closingParenthesesIndex = followingText.indexOf("$$");

      if (
        openingParenthesesIndex !== -1 &&
        closingParenthesesIndex !== -1 &&
        openingParenthesesIndex < closingParenthesesIndex
      ) {
        console.log("in Math block");
      } else {
        console.log("not in math block");
      }
    }
  }, [val]);

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
      ref={ref}
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
