import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { useEffect, RefObject, useState } from "react";
import { useNavigate } from "react-router-dom";

const useKeydown = (ref: RefObject<ReactCodeMirrorRef>, prev: boolean) => {
  const [caret, setCaret] = useState<number>(0);
  const nav = useNavigate();

  let oldView = ref.current?.view;

  useEffect(() => {
    if (!prev) {
      nav("/");
      setTimeout(() => {
        let newView = ref.current?.view;
        newView?.focus();
        newView?.dispatch({
          selection: { anchor: caret, head: caret }
        });
      }, 10);
    } else {
      nav("/preview");
      setCaret(oldView?.state.selection.main.head!);
    }
  }, [prev]);
};

export default useKeydown;
