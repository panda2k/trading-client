import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
    setUsername: (username: string) =>
        ipcRenderer.invoke('setUsername', username)
})


