import { useEditor } from "../hooks";
import { useCallback, useEffect } from "react";
import { EditorState } from "@codemirror/state";

interface EditorProps {
  doc: string;
  onChange: (doc: string) => void;
  mode: boolean;
}

const Editor = ({ doc, onChange, mode }: EditorProps) => {
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );

  const [wrapperRef, view] = useEditor<HTMLDivElement>({
    doc,
    onChange: handleChange
  });

  useEffect(() => {
    if (view) {
    }
  }, [view]);

  return (
    <div
      className={`wrapper-${!mode ? "joined" : "single"}`}
      style={{ width: "100%" }}
      ref={wrapperRef}
    ></div>
  );
};

export { Editor };
