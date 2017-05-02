/**
 *
 *
 * @class ServerMessages
 */
// tslint:disable-next-line:no-stateless-class
class ServerMessages {

    public static DB_CONNECTION_STRING: string = 'mongodb://localhost/warriors';

    public static INVALID_ENDPOINT: string = '{msg:"INVALID ENDPOINT"}';
}
Object.seal(ServerMessages);
// tslint:disable:export-name no-default-export
export  default ServerMessages;
