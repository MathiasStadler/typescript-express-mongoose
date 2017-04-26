/**
 *
 *
 * @class ServerMessages
 */
class ServerMessages {

    public static DB_CONNECTION_STRING: string = "mongodb://localhost/warriors";

    public static INVALID_ENDPOINT: string = "{msg:\"INVALID ENDPOINT\"}";
}
Object.seal(ServerMessages);
// tslint:disable-next-line:export-name
export = ServerMessages;
