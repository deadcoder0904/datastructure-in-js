const expect = require('chai').expect;
const BST = require('../../examples/datastructures/bst');

describe('=> DICTIONARY', function() {
	let numbers;
	before(function () {
		numbers = new BST();
	});

	it('should create an Empty BST', function(done) {
		expect(numbers.root).to.equal(null);
		done();
	});

	it('should insert Nodes in the BST', function(done) {
		numbers.insert(23);
		numbers.insert(45);
		numbers.insert(16);
		numbers.insert(37);
		numbers.insert(3);
		numbers.insert(99);
		numbers.insert(22);
		expect(numbers.inorder(numbers.root)).to.equal("3 16 22 23 37 45 99");
		done();
	});

});
