import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { createContext, Dispatch, RefObject, SetStateAction } from "react";

type SetValFn = Dispatch<SetStateAction<string>>;
type SetPrevFn = Dispatch<SetStateAction<boolean>>;

interface EditorContextProps {
  val: string;
  setVal: SetValFn;
  prev: boolean;
  setPrev: SetPrevFn;
  editorRef: RefObject<ReactCodeMirrorRef>;
}

export default createContext<EditorContextProps | null>(null);
