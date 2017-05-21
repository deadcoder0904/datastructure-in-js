class Dictionary {
	constructor() {
		this.dataStore = [];
	}

	set(key,value) {
		this.dataStore[key] = value;
	}

	get(key) {
		return this.dataStore[key];
	}

	remove(key) {
		delete this.dataStore[key];
	}

	showAll() {
		let str = "";
		for(let key of Object.keys(this.dataStore))
			str += key + " -> " + this.dataStore[key] + "\n";
		return str;
	}

	sort() {
		const sortedKeys = Object.keys(this.dataStore).sort();
		let temp = [];
		sortedKeys.map(key => {
			temp[key] = this.dataStore[key];
			return temp;
		});
		this.dataStore = temp;
	}

	count() {
		return Object.keys(this.dataStore).length;
	}

	clear() {
		this.dataStore = [];
	}
}

module.exports = Dictionary;
