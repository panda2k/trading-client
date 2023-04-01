import * as mqtt from "mqtt";
import { MqttClient } from "mqtt";
import { AccountBalanceSearch, MessageType } from "./enums";
import {
    BaseMessage,
    CredentialConfig,
    MessageHandler
} from "./types";

export default class IronbeamApi {
    /**
     * The websocket url for XAPI
     */
    private static readonly HOST_URL = "wss://xapi.certigo.com/mqtt";

    /**
     * The default operatorId
     */
    private static readonly OPERATOR_ID = "FIRETIP";

    /**
     * The default operatorPassword
     */
    private static readonly OPERATOR_PASSWORD = "maG@L7X3bE4y";

    /**
     * MQTT config to send as login username
     */
    private config: CredentialConfig = {
        username: "",
        password: "",
        host: "xapi.certigo.com",
        port: 443,
        useSSL: true,
        isDistributorConnection: false,
        operatorID: "",
        operatorPassword: "",
        version: "2.12",
        uniqueID: ""
    };

    /**
     *  The mqtt client
     */
    private client: MqttClient;

    /**
     * Message counter used for MID field
     */
    private messageCount: number;

    /**
     * Client topic string
     */
    private clientTopic = "";

    /**
     * Server topic string
     */
    private serverTopic = "";

    /**
     * MQTT message handlers
     */
    private messageHandlers: Map<number, MessageHandler>;

    /**
     * Default constructor for initializing an API instance 
     * 
     * @param {string=} username - the IronBeam account number 
     * @param {string=} password - the IronBeam account password  
     * @param {string=} operatorId - the api operator ID
     * @param {string=} operatorPassword - the api operator password 
     */
    public constructor(
        username = "",
        password = "",
        operatorId: string = IronbeamApi.OPERATOR_ID,
        operatorPassword: string = IronbeamApi.OPERATOR_PASSWORD,
    ) {
        this.setUsername(username);
        this.config.password = password;
        this.config.operatorID = operatorId;
        this.config.operatorPassword = operatorPassword;
        this.client = mqtt.connect("");
        this.messageCount = 0;
        this.messageHandlers = new Map();
    }

    /** 
     * Custom on connect method  
     * @name onConnect
     * @function 
     */

    /**
     * Sets the client instance and connects to API
     *  
     * @param {onConnect} onConnect - the function to call after connect
     */
    public connect(onConnect: () => void): void {
        this.client = mqtt.connect(IronbeamApi.HOST_URL, {
            username: JSON.stringify(this.config),
            clientId: this.config.uniqueID,
            protocolId: "MQIsdp",
            protocolVersion: 3
        });

        this.client.on("connect", () => {
            this.client.subscribe(this.clientTopic);
            onConnect();
        });

        this.client.on("message", this.handleMessage);
    }

    /**
     * Sets the config's username
     *
     * @param {string} username - the username 
     */
    public setUsername(username: string): void {
        this.config.username = username;

        // stolen from IronBeam API implementation
        this.config.uniqueID = `${this.config.username}_` +
            Math.random().toString(16).substr(2, 8);

        this.clientTopic = `CLIENT/${this.config.uniqueID}`;
        this.serverTopic = `SERVER/${this.config.uniqueID}`;
    }

    /**
     * Gets the account balance
     */
    public getAccountBalance(handler: MessageHandler): void {
        const messageId = this.getMessageId();
        const message = {
            MESSAGE: MessageType.GET_ACCOUNT_BALANCE,
            MID: messageId,
            ACCOUNT: this.getUsername(),
            TYPE: AccountBalanceSearch.CURRENT_OPEN
        };

        this.messageHandlers.set(messageId, handler);
        this.client.publish(this.serverTopic, JSON.stringify(message));
    }


    /**
     * Sets the config's password
     *
     * @param {string} password - the password
     */
    public setPassword(password: string): void {
        this.config.password = password;
    }

    /**
     * Get the config's username
     * 
     * @returns {string} the username 
     */
    public getUsername(): string {
        return this.config.username;
    }

    /**
     * Checks if the client is connected
     *
     * @returns {boolean} whether the client is connected
     */
    public isConnected(): boolean {
        return this.client?.connected;
    }

    /**
     * Gets a new message id
     *
     * @returns {number} the message id to use 
     */
    private getMessageId(): number {
        return this.messageCount++;
    }

    /**
     * Handles a message reception
     * Is an arrow function so it can be passed as callback and access 
     * messageHandlers 
     */
    private handleMessage = (topic: string, message: Buffer): void => {
        const data = JSON.parse(message.toString()) as unknown as BaseMessage;
        const handler = this.messageHandlers.get(data.MID_REF);

        if (handler) {
            handler(data);
            this.messageHandlers.delete(data.MID_REF);
        }
    };

}

export const instance = new IronbeamApi();

