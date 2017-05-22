const expect = require('chai').expect;
const HashTable = require('../../examples/datastructures/hash-table');

describe('=> HASH TABLE', function() {
	let names;
	before(function () {
		names = new HashTable();
	});

	it('should create an Empty Hash Table', function(done) {
		expect(names.table).to.deep.equal([]);
		done();
	});

	describe('=> simpleHash', function() {
			before(function () {
				names = new HashTable();
			});

		it('should put only 1 value of "Clayton" & "Raymond" in Hash Table bcz of Simple Hash', function(done) {
			names.put("Clayton","simpleHash");
			names.put("Raymond","simpleHash");
			expect(names.showAll()).to.equal("45 : Raymond\n");
			done();
		});

		after(function() {
			names = new HashTable();
		});
	});

	describe('=> betterHash', function() {
		it('should put both values of "Clayton" & "Raymond" in Hash Table bcz of Simple Hash', function(done) {
			names.put("Clayton","betterHash");
			names.put("Raymond","betterHash");
			expect(names.showAll()).to.equal("88 : Clayton\n92 : Raymond\n");
			done();
		});
	});

	it('should get value from Hash Table',function() {
		names.put("New","betterHash");
		expect(names.get("New","betterHash")).to.equal("New");
		expect(names.get("xxx","betterHash")).to.equal(undefined);
	});

});
