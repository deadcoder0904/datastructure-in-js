class HashTable {
	constructor() {
		this.table = new Array(137);
		this.values = new Array(137);
	}

	betterHash(word) {
		let total = 0;
		for(let i = 0; i < word.length; i++)
			total = 37 * total + word.toLowerCase().charCodeAt(i);
		return total % this.table.length;
	}

	put(key, value) {
		const pos = this.betterHash(key);
		while(this.table[pos] != undefined)
			pos++;
		this.table[pos] = key;
		this.values[pos] = value;
	}

	get(key) {
		const hash = this.betterHash(key);
		for(let i = hash;this.table[hash] != undefined; i++)
			if(this.table[hash] == key)
				break;
		return this.table[hash];
	}

	showAll() {
		let str = "";
		for (let i = 0; i < this.table.length; i++)
			if(this.table[i] !=undefined)
				str += this.values[i] + " : " + this.table[i] + "\n";
		return str;
	}
}

module.exports = HashTable;
