const expect = require('chai').expect;
const Stack = require('../../examples/datastructures/stack');

describe('=> STACK', function() {
	let numbers;
	before(function () {
		numbers = new Stack();
	});

	it('should create an Empty Stack', function(done) {
		expect(numbers.dataStore).to.deep.equal([]);
		expect(numbers.top).to.equal(-1);
		done();
	});

	it('should push elements into the Stack', function(done) {
		numbers.push(1);
		numbers.push(2);
		numbers.push(3);
		numbers.push(4);
		expect(numbers.dataStore).to.deep.equal([1,2,3,4]);
		expect(numbers.top).to.equal(3);
		done();
	});

	describe('=> pop', function() {

		it('should pop 1 element of the Stack', function(done) {
			numbers.pop();
			expect(numbers.dataStore).to.deep.equal([1,2,3]);
			expect(numbers.top).to.equal(2);
			done();
		});

		it('should pop all elements of the Stack', function(done) {
			numbers.pop();
			numbers.pop();
			numbers.pop();
			expect(numbers.dataStore).to.deep.equal([]);
			expect(numbers.top).to.equal(-1);
			done();
		});

	});

	it('should peek the Stack', function(done) {
		expect(numbers.peek()).to.deep.equal(4);
		done();
	});

	it('should check if the Stack is empty', function(done) {
		expect(numbers.empty()).to.equal(false);
		done();
	});

	it('should check the length of the Stack', function(done) {
		expect(numbers.length()).to.equal(4);
		done();
	});

	describe('=> clear', function() {
		it('should clear the Stack', function(done) {
				numbers.clear();
				expect(numbers.top).to.equal(-1);
				expect(numbers.dataStore).to.deep.equal([]);
				done();
			});
	});

});
