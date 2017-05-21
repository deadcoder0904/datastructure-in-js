class Stack {
	constructor() {
		this.dataStore = [];
		this.top = -1;
	}

	push(element) {
		this.top++;
		this.dataStore.push(element);
	}

	pop() {
		this.top--;
		return this.dataStore.pop();
	}

	peek() {
		return this.dataStore[this.top];
	}

	clear() {
		if(~this.top)
			while(this.top--)
				this.dataStore.pop();
	}

	empty() {
		return !~this.top;
	}

	length() {
		return this.top + 1;
	}
}

module.exports = Stack;
