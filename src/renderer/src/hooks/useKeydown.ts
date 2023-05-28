import { useEffect, Dispatch, SetStateAction } from "react";

type SetPrevFn = Dispatch<SetStateAction<boolean>>;

const useKeydown = (setPrev: SetPrevFn) => {
  useEffect(() => {
    const toggle = () => setPrev(p => !p);

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
