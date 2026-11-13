import { contextBridge, ipcRenderer } from "electron";

type SaveNoteInput = {
  title: string;
  body: string;
};

const api = {
  saveNote: (input: SaveNoteInput) => {
    if (
      !input ||
      typeof input.title !== "string" ||
      typeof input.body !== "string" ||
      input.title.length > 160 ||
      input.body.length > 20_000
    ) {
      throw new TypeError("Invalid note payload");
    }
    return ipcRenderer.invoke("notes:save", input);
  },
};

contextBridge.exposeInMainWorld("desktopApi", api);
