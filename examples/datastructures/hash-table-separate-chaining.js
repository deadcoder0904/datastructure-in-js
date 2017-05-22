class HashTable {
	constructor() {
		this.table = new Array(137);
		this.buildChains();
	}

	betterHash(word) {
		let total = 0;
		for(let i = 0; i < word.length; i++)
			total = 37 * total + word.toLowerCase().charCodeAt(i);
		return total % this.table.length;
	}

	buildChains() {
		for (let i = 0; i < this.table.length; i++)
			this.table[i] = [];
	}

	put(value) {
		const pos = this.betterHash(value);
		let index = 0;
		while(index < this.table.length && this.table[pos][index] != undefined)
			index++;
		this.table[pos][index] = value;
	}

	get(value) {
		const hash = this.betterHash(value);
		let index = 0;
		while(index < this.table.length && this.table[hash][index] != value)
			index++;
		return this.table[hash][index];
	}

	showAll() {
		let str = "";
		for (let i = 0; i < this.table.length; i++)
			for (let j = 0; j < this.table[i].length; j++)
				str += i + " : " + this.table[i] + "\n";
		return str;
	}
}

module.exports = HashTable;
