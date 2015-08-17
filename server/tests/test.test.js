require('should');
require('assert');
var request = require('supertest');

describe('Test', function() {
    it('server test', function(done) {
        request(global.url)
        .get('api/db/tree?access_token=777')
        .end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    });
});
