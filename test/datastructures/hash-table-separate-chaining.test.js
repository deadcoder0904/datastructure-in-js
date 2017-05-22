const expect = require('chai').expect;
const HashTable = require('../../examples/datastructures/hash-table-separate-chaining');

describe('=> HASH TABLE USING SEPARATE CHAINING', function() {
	let names;
	before(function () {
		names = new HashTable();
	});

	it('should create an Empty Hash Table', function(done) {
		expect(names.table.length).to.deep.equal(137);
		done();
	});

	it('should put value into the Hash Table',function() {
		names.put("Diana");
		names.put("Clayton");
		names.put("Raymond");
		names.put("Nadia");
		names.put("Afzar");
		expect(names.showAll()).to.equal("11 : Diana\n41 : Afzar\n56 : Clayton\n60 : Raymond\n129 : Nadia\n");
	});

	it('should get value from the Hash Table',function() {
		expect(names.get("Nadia")).to.equal("Nadia");
		expect(names.get("Diana")).to.equal("Diana");
		expect(names.get("Azhar")).to.equal(undefined);
	});

});
