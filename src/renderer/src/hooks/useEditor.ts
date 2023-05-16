import { ChangeEvent, useState } from "react";
import useAutoClosing from "./useAutoClosing";

const useEditor = () => {
  const [val, setVal] = useState<string>("");

  const onEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let v = e.target.value;
    let closing = useAutoClosing(v.slice(-1));
    if (closing.length === 1) {
      setVal(v + closing);
    } else if (closing.length > 1) {
      setVal(closing);
    } else setVal(v);
  };

  return { val, onEdit };
};

export default useEditor;
