import { useState, useRef, useEffect } from "react";

const close = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "*": "*",
  $: "$",
  "`": "`",
  b: "****",
  i: "**"
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

    if (e.ctrlKey) {
      switch (e.key) {
        case "b": {
          e.preventDefault();
          const tx = txRef.current;
          if (!tx) return;
          const [stP, endP] = [tx.selectionStart, tx.selectionEnd];
          const slTxt = val.substring(stP, endP);
          let toClose = close.b;

          let updVal: string;
          let updPos: number;

          if (slTxt) {
            toClose = "**";
            updVal =
              val.substring(0, stP) +
              toClose +
              slTxt +
              toClose +
              val.substring(endP);
            updPos = stP + slTxt.length + 2;
          } else {
            updVal = val.substring(0) + toClose + val.substring(endP);
            updPos = stP + 1;
          }
          setVal(updVal);
          setTimeout(() => tx.setSelectionRange(updPos + 1, updPos + 1));
          break;
        }
        case "i": {
          e.preventDefault();
          const tx = txRef.current;
          if (!tx) return;
          const [stP, endP] = [tx.selectionStart, tx.selectionEnd];
          const slTxt = val.substring(stP, endP);
          let toClose = close.i;

          let updVal: string;
          let updPos: number;

          if (slTxt) {
            toClose = "*";
            updVal =
              val.substring(0, stP) +
              toClose +
              slTxt +
              toClose +
              val.substring(endP);
            updPos = stP + slTxt.length + 2;
          } else {
            updVal = val.substring(0) + toClose + val.substring(endP);
            updPos = stP + 1;
          }
          setVal(updVal);
          setTimeout(() => tx.setSelectionRange(updPos, updPos));
          break;
        }
      }
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
