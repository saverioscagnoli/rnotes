const autoClose = ["(", "[", "{", '"', "'"];
const toClose = [")", "]", "}", '"', "'"];

const useAutoClosing = (v: string): string => {
  let last = v.slice(-1);
  let opChar = autoClose.indexOf(last);
  let clChar = toClose.indexOf(last);
  if (opChar !== -1) {
    return toClose[opChar];
  } else if (clChar !== -1 && v.slice(-2, -1) === autoClose[clChar]) {
    return v.slice(0, -2);
  } else return "";
};

export default useAutoClosing;
