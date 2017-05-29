class Node {
	constructor(data, left, right) {
		this.data = this.data;
		this.left = this.left;
		this.right = this.right;
	}

	show() {
		return this.data;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(data) {
		const node = new Node(data,null,null);
		const temp = this.root;
		if(temp == null) {
			temp = node;
			return;
		}
		while(data < temp.data)
			temp = temp.left;
		while(data > temp.data)
			temp = temp.right;
		if(data < temp.data)
			temp.left = node;
		else temp.right = node;
	}

	inorder(node) {
		if(node != null) {
			inorder(node.left);
			putstr(node.show() + " ");
			inorder(node.right);
		}
	}

	preorder(node) {
		if(node != null) {
			putstr(node.show() + " ");
			inorder(node.left);
			inorder(node.right);
		}
	}

	postorder(node) {
		if(node != null) {
			inorder(node.left);
			inorder(node.right);
			putstr(node.show() + " ");
		}
	}

}

module.exports = BST;