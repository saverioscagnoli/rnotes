import { ElectronAPI } from "@electron-toolkit/preload";
import { Api } from "./ApiType";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: Api;
  }
}
