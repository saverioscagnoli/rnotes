import { useState, useRef, useEffect, ChangeEvent } from "react";

const toClose = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "*": "*",
  $: "$",
  "`": "`"
};

const useEditor = () => {
  const [val, setVal] = useState<string>("");
  const txRef = useRef<HTMLTextAreaElement>(null);

  const onEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let v = e.target.value;
    setVal(v);
  };

  const editTx = (k: string) => {
    const tx = txRef.current!;
    let [stP, endP] = [tx.selectionStart, tx.selectionEnd];

    let slTxt = val.substring(stP, endP);

    let updVal: string;
    let updPos: number;

    let [stStr, endStr] = [val.substring(0, stP), val.substring(endP)];
    let isClosing = k in toClose;

    if (slTxt) {
      if (isClosing) {
        updVal = stStr + k + slTxt + toClose[k] + endStr;
        updPos = stP + slTxt.length + k.length + 1;
      } else {
        updVal = stStr + k + slTxt + k + endStr;
        updPos = stP + slTxt.length + 100;
      }
    } else {
      if (isClosing) {
        let closing = toClose[k];
        updVal = stStr + k + closing + endStr;
        updPos = stP + k.length;
      } else {
        updVal = stStr + k + k + endStr;
        updPos = stP + k.length;
      }
    }
    setVal(updVal);
    setTimeout(() => tx.setSelectionRange(updPos, updPos));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    let k = e.key;
    if (k in toClose) {
      e.preventDefault();
      editTx(k);
      console.log("key", k);
    }
    if (k === "Tab") {
      e.preventDefault();
      editTx("  ");
    }

    if (e.ctrlKey) {
      switch (k) {
        case "b": {
          e.preventDefault();
          editTx("**");
          break;
        }
        case "i": {
          e.preventDefault();
          editTx("*");
          break;
        }
        case "n": {
          e.preventDefault();
          editTx("$");
          break;
        }
        case "m": {
          e.preventDefault();
          editTx("\n$$\n");
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

  return { val, onEdit, onKeyDown, editTx, txRef };
};

export default useEditor;
