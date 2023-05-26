import createTheme from "@uiw/codemirror-themes";

const light = createTheme({
  theme: "light",
  settings: {
    background: "transparent",
    foreground: "#000000",
    fontFamily: "Menlo, Consolas, monospace",
    selection: "#d6d6d6",
    lineHighlight: "transparent",
    caret: "#000000",
    gutterBackground: "transparent"
  },
  styles: []
});

const dark = createTheme({
  theme: "dark",
  settings: {
    background: "transparent",
    foreground: "#ffffff",
    fontFamily: "Menlo, Consolas, monospace",
    selection: "#d6d6d6",
    lineHighlight: "transparent",
    caret: "#ffffff",
    gutterBackground: "transparent",
    gutterForeground: "#008080"
  },
  styles: []
});

export { light, dark };
