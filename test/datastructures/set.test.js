const expect = require('chai').expect;
const Set = require('../../examples/datastructures/set');

describe('=> SET', function() {
	let numbers;
	before(function () {
		numbers = new Set();
	});

	it('should create an Empty Set', function(done) {
		expect(numbers.dataStore).to.deep.equal([]);
		done();
	});

	it('should add element into the Set', function(done) {
		expect(numbers.add(1)).to.equal(true);
		expect(numbers.add(2)).to.equal(true);
		expect(numbers.add(3)).to.equal(true);
		expect(numbers.dataStore.length).to.equal(3);
		expect(numbers.dataStore).to.deep.equal([1,2,3]);
		done();
	});

	it('should display elements of Set', function(done) {
		expect(numbers.show()).to.equal("1,2,3");
		done();
	});

	it('should return size of Set', function(done) {
		expect(numbers.size()).to.equal(3);
		done();
	});

	it('should check if a given Set is a subset of the Original Set', function(done) {
		tempSet = new Set();
		tempSet.add(1);
		tempSet.add(2);
		tempSet.add(3);
		expect(numbers.subset(tempSet)).to.equal(true);
		done();
	});

	it('should contain some elements in the Set', function(done) {
		expect(numbers.contains(1)).to.equal(true);
		expect(numbers.contains(31)).to.equal(false);
		done();
	});

	it('should not add duplicate elements into the Set', function(done) {
		expect(numbers.add(1)).to.equal(false);
		expect(numbers.add(2)).to.equal(false);
		expect(numbers.dataStore.length).to.equal(3);
		expect(numbers.dataStore).to.deep.equal([1,2,3]);
		done();
	});

	it('should remove element from the Set', function(done) {
		expect(numbers.remove(1)).to.equal(true);
		expect(numbers.dataStore.length).to.equal(2);
		expect(numbers.dataStore).to.deep.equal([2,3]);
		done();
	});

	it('should not remove element which does not exist in Set', function(done) {
		expect(numbers.remove(1)).to.equal(false);
		expect(numbers.dataStore.length).to.equal(2);
		expect(numbers.dataStore).to.deep.equal([2,3]);
		done();
	});

	describe('=> union, intersection, difference', function() {
		before(function() {
			numbers2 = new Set();
			numbers.add(1);
			numbers2.add(1);
			numbers2.add(2);
			numbers2.add(4);
			numbers2.add(5);
			numbers2.add(6);
		});

		it('should compute Union of 2 Sets', function(done) {
			union = numbers.union(numbers2);
			expect(union.dataStore.length).to.equal(2);
			expect(union.contains(1)).to.equal(true);
			expect(union.contains(2)).to.equal(true);
			done();
		});

		it('should compute Intersection of 2 Sets', function(done) {
			intersect = numbers.intersect(numbers2);
			expect(intersect.dataStore.length).to.equal(2);
			expect(intersect.contains(1)).to.equal(true);
			expect(intersect.contains(2)).to.equal(true);
			done();
		});

		it('should compute Difference of 2 Sets', function(done) {
			difference = numbers.difference(numbers2);
			expect(difference.dataStore.length).to.equal(1);
			expect(difference.contains(3)).to.equal(true);
			done();
		});

	});

});
