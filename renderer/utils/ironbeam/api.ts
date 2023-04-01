import * as mqtt from "mqtt"
import { MqttClient } from "mqtt"
import { CredentialConfig } from "./types"

export default class IronbeamApi {
    /**
     * The websocket url for XAPI
     */
    private static readonly HOST_URL = "wss://xapi.certigo.com/mqtt"
    
    /**
     * The default operatorId
     */
    private static readonly OPERATOR_ID = "FIRETIP"

    /**
     * The default operatorPassword
     */
    private static readonly OPERATOR_PASSWORD = "maG@L7X3bE4y"

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
    }
    
    /**
     *  The mqtt client
     */
    private client: MqttClient

    /**
     * Default constructor for initializing an API instance 
     * 
     * @param {string=} username - the IronBeam account number 
     * @param {string=} password - the IronBeam account password  
     * @param {string=} operatorId - the api operator ID
     * @param {string=} operatorPassword - the api operator password 
     */
    public constructor(
        username: string = "",
        password: string = "",
        operatorId: string = IronbeamApi.OPERATOR_ID,
        operatorPassword: string = IronbeamApi.OPERATOR_PASSWORD,
    ) {
        this.setUsername(username)
        this.config.password = password
        this.config.operatorID = operatorId
        this.config.operatorPassword = operatorPassword
        this.client = mqtt.connect("")
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
    public connect(onConnect: () => any): void {
        this.client = mqtt.connect(IronbeamApi.HOST_URL, {
            username: JSON.stringify(this.config),
            clientId: this.config.uniqueID,
            protocolId: 'MQIsdp',
            protocolVersion: 3
        })

        this.client.on('connect', () => {
            console.log("Connected")
            this.client.subscribe(`CLIENT/${this.config.uniqueID}`)
            onConnect()
        })
    }
    
    /**
     * Sets the config's username
     *
     * @param {string} username - the username 
     */
    public setUsername(username: string): void {
        this.config.username = username;

        // stolen from IronBeam API implementation
        this.config.uniqueID = 
            `${this.config.username}_${Math.random().toString(16).substr(2, 8)}`
    }


    /**
     * Sets the config's password
     *
     * @param {string} password - the password
     */
    public setPassword(password: string): void {
        this.config.password = password
    }

    /**
     * Get the config's username
     * 
     * @returns {string} the username 
     */
    public getUsername(): string {
        return this.config.username
    }

    /**
     * Checks if the client is connected
     *
     * @returns {boolean} whether the client is connected
     */
    public isConnected(): boolean {
        return this.client?.connected
    }
}

export const instance = new IronbeamApi()

