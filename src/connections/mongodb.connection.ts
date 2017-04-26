import Mongoose = require("mongoose");
import Constants = require("../config/constants/db.config.constants");

/**
 *
 *
 * @class Connection
 */
class Connection {

    public static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

    public static connect(): Mongoose.Connection {

        if (this.mongooseInstance) { return this.mongooseInstance; }

        this.mongooseConnection = Mongoose.connection;

        if (this.mongooseConnection) {

            this.mongooseConnection.close(() => {

                // tslint:disable-next-line:no-console
                console.log("close to mongodb.");

            });

        }

        this.mongooseConnection.once("open", () => {
            // tslint:disable-next-line:no-console
            console.log("Connect to mongodb.");
        });

        this.mongooseConnection.on("connected", () => {
            // tslint:disable-next-line:no-console
            console.log('Connect to mongodb.');
        });

        this.mongooseConnection.on('error', (err: any) => {

            // tslint:disable-next-line:no-console
            console.log('Mongoose default connection Error: ' + err);
        });

        this.mongooseConnection.on('disconnected', () => {
            // tslint:disable-next-line:no-console
            console.log('Mongoose default connection disconnected');
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', function() {
            this.mongoose.connection.close(() => {
                // tslint:disable-next-line:no-console
                console.log('Mongoose default connection disconnected through app termination');
                process.exit(0);
            });
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

    public constructor() {
        Connection.connect();
    }

}

Connection.connect();
export = Connection;
