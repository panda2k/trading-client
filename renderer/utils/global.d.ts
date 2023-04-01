declare global {
    interface Window {
        electron: {
            setUsername: (username: string) => Promise<void>
        },
    }
}
