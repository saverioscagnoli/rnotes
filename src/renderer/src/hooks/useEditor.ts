import { ChangeEvent, useState } from "react";

const useEditor = (def: string) => {
  const [val, setVal] = useState<string>(def);

  const onEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let v = e.target.value;
    if (!v) setVal(def);
    else setVal(v);
  };

  return { val, onEdit };
};

export default useEditor;
