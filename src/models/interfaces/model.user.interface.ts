import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
    name: string;
    email: string;
    username: string;
    password: string;
}

export = IUser;
