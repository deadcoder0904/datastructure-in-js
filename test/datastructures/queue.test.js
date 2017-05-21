const expect = require('chai').expect;
const Queue = require('../../examples/datastructures/queue');

describe('=> QUEUE', function() {
	let numbers;
	before(function () {
		numbers = new Queue();
	});

	it('should create an Empty Queue', function(done) {
		expect(numbers.dataStore).to.deep.equal([]);
		done();
	});

	it('should enqueue elements into the Queue', function(done) {
		numbers.enqueue(1);
		numbers.enqueue(2);
		numbers.enqueue(3);
		numbers.enqueue(4);
		expect(numbers.dataStore).to.deep.equal([1,2,3,4]);
		done();
	});

	it('should peek the Queue', function(done) {
		expect(numbers.peek()).to.deep.equal(1);
		done();
	});

	it('should check if the Queue is empty', function(done) {
		expect(numbers.empty()).to.equal(false);
		done();
	});

	it('should check the length of the Queue', function(done) {
		expect(numbers.length()).to.equal(4);
		done();
	});

	describe('=> dequeue', function() {

		it('should dequeue 1 element of the Queue', function(done) {
			numbers.dequeue();
			expect(numbers.dataStore).to.deep.equal([2,3,4]);
			done();
		});

		it('should dequeue all elements of the Queue', function(done) {
			numbers.dequeue();
			numbers.dequeue();
			numbers.dequeue();
			expect(numbers.dataStore).to.deep.equal([]);
			done();
		});

	});


	describe('=> clear', function() {
		it('should clear the Queue', function(done) {
				numbers.clear();
				expect(numbers.dataStore).to.deep.equal([]);
				done();
			});
	});

});
