class List {
	constructor() {
		this.listSize = 0; // Number of elements in list
		this.pos = 0; // Current position in list
		this.dataStore = []; // initializes an empty array to store list elements
	}

	// Clears all elements from list
	clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = 0;
		this.pos = 0;
	}

	// Finds the element from list
	find(element) {
		return this.dataStore.indexOf(element);
	}

	//Returns string representation of list
	toString() {
		return this.dataStore.toString();
	}

	// Inserts new element after existing element
	insert(newElement, existingElement) {
		const index = this.find(existingElement);
		if(index != -1) {
			this.dataStore.splice(index + 1, 0, newElement);
			this.listSize++;
			return true;
		}
		return false;
	}

	// Adds new element to end of list
	append(element) {
		this.dataStore.push(element);
		this.listSize++;
	}

	// Removes element from list
	remove(element) {
		const index = this.find(element);
		if(index != -1) {
			this.dataStore.splice(index, 1);
			this.listSize--;
			return true;
		}
		return false;
	}

	// Sets current position to first element of list
	front() {
		this.pos = 0;
	}

	// Sets current position to last element of list
	end() {
		this.pos = this.listSize - 1;
	}

	// Moves current position back one element
	prev() {
		if(this.pos > 0)
			this.pos--;
	}

	// Moves current position forward one element
	next() {
		if(this.pos < this.listSize - 1)
			this.pos++;
	}

	// Returns the number of elements in list
	length() {
		return this.listSize;
	}

	// Returns the current position in list
	currPos() {
		return this.pos;
	}

	// Moves the current position to specified position
	moveTo(position) {
		this.pos = position;
	}

	// Returns element at current position
	getElement() {
		return this.dataStore[this.pos];
	}

	// Checks if element contains in the list
	contains(element) {
		return !!~this.find(element);
	}
}

module.exports = List;
