export enum CurrencyCode {
    AUD = "AUD",
    BRL = "BRL",
    CAD = "CAD",
    CLP = "CLP",
    CNH = "CNH",
    CNY = "CNY",
    CZK = "CZK",
    DKK = "DKK",
    EUR = "EUR",
    HKD = "HKD",
    HUF = "HUF",
    ILS = "ILS",
    JPY = "JPY",
    KRW = "KRW",
    MXR = "MXR",
    MXN = "MXN",
    MYR = "MYR",
    NOK = "NOK",
    NZD = "NZD",
    PHP = "PHP",
    PLN = "PLN",
    GBP = "GBP",
    SGD = "SGD",
    SEK = "SEK",
    CHF = "CHF",
    TWD = "TWD",
    THB = "THB",
    TRY = "TRY",
    USD = "USD",
    ZAR = "ZAR",
}

export enum RegCode {
    INVALID = "",
    COMBINED = "00",
    REGULATED = "01",
    NON_SECURED = "02",
    SECURED = "03",
}

export enum MessageType {
    GET_ACCOUNT_BALANCE = "GET_ACCOUNT_BALANCE",
    SUBSCRIBE_ACCOUNT_BALANCE = "SUBSCRIBE_ACCOUNT_BALANCE",
    UNSUBSCRIBE_ACCOUNT_BALANCE = "UNSUBSCRIBE_ACCOUNT_BALANCE",
    GET_POSITIONS = "GET_POSITIONS",
    SUBSCRIBE_POSITIONS = "SUBSCRIBE_POSITIONS",
    UNSUBSCRIBE_POSITIONS = "UNSUBSCRIBE_POSITIONS",
    GET_SECURITY_DEFINITIONS = "GET_SECURITY_DEFINITIONS",
    GET_SECURITY_STATUS = "GET_SECURITY_STATUS",
    SUBSCRIBE_SECURITY_STATUS = "SUBSCRIBE_SECURITY_STATUS",
    UNSUBSCRIBE_SECURITY_STATUS = "UNSUBSCRIBE_SECURITY_STATUS",
    GET_VOLUME_AT_PRICE = "GET_VOLUME_AT_PRICE",
    GET_DEPTHS = "GET_DEPTHS",
    SUBSCRIBE_DEPTHS = "SUBSCRIBE_DEPTHS",
    UNSUBSCRIBE_DEPTHS = "UNSUBSCRIBE_DEPTHS",
    GET_QUOTES = "GET_QUOTES",
    SUBSCRIBE_QUOTES = "SUBSCRIBE_QUOTES",
    UNSUBSCRIBE_QUOTES = "UNSUBSCRIBE_QUOTES",
    SET_QUOTE_SPEED = "SET_QUOTE_SPEED",
    SUBSCRIBE_TRADES = "SUBSCRIBE_TRADES",
    UNSUBSCRIBE_TRADES = "UNSUBSCRIBE_TRADES",
    GET_TIME_AND_SALES = "GET_TIME_AND_SALES",
    GET_MARKET_COMPLEXES = "GET_MARKET_COMPLEXES",
    GET_EXCHANGE_SOURCES = "GET_EXCHANGE_SOURCES",
    GET_ORDER_UPDATES = "GET_ORDER_UPDATES",
    SUBSCRIBE_ORDER_UPDATES = "SUBSCRIBE_ORDER_UPDATES",
    UNSUBSCRIBE_ORDER_UPDATES = "UNSUBSCRIBE_ORDER_UPDATES",
    SUBMIT_ORDER = "SUBMIT_ORDER",
    SUBSCRIBE_FILLS = "SUBSCRIBE_FILLS",
    UNSUBSCRIBE_FILLS = "UNSUBSCRIBE_FILLS",
    GET_SECURITY_MARGIN_AND_VALUE = "GET_SECURITY_MARGIN_AND_VALUE",
    GET_RISK = "GET_RISK",
    SUBSCRIBE_RISK = "SUBSCRIBE_RISK",
    UNSUBSCRIBE_RISK = "UNSUBSCRIBE_RISK",
    INDICATORS_SUBSCRIBE = "INDICATORS_SUBSCRIBE",
    SYMBOL_FINDER = "SYMBOL_FINDER"
}

export enum AccountBalanceSearch {
    CURRENT_OPEN = "CURRENT_OPEN",
    START_OF_DAY = "START_OF_DAY",
}

