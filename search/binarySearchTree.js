class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data < this.data && this.left) this.left.insert(data);
		else if (data < this.data) this.left = new Node(data);
		else if (data > this.data && this.right) this.right.insert(data);
		else if (data > this.data) this.right = new Node(data);
	}

	search(data) {
		if (this.data === data) return this;
		if (this.data < data && this.right) return this.right.search(data);
		else if (this.data > data && this.left) return this.left.search(data);
		return null;
	}
}
export default TreeNode;
// (()=>{
//     const root = new Node(5);
//     root.insert(1);
//     root.insert(3);
//     root.insert(0);
//     console.log(" Search 3 ", root.search(3));
//     console.log(" Search 2 ", root.search(2));
//     root.insert(2);
//     console.log(" Search 2 ", root.search(2));
//     console.log(" Search 3 ", root.search(3));
// })();