import { ipcMain } from "electron";
import store, { STORE_KEYS } from "./store";

ipcMain.handle('setUsername', (event, username: string) => {
    const result = store.set(STORE_KEYS.USERNAME, username)

    return result
})
