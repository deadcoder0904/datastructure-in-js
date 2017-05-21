class Queue {
	constructor() {
		this.dataStore = [];
	}

	enqueue(element) {
		this.dataStore.push(element);
	}

	dequeue() {
		return this.dataStore.shift();
	}

	clear() {
		this.dataStore = [];
	}

	front() {
		return this.dataStore[0];
	}

	back() {
		return this.dataStore[this.dataStore.length - 1];
	}

	toString() {
		const str = "";
		for (let i = 0; i < this.dataStore.length; i++)
			str += this.dataStore[i] + " ";
		return str;
	}

	empty() {
		return this.dataStore.length == 0;
	}

	peek() {
		return this.dataStore[0];
	}

	length() {
		return this.dataStore.length;
	}
}

module.exports = Queue;
