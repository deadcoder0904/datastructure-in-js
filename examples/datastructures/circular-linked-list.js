class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node("head");
		this.head.next = this.head;
	}

	find(data) {
		let temp = this.head;
		while(temp.data != data)
			temp = temp.next;
		return temp;
	}

	findPrev(data) {
		let temp = this.head;
		while(temp.next != null && temp.next.data != data)
			temp = temp.next;
		return temp;
	}

	printList() {
		let temp = this.head;
		if(temp.next == temp)
			return "The Linked List is Empty";
		let str = "";
		while(temp.next != this.head) {
			str += temp.next.data + " -> ";
			temp = temp.next;
		}
		str += this.head.next.data + "\n";
		return str;
	}

	insertAfter(data,currData) {
		const newNode = new Node(data);
		let curr = this.find(currData);
		curr.next = newNode;
		newNode.next = this.head;
	}

	remove(data) {
		const prev = this.findPrev(data);
		if(prev.next != null)
			prev.next = prev.next.next;
	}
}

module.exports = LinkedList;
