var expect = require('chai').expect;  
var request = require('supertest');  

var app = require('../app');



describe('User routes', function() {  
  describe('list', function() {
    it('should list users', function(done) {
      request(app)
        .get('/users')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err); 
          expect(err).to.equal(null);
          done();
        });
    });
  });
});
