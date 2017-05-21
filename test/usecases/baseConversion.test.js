var expect = require('chai').expect;
var baseConversion = require('../../examples/usecases/baseConversion');

describe('=> BASE CONVERSION', function() {

	it('should convert 4578 to the base 10 to be equal to 10', function(done) {
		expect(baseConversion(4578,5)).to.equal("121303");
		done();
	});

	it('should convert 3 to the base 3 to be equal to 10', function(done) {
		expect(baseConversion(3,3)).to.equal("10");
		done();
	});

	it('should convert 4 to the base 2 to be equal to 100', function(done) {
		expect(baseConversion(4,2)).to.equal("100");
		done();
	});

	it('should convert 1048576 to the base 2 to be equal to 100000000000000000000', function(done) {
		expect(baseConversion(1048576,2)).to.equal("100000000000000000000");
		done();
	});

});
