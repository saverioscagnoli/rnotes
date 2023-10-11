import { tags as t } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";

export const syntax = HighlightStyle.define([
  {
    tag: t.heading1,
    fontSize: "1.6em",
    fontWeight: "bold"
  },
  {
    tag: t.heading2,
    fontSize: "1.4em",
    fontWeight: "bold"
  },
  {
    tag: t.heading3,
    fontSize: "1.2em",
    fontWeight: "bold"
  },
  {
    tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: "blue"
  },
  { tag: [t.processingInstruction, t.string, t.inserted], color: "red" }
]);
