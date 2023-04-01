export type CredentialConfig = {
    /**
     * The account number 
     */
    username: string

    /**
     * The account password
     */
    password: string

    /**
     * Websocket host url
     */
    host: string

    /**
     * Websocket port
     */
    port: number

    /**
     * Whether to use SSL
     */
    useSSL: boolean,

    /**
     * Whether connection is distributor
     */
    isDistributorConnection: boolean

    /**
     * API operator ID
     * A default one is `FIRETIP`
     */
    operatorID: string

    /**
     * API operator password. 
     * Not sure if this is unique per account 
     */
    operatorPassword: string

    /**
     * API version
     */
    version: string

    /**
     * Client id
     */
    uniqueID: string
}


