var env = require('./env/env');
let chai = require('chai');
let chaiHttp = require('chai-http');

var respOKstring = 'Hello World';
var server = env.method + '://' + env.host + ':' + env.port;

chai.should();
chai.use(chaiHttp);

describe('Website API test', () => {
    it('It should return a json property response equals to string "' + respOKstring + '"', (done) => {
        chai.request(server).get(env.api).end((err, resp) => {
            resp.should.have.status(200);
            resp.body.should.be.a('object', "Response body is not an object");
            resp.body.should.have.property('responses');
            resp.body.response.should.be.a('string', "Website api response is not a string");
            resp.body.response.should.equal(respOKstring, "Website api returns wrong string");
            done();
        });
    });
});