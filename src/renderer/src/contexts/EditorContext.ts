import { createContext, Dispatch, SetStateAction } from "react";

type SetValFn = Dispatch<SetStateAction<string>>;
type SetPrevFn = Dispatch<SetStateAction<boolean>>;

interface EditorContextProps {
  val: string;
  setVal: SetValFn;
  prev: boolean;
  setPrev: SetPrevFn;
}

export default createContext<EditorContextProps | null>(null);
