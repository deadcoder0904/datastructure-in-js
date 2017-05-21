var expect = require('chai').expect;
var palindrome = require('../../examples/usecases/palindrome');

describe('=> PALINDROME', function() {

	it('should ensure `PANAMA` is not palindrome', function(done) {
		expect(palindrome("PANAMA")).to.equal(false);
		done();
	});

	it('should ensure `DAD` is palindrome', function(done) {
		expect(palindrome("DAD")).to.equal(true);
		done();
	});

	it('should ensure `RACECAR` is palindrome', function(done) {
		expect(palindrome("RACECAR")).to.equal(true);
		done();
	});

	it('should ensure `RADAR` is palindrome', function(done) {
		expect(palindrome("RADAR")).to.equal(true);
		done();
	});

});
