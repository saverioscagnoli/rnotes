export type Api = {
  toPDF: (md: string) => void;
  toMD: (md: string) => void;
  getOs: () => string;
};
