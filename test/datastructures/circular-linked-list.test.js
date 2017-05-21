const expect = require('chai').expect;
const CircularLinkedList = require('../../examples/datastructures/circular-linked-list');

describe('=> CIRCULAR LINKED LIST', function() {
	let names;
	before(function () {
		names = new CircularLinkedList();
	});

	it('should create an Empty Linked List', function(done) {
		expect(names.head.data).to.equal("head");
		done();
	});

	it('should print an Empty Linked List', function(done) {
		expect(names.printList()).to.equal("The Linked List is Empty");
		done();
	});

	it('should insert into a Linked List', function(done) {
		names.insertAfter(1,"head");
		names.insertAfter(2, 1);
		names.insertAfter(3, 2);
		names.insertAfter(4, 3);
		expect(names.printList()).to.equal("1 -> 2 -> 3 -> 4 -> 1\n");
		done();
	});

	it('should remove element from a Linked List', function(done) {
		names.remove(1);
		expect(names.printList()).to.equal("2 -> 3 -> 4 -> 2\n");
		done();
	});

	describe('=> clear', function() {
		it('should clear the Linked List', function(done) {
			names.remove(2);
			names.remove(3);
			names.remove(4);
			expect(names.printList()).to.equal("The Linked List is Empty");
			done();
		});
	});

});
