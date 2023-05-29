import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import {
  useEffect,
  Dispatch,
  SetStateAction,
  RefObject,
  useState
} from "react";

type SetPrevFn = Dispatch<SetStateAction<boolean>>;

const useKeydown = (
  ref: RefObject<ReactCodeMirrorRef>,
  prev: boolean,
  setPrev: SetPrevFn
) => {
  const [caret, setCaret] = useState<number>(0);
  const toggle = () => setPrev(p => !p);

  let oldView = ref.current?.view;

  useEffect(() => {
    if (!prev) {
      setTimeout(() => {
        let newView = ref.current?.view;
        newView?.focus();
        newView?.dispatch({
          selection: { anchor: caret, head: caret }
        });
      }, 10);
    } else {
      setCaret(oldView?.state.selection.main.head!);
    }
  }, [prev]);

  useEffect(() => {
    addEventListener("keydown", e => {
      if (!e.ctrlKey && !e.metaKey) return;
      if (e.key === "p") {
        e.preventDefault();
        toggle();
      }
    });
  }, []);
};

export default useKeydown;
