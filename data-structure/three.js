/*
	Simple tree implementation, with traverseDepth and traverseBreadth methods
 */
class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(node => {
			return node.data !== data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBreadth() {
		console.log('traverseBreadth');
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            console.log(node.data);
			queue.push(...node.children);
		}
	}

	traverseDepth() {
		console.log('traverseDepth');
        const stack = [this.root];
        while (stack.length) {
            const node = stack.shift();
            console.log(node.data);
			stack.unshift(...node.children);
		}
	}
}
export default Tree;
// (function() {
// 	const tree = new Tree();
// 	tree.root = new Node(1);
// 	tree.root.add(2);
// 	tree.root.add(3);
// 	tree.root.children[0].add(4);

// 	tree.traverseBreadth();
// 	tree.traverseDepth();
// })();