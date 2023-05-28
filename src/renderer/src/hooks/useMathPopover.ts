import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { RefObject, useEffect, useState } from "react";

const useMathPopover = (ref: RefObject<ReactCodeMirrorRef>, val: string) => {
  const [math, setMath] = useState<string | null>(null);

  useEffect(() => {
    let view = ref.current?.view;
    let caret = view?.state.selection.main.head!;
    let length = view?.state.doc.length!;

    let prev = val.substring(0, caret);
    let next = val.substring(caret, length);

    if (
      prev.includes("$$") &&
      next.includes("$$") &&
      (val.match(/\$\$/g) || []).length % 2 === 0
    ) {
      let start = val.lastIndexOf("$$", caret);
      let end = val.indexOf("$$", caret);
      setMath(val.substring(start + 2, end));
    } else void (math && setMath(null));
  }, [val]);

  return math;
};

export default useMathPopover;
