const expect = require('chai').expect;
const List = require('../../examples/datastructures/list');

describe('=> LIST', function() {
	let numbers;
	before(function () {
		numbers = new List();
	});

	it('should create an Empty List', function(done) {
		expect(numbers.listSize).to.equal(0);
		expect(numbers.pos).to.equal(0);
		expect(numbers.dataStore).to.deep.equal([]);
		done();
	});

	it('should append [1,2,3,4] into List', function(done) {
		numbers.append(1);
		numbers.append(2);
		numbers.append(3);
		numbers.append(4);
		expect(numbers.dataStore).to.deep.equal([1,2,3,4]);
		expect(numbers.listSize).to.equal(4);
		done();
	});

	it('should remove 1 from List', function(done) {
		numbers.remove(1);
		expect(numbers.dataStore).to.deep.equal([2,3,4]);
		expect(numbers.listSize).to.equal(3);
		done();
	});

	it('should display List "2,3,4"', function(done) {
		expect(numbers.toString()).to.deep.equal("2,3,4");
		done();
	});

	describe('=> find', function() {

		it('should not find 1 in the List', function(done) {
			expect(numbers.find(1)).to.equal(-1);
			done();
		});

		it('should find 2 in the List', function(done) {
			expect(numbers.find(2)).to.equal(0);
			done();
		});

	});

	describe('=> contains', function() {

		it('should not contain 1 in the List', function(done) {
			expect(numbers.contains(1)).to.equal(false);
			done();
		});

		it('should contain 2 in the List', function(done) {
			expect(numbers.contains(2)).to.equal(true);
			done();
		});

	});

	it('should get element at current position from the List', function(done) {
		expect(numbers.getElement()).to.equal(2);
		done();
	});

	describe('=> insert', function() {

		it('should insert 1 after 3 into the List', function(done) {
			expect(numbers.dataStore).to.deep.equal([2,3,4]);
			expect(numbers.listSize).to.equal(3);
			expect(numbers.insert(1,3)).to.equal(true);
			expect(numbers.dataStore).to.deep.equal([2,3,1,4]);
			expect(numbers.listSize).to.equal(4);
			done();
		});

		it('should insert 6 after 5 into the List', function(done) {
			expect(numbers.insert(6,5)).to.equal(false);
			expect(numbers.dataStore).to.deep.equal([2,3,1,4]);
			expect(numbers.listSize).to.equal(4);
			done();
		});

	});

	it('should point to the front of the List', function(done) {
		numbers.front();
		expect(numbers.pos).to.equal(0);
		expect(numbers.getElement()).to.equal(2);
		done();
	});

	it('should point to the end of the List', function(done) {
		numbers.end();
		expect(numbers.pos).to.equal(2);
		expect(numbers.getElement()).to.equal(4);
		done();
	});

	describe('=> prev', function() {

		it('should point to the prev of the List', function(done) {
			numbers.prev();
			expect(numbers.pos).to.equal(1);
			expect(numbers.getElement()).to.equal(3);
			done();
		});

		it('should point to the start of the List', function(done) {
			numbers.prev();
			numbers.prev();
			numbers.prev();
			expect(numbers.pos).to.equal(0);
			done();
		});

	});


	describe('=> next', function() {

		it('should point to the next of the List', function(done) {
			numbers.next();
			expect(numbers.pos).to.equal(1);
			expect(numbers.getElement()).to.equal(3);
			done();
		});

		it('should point to the end of the List', function(done) {
			numbers.next();
			numbers.next();
			numbers.next();
			expect(numbers.pos).to.equal(numbers.listSize - 1);
			done();
		});

	});

	it('should provide the length of the List', function(done) {
		expect(numbers.length()).to.equal(3);
		done();
	});

	it('should provide the current position of the List', function(done) {
		expect(numbers.currPos()).to.equal(2);
		done();
	});

	it('should move to a given position of the List', function(done) {
		numbers.moveTo(2);
		expect(numbers.pos).to.equal(2);
		done();
	});

	describe('=> clear', function() {
		it('should clear the List', function(done) {
				numbers.clear();
				expect(numbers.listSize).to.equal(0);
				expect(numbers.pos).to.equal(0);
				expect(numbers.dataStore).to.deep.equal([]);
				done();
			});
	});

});
