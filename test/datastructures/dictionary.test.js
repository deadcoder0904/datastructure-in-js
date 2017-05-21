const expect = require('chai').expect;
const Dictionary = require('../../examples/datastructures/dictionary');

describe('=> DICTIONARY', function() {
	let numbers;
	before(function () {
		numbers = new Dictionary();
	});

	it('should create an Empty Dictionary', function(done) {
		expect(numbers.dataStore).to.deep.equal([]);
		done();
	});

	it('should set a <key,value> pair in the Dictionary', function(done) {
		numbers.set("Champu", 3370123459);
		numbers.set("Zhampak", 123991283);
		numbers.set("Raju", 7118780921);
		expect(numbers.dataStore["Champu"]).to.equal(3370123459);
		expect(numbers.dataStore["Zhampak"]).to.equal(123991283);
		expect(numbers.dataStore["Raju"]).to.equal(7118780921);
		done();
	});

	it('should get a value from the Dictionary', function(done) {
		expect(numbers.get("Champu")).to.equal(3370123459);
		expect(numbers.get("Zhampak")).to.equal(123991283);
		expect(numbers.get("Raju")).to.equal(7118780921);
		done();
	});

	it('should show all values from the Dictionary', function(done) {
		expect(numbers.showAll()).to.equal("Champu -> 3370123459\nZhampak -> 123991283\nRaju -> 7118780921\n");
		done();
	});

	it('should return proper count from the Dictionary', function(done) {
		expect(numbers.count()).to.equal(3);
		done();
	});

	it('should sort the Dictionary', function(done) {
		numbers.sort();
		expect(numbers.showAll()).to.equal("Champu -> 3370123459\nRaju -> 7118780921\nZhampak -> 123991283\n");
		done();
	});

	it('should remove a value from the Dictionary', function(done) {
		numbers.remove("Raju");
		expect(numbers.get("Raju")).to.equal(undefined);
		done();
	});

	describe('=> clear', function() {
		it('should clear the Dictionary', function(done) {
				numbers.clear();
				expect(numbers.dataStore).to.deep.equal([]);
				done();
			});
	});

});
