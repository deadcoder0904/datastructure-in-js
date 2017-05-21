class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node("head");
	}

	find(data) {
		let temp = this.head;
		while(temp.data != data)
			temp = temp.next;
		return temp;
	}

	findLast() {
		let temp = this.head;
		while(temp.next != null)
			temp = temp.next;
		return temp;
	}

	printList() {
		let temp = this.head;
		if(temp.next == null)
			return "The Linked List is Empty";
		let str = "";
		while(temp.next != null) {
			str += temp.next.data + " -> ";
			temp = temp.next;
		}
		str += "NULL\n";
		return str;
	}

	printListReverse() {
		let temp = this.findLast();
		if(temp.prev == null)
			return "The Linked List is Empty";
		let str = "";
		while(temp.prev != null) {
			str += temp.data + " -> ";
			temp = temp.prev;
		}
		str += "NULL\n";
		return str;
	}

	insertAfter(data,currData) {
		const newNode = new Node(data);
		let curr = this.find(currData);
		newNode.next = curr.next;
		newNode.prev = curr;
		curr.next = newNode;
	}

	remove(data) {
		const curr = this.find(data);
		if(curr.next != null) {
			curr.prev.next = curr.next;
			curr.next.prev = curr.prev;
			curr.prev = null;
			curr.next = null;
		}
		else this.head.next = null;
	}
}

module.exports = LinkedList;
