var expect  = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function() {
    var url = "http://localhost:8080/addTwoNumbers/6/8";
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 14", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(14);
          done()
        });
  });
  it("returns the result not equal to 48", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body);
        expect(body.result).to.not.equal(48);
        done()
      });
});
  });
  describe("Multiply Two Numbers", function() {
    var url = "http://localhost:8080/multiplyTwoNumbers/46/9";
    it("returns status 200 to check if API works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns statusCode key in body to check if API gives the right result (should be 200)", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });
    it("returns the result as a number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.be.a('number');
            done();
        });
    });
    it("returns the result equal to 414", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.equal(414);
            done();
        });
    });
    it("returns the result not equal to 55", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(55);
            done();
        });
    });
});

  describe("Add Two strings", function() {
    var url = "http://localhost:8080/addTwoNumbers/a/b";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });
  
  describe("Multiply Two strings", function() {
    var url = "http://localhost:8080/multiplyTwoNumbers/a/b";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });

