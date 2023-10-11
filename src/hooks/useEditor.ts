import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import {
  EditorView,
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter
} from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  bracketMatching,
  indentOnInput,
  syntaxHighlighting
} from "@codemirror/language";
import { MutableRefObject, useRef, useState, useEffect } from "react";
import { history, historyKeymap, defaultKeymap } from "@codemirror/commands";
import { closeBrackets } from "@codemirror/autocomplete";
import { syntax } from "../editor-theme";

interface UseEditorProps {
  doc: string;
  onChange?: (state: EditorState) => void;
}

export const useEditor = <T extends Element>({
  doc,
  onChange
}: UseEditorProps): [MutableRefObject<T | null>, EditorView?] => {
  const wrapperRef = useRef<T>(null);
  const [view, setView] = useState<EditorView>();

  useEffect(() => {
    if (!wrapperRef.current) return;

    const state = EditorState.create({
      doc,
      extensions: [
        keymap.of([...defaultKeymap, ...historyKeymap]),
        history(),
        indentOnInput(),
        closeBrackets(),
        bracketMatching(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        lineNumbers(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true
        }),
        javascript(),
        syntaxHighlighting(syntax),
        oneDark,
        EditorView.lineWrapping,
        EditorView.theme({
          "&": {
            height: "100%"
          }
        }),
        EditorView.updateListener.of(update => {
          if (update.changes) {
            onChange && onChange(update.state);
          }
        })
      ]
    });

    const view = new EditorView({
      state,
      parent: wrapperRef.current
    });

    setView(view);
  }, [wrapperRef]);

  return [wrapperRef, view];
};
