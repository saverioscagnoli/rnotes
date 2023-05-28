import { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { Dispatch, RefObject, SetStateAction, useCallback } from "react";

type SetValFn = Dispatch<SetStateAction<string>>;

const useKeymaps = (
  val: string,
  ref: RefObject<ReactCodeMirrorRef>,
  setVal: SetValFn
) => {
  const insert = (char: string) => {
    let view = ref.current?.view;
    let sel = view?.state.selection;
    let caret = sel?.main.head!;

    let [start, end] = [sel?.ranges[0].from!, sel?.ranges[0].to!];
    let [prev, next] = [val.substring(0, start), val.substring(end)];
    let txt = val.substring(start, end);

    let nVal: string;
    let nPos: number;

    console.log(start, end);

    if (txt) {
      nVal = `${prev}${char}${txt}${char}${next}`;
      nPos = caret + txt.length + char.length * 2;
    } else {
      nVal = `${prev}${char}${char}${next}`;
      nPos = caret + char.length;
    }

    setVal(nVal);
    setTimeout(() => {
      view?.dispatch({
        selection: { anchor: nPos, head: nPos }
      });
    }, 10);
  };

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "b": {
            e.preventDefault();
            insert("**");
            break;
          }
          case "j": {
            e.preventDefault();
            insert("_");
            break;
          }
          case "m": {
            e.preventDefault();
            insert("\n$$\n");
            break;
          }
          case "n": {
            e.preventDefault();
            insert("$");
            break;
          }
        }
      }
    },
    [val]
  );

  return onKey;
};

export default useKeymaps;
