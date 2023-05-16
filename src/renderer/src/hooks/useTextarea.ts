import { ChangeEvent, useState } from "react";

const useTextarea = () => {
  const [val, setVal] = useState<string>("");

  const onEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return { val, onEdit };
};

export default useTextarea;
