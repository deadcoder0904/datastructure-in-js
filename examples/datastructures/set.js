class Set {
	constructor() {
		this.dataStore = [];
	}

	contains(data) {
		let pos = this.dataStore.indexOf(data);
		if(!~pos)
			return false;
		return true;
	}

	add(data) {
		let pos = this.dataStore.indexOf(data);
		if(!~pos){
			this.dataStore.push(data);
			return true;
		}
		return false;
	}

	remove(data) {
		const pos = this.dataStore.indexOf(data);
		if(~pos) {
			this.dataStore.splice(pos,1);
			return true;
		}
		return false;
	}

	show() {
		return this.dataStore.toString();
	}

	size() {
		return this.dataStore.length;
	}

	union(set) {
		let tempSet = new Set();
		for(let i = 0; i < this.dataStore.length; i++)
			if(set.contains(this.dataStore[i]))
				tempSet.add(this.dataStore[i]);
		return tempSet;
	}

	intersect(set) {
		let tempSet = new Set();
		for(let i = 0; i < this.dataStore.length; i++)
			if(set.contains(this.dataStore[i]))
				tempSet.add(this.dataStore[i]);
		return tempSet;
	}

	difference(set) {
		let tempSet = new Set();
		for(let i = 0; i < this.dataStore.length; i++)
			if(!set.contains(this.dataStore[i]))
				tempSet.add(this.dataStore[i]);
		return tempSet;
	}

	subset(set) {
		if(this.size() > set.size())
			return false;
		else
			for(let member of this.dataStore)
				if(!set.contains(member))
					return false;
		return true;
	}
}

module.exports = Set;
