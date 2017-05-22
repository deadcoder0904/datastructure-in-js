class HashTable {
	constructor() {
		this.table = new Array(137);
	}

	simpleHash(word) {
		let total = 0;
		for(let i = 0; i < word.length; i++)
			total += word.charCodeAt(i);
		return total % this.table.length;
	}

	betterHash(word) {
		let total = 0;
		for(let i = 0; i < word.length; i++)
			total = 37 * total + word.charCodeAt(i);
		return total % this.table.length;
	}

	put(value,whichHash) {
		let pos;
		if(whichHash == "simpleHash")
			pos = this.simpleHash(value);
		if(whichHash == "betterHash")
			pos = this.betterHash(value);
		this.table[pos] = value;
	}

	get(value,whichHash) {
		let hash;
		if(whichHash == "simpleHash")
			hash = this.simpleHash(value);
		if(whichHash == "betterHash")
			hash = this.betterHash(value);
		return this.table[hash];
	}

	showAll() {
		let str = "";
		for (let i = 0; i < this.table.length; i++)
			if(this.table[i] !=undefined)
				str += i + " : " + this.table[i] + "\n";
		return str;
	}
}

module.exports = HashTable;
