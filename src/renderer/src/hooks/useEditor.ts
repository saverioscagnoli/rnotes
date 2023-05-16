import { useState, useRef, useEffect } from "react";

const close = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "*": "*",
  $: "$"
};

const useEditor = () => {
  const [val, setVal] = useState<string>("");
  const txRef = useRef<HTMLTextAreaElement>(null);

  const onEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let v = e.target.value;
    setVal(v);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key in close) {
      e.preventDefault();

      const tx = txRef.current;
      if (!tx) return;
      const [stP, endP] = [tx.selectionStart, tx.selectionEnd];

      const slTxt = val.substring(stP, endP);
      const toClose = close[e.key];

      let updVal: string;
      let updPos: number;

      if (slTxt) {
        updVal =
          val.substring(0, stP) + e.key + slTxt + toClose + val.substring(endP);
        updPos = stP + slTxt.length + 2;
      } else {
        updVal = val.substring(0, stP) + e.key + toClose + val.substring(endP);
        updPos = stP + 1;
      }
      setVal(updVal);
      setTimeout(() => tx.setSelectionRange(updPos, updPos));
    }
  };

  useEffect(() => {
    const tx = txRef.current;
    if (tx) {
      tx.focus();
    }
  }, []);

  return { val, onEdit, onKeyDown, txRef };
};

export default useEditor;
