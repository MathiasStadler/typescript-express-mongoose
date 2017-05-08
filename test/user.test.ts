// tslint:disable-next-line:missing-jsdoc
//FROM HERE http://jonnyreeves.co.uk/2015/using-chai-with-typescript-and-mocha/
// old import { expect } from 'chai';
// tslint:disable-next-line:missing-jsdoc
// tslint:disable-next-line:no-require-imports
import * as mocha = require('mocha');
import {expect, should} from 'chai';
import {schema} from './../src/connections/schemas/schema.user';
import {App} from '../src/app';
import * as notifier from 'node-notifier';
import {IUserModel} from './../src/models/interfaces/model.user.interface';

import {chai} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

// tslint:disable-next-line:no-http-string
const URL = 'http://localhost:5000';

//old const expect = chai.expect;
// tslint:disable-next-line:mocha-no-side-effect-code
//old const should = chai.should();

describe('delete all users', () => {

    beforeEach((done) => { // Before each test we empty the database
        schema.remove({}, (err: any) => {
            done();
        });
    });

    // found here
    // https://github.com/elliotf/mocha-mongoose
    it('user collection is empty', (done) => {
        schema.find({}, (err, models) => {
            expect(models).to.have.length(0);
            done();
        });
    });
});

describe('GET root ', () => {
    it('get root', () => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        return chai.request(URL).get('/')
            .then((res) => {
    //            console.log(res);
                expect(res.status).to.equal(200);
            });
    });
});

describe('GET invalid endpoint ', () => {

    it('get root', () => {

        // tslint:disable-next-line:no-backbone-get-set-outside-model
        return chai.request(URL).get('/api/')
            .then((res) => {

// tslint:disable-next-line:no-console
console.log(res);
//expect(res).should.be.html;

 expect(res).to.have.status(200);
// expect(res).to.be.json;

            });
    });
});

describe('GET api/v1/user', () => {
    it('responds with JSON array', () => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        return chai.request(URL).get('/api/v1/user')
            .then((res) => {
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length(0);
            });
    });
});

describe('POST api/v1/user', () => {
    it('add user ', (done) => {
        const user = {
            email: 'joe@gmail.com',
            name: 'Jon Doe',
            password: '123456',
            username: 'John'
        };

        // from here
        // https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        chai.request(App)
            .post('/api/v1/user')
            .set('Content-Type', 'Application/json')
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

describe('GET api/v1/user', () => {
    it('get user at JSON array', () => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        return chai.request(App).get('/api/v1/user')
            .then((res) => {
                expect(res.status).to.equal(200);
                // tslint:disable-next-line:no-unused-expression
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length(1);
            });
    });
});

// from here
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
describe('/GET/:id user', () => {
    it('it should GET a user by the given id', (done) => {
        const user: IUserModel = ({ name: 'hallo', email: 'hallo@dudoof.de', username: 'hallo', password: '' }) as IUserModel;
        schema.create(user, (error: any, requser: any) => {
            chai.request(App)
                .get('/api/v1/user/' + requser._id)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('_id').eql(requser.id);
                    expect(res.body).to.have.property('name').eql(user.name);
                    expect(res.body).to.have.property('email').eql(user.email);
                    expect(res.body).to.have.property('username').eql(user.username);
                    done();
                });
        });

    });
});

describe('Update /PUT/:id user', () => {
    it('it should UPDATE a book given the id', (done) => {
        // tslint:disable-next-line:prefer-type-cast
        const user: IUserModel = ({ name: 'hallo', email: 'hallo@dudoof.de', username: 'hallo', password: '' }) as IUserModel;
        schema.create(user, (error: any, requser: any) => {
            chai.request(App)
                .put('/api/v1/user/' + requser._id)
                .send({ name: 'uhallo', email: 'uhallo@dudoof.de', username: 'uhallo' })
                .end((err, res) => {
                    res.should.have.status(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('success').eql('success');
                    done();
                });
        });
    });
});

// from here
// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
describe(' delete DELETE/:id user', () => {
    it('it should DELETE a user by the given id', (done) => {
        const user: IUserModel = ({ name: 'hallo', email: 'hallo@dudoof.de', username: 'hallo', password: '' }) as IUserModel;
        schema.create(user, (error: any, requser: any) => {
            chai.request(App)
                .del('/api/v1/user/' + requser._id)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    // tslint:disable-next-line:no-unused-expression
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('success').eql('success');
                    done();
                });
        });

    });
});

// from here
// http://marc-walter.info/posts/2016/01/03/notifier/
// Object

notifier.notify({
    message: 'Test completed',
    title: 'Mocha test'
});
