import Store from "electron-store";
import { JSONSchemaType } from "ajv";

export type SchemaType = {
    username: string
}

const schema: JSONSchemaType<SchemaType> = {
    type: "object",
    properties: {
        username: {
            type: "string",
        }
    },
    required: ["username"]
};

export const STORE_KEYS: { [key: string]: keyof SchemaType } = {
    USERNAME: "username"
};

//const store = new Store<SchemaType>({ schema });

//export default store;

