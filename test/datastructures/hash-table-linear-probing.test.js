const expect = require('chai').expect;
const HashTable = require('../../examples/datastructures/hash-table-linear-probing');

describe('=> HASH TABLE USING LINEAR PROBING', function() {
	let people;
	before(function () {
		people = new HashTable();
	});

	it('should create an Empty Hash Table', function(done) {
		expect(people.table.length).to.deep.equal(137);
		done();
	});

	it('should put value into the Hash Table',function() {
		people.put("Diana",13);
		people.put("Clayton",14);
		people.put("Raymond",47);
		people.put("Nadia",28);
		people.put("Afzar",51);
		expect(people.showAll()).to.equal("13 : Diana\n51 : Afzar\n14 : Clayton\n47 : Raymond\n28 : Nadia\n");
	});

	it('should get value from the Hash Table',function() {
		expect(people.get("Nadia")).to.equal("Nadia");
		expect(people.get("Diana")).to.equal("Diana");
		expect(people.get("Azhar")).to.equal(undefined);
	});

});
