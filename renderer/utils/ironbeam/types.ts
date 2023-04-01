import { CurrencyCode, MessageType, RegCode } from "./enums";

export type MessageHandler = (message: object) => void

/**
 * Base messsage info
 */
export type BaseMessage = {
    /**
     * The message type
     */
    MESSAGE: MessageType

    /**
     * The server side message id
     */
    MID: number

    /**
     * The client side message id
     */
    MID_REF: number

    /**
     * Whether the message is to be continued
     */
    TO_BE_CONTINUED: boolean
}

/**
 * The credentials required to authenticate to XAPI
 */
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

/**
 * The account balance object 
 */
export type AccountBalance = {
    /**
     * The account sub account name
     */
    ACCOUNT: string

    /**
     * The currency being reported in
     */
    CURRENCY_CODE: CurrencyCode

    /**
     * The account regulation code
     */
    REG_CODE: RegCode

    /**
     * The account cash balance 
     */
    CASH_BALANCE: string

    /**
     * The open pnl
     */
    OPEN_TRADE_EQUITY: string

    /**
     * The current value of the account including all open asset pnls
     */
    NET_LIQUIDITY: string

    /**
     * The cash balance + open trade equity
     */
    TOTAL_EQUITY: string

    /**
     * The commisions paid today (estimate)
     */
    COMMISSIONS: string


    /**
     * The amount of fees paid today (estimate)
     */
    FEES: string

    /**
     * The number of days where the account went below required maintenance 
     * margin and has yet to return above it 
     */
    DAYS_ON_CALL: number

    /**
     * The span margin amount, aka the amount of margin acharged to the account
     */
    MARGIN_INFO: MarginInfo

    /**
     * For subaccounts with a margin schedule assigned, it is the margin 
     * calculated from the schedule. If there is no margin schedule, it is 
     * missing 
     */
    MARGIN_INFO_SIMPLE?: MarginInfo
}

/**
 * Margin info
 */
export type MarginInfo = {
    /**
     * The account sub account name
     */
    ACCOUNT: string

    /**
     * The currency being reported in
     */
    CURRENCY_CODE: CurrencyCode

    /**
     * The account regulation code
     */
    REG_CODE: RegCode

    /**
     * The buying power for an account
     */
    BUYING_POWER: string

    /**
     * The margin used for open positions
     */
    MARGIN_O: MarginDetail

    /**
     * The worst case margin for open positions + any combination of working 
     * orders being executed 
     */
    MARGIN_OW: MarginDetail

    /**
     * The worst case margin for open positions + any combination of working
     * and incoming orders being executed
     */
    MARGIN_OWI: MarginDetail
}

/**
 * A detailed object representing margin values
 */
export type MarginDetail = {
    /**
     * A margin error. "NONE" if there is none
     */
    MARGIN_ERROR: string

    /**
     * The symbols triggering margin errors. csv of symbols
     */
    ERROR_SYMBOLS: null | string

    /**
     * The initial span risk. "-876542310.0" or "-876542310" if it is not 
     * calculated
     */
    INITIAL_RISK_MARGIN: string

    /**
     * The maintenance span risk. "-876542310.0" or "-876542310" if it is not 
     * calculated 
     */
    MAINTENANCE_RISK_MARGIN: string

    /**
     * The initial total span risk. INITIAL_RISK_MARGIN - long option value + 
     * short option value. "-876542310.0" or "-876542310" if it is not 
     * calculated 
     */
    INITIAL_TOTAL_MARGIN: string

    /**
     * The initial total span risk. MAINTENANCE_RISK_MARGIN - long option value 
     * + short option value. "-876542310.0" or "-876542310" if it is not 
     * calculated 
     */
    MAINTENANCE_TOTAL_MARGIN: string

    /**
     * Whether the values are estimated
     */
    IS_ESTIMATED: boolean

    /**
     * The time when margin was most recently calculated. 0 if uninitialized
     */
    AS_OF_TIME: number
}


