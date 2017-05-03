import * as mongoose from 'mongoose';

import {Constants } from '../config/constants/db.config.constants';

/**
 *
 *
 * @class Connection
 */
// tslint:disable-next-line:no-stateless-class
// tslint:disable-next-line:export-name
export class DataAccess {

    public static mongooseInstance: any;
    public static mongooseConnection: mongoose.Connection;

    public static connect(): mongoose.Connection {

        if (this.mongooseInstance) { return this.mongooseInstance; }

        this.mongooseConnection = mongoose.connection;

        if (this.mongooseConnection) {

            this.mongooseConnection.close(() => {

                // tslint:disable-next-line:no-console
                console.log('close to mongodb.');

            });

        }

        this.mongooseConnection.once('open', () => {
            // tslint:disable-next-line:no-console
            console.log('Connect to mongodb.');
        });

        this.mongooseConnection.on('connected', () => {
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

        this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

    public constructor() {
        DataAccess.connect();
    }

}

DataAccess.connect();
