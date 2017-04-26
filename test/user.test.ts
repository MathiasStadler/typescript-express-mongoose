import * as chai from "chai";
import * as mocha from "mocha";
import * as UserSchema from "./../src/connections/schemas/schema.user";

import { schema } from "./../src/connections/schemas/schema.user";

import chaiHttp = require("chai-http");

import app from "../src/app";

// import mlog from "mocha-logger";

// const notifier = require("node-notifier");
// const path = require("path");

import notifier = require("node-notifier");

import IUserModel = require("./../src/models/interfaces/model.user.interface");

chai.use(chaiHttp);

const expect = chai.expect;

const should = chai.should();

describe("delete all users", () => {

    beforeEach((done) => { // Before each test we empty the database
        UserSchema.remove({}, (err: any) => {
            done();
        });
    });

    // found here
    // https://github.com/elliotf/mocha-mongoose
    it("user collection is empty", (done) => {
        UserSchema.find({}, (err, models) => {
            expect(models).to.have.length(0);
            done();
        });
    });
});

describe("GET root ", () => {
    it("get root", () => {
        return chai.request(app).get("/")
            .then((res) => {
    //            console.log(res);
                expect(res.status).to.equal(200);
            });
    });
});

describe("GET invalid endpoint ", () => {


    it("get root", () => {


        return chai.request(app).get("/api/")
            .then((res) => {

console.log(res);
expect(res).should.be.html;


// expect(res).to.have.status(200);
// expect(res).to.be.json;

            });
    });
});

describe("GET api/v1/user", () => {
    it("responds with JSON array", () => {
        return chai.request(app).get("/api/v1/user")
            .then((res) => {
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                expect(res.body).to.be.an("array");
                expect(res.body).to.have.length(0);
            });
    });
});

describe("POST api/v1/user", () => {
    it("add user ", (done) => {
        const user = {
            email: "joe@gmail.com",
            name: "Jon Doe",
            password: "123456",
            username: "John",
        };

        // from here
        // https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
        chai.request(app)
            .post("/api/v1/user")
            .set("Content-Type", "application/json")
            .send(user)
            .end((err, res) => {
               // console.log(res);
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                done();
            });
    });
});

describe("GET api/v1/user", () => {
    it("get user at JSON array", () => {
        return chai.request(app).get("/api/v1/user")
            .then((res) => {
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                expect(res.body).to.be.an("array");
                expect(res.body).to.have.length(1);
            });
    });
});

// from here
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
describe("/GET/:id user", () => {
    it("it should GET a user by the given id", (done) => {
        const user: IUserModel = ({ name: "hallo", email: "hallo@dudoof.de", username: "hallo", password: "" }) as IUserModel;
        UserSchema.create(user, (error: any, requser: any) => {
            chai.request(app)
                .get("/api/v1/user/" + requser._id)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property("_id").eql(requser.id);
                    expect(res.body).to.have.property("name").eql(user.name);
                    expect(res.body).to.have.property("email").eql(user.email);
                    expect(res.body).to.have.property("username").eql(user.username);
                    done();
                });
        });

    });
});

describe("Update /PUT/:id user", () => {
    it("it should UPDATE a book given the id", (done) => {
        const user: IUserModel = ({ name: "hallo", email: "hallo@dudoof.de", username: "hallo", password: "" }) as IUserModel;
        UserSchema.create(user, (error: any, requser: any) => {
            chai.request(app)
                .put("/api/v1/user/" + requser._id)
                .send({ name: "uhallo", email: "uhallo@dudoof.de", username: "uhallo" })
                .end((err, res) => {
                    res.should.have.status(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property("success").eql("success");
                    done();
                });
        });
    });
});

// from here
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
describe(" delete DELETE/:id user", () => {
    it("it should DELETE a user by the given id", (done) => {
        const user: IUserModel = ({ name: "hallo", email: "hallo@dudoof.de", username: "hallo", password: "" }) as IUserModel;
        UserSchema.create(user, (error: any, requser: any) => {
            chai.request(app)
                .del("/api/v1/user/" + requser._id)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property("success").eql("success");
                    done();
                });
        });

    });
});

// from here
// http://marc-walter.info/posts/2016/01/03/notifier/
// Object

notifier.notify({
    message: "Test completed",
    title: "Mocha test",
});
