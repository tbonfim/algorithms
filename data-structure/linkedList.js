class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertHead(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	getHead() {
		return this.head;
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) return node;
			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(index) {
		if (!this.head) return;

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) return;
		previous.next = previous.next.next;
	}

	insertAt(index, data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
    }
    getTail() {
        if (!this.head) return null;

		let node = this.head;
		while (node) {
			if (!node.next) return node;
			node = node.next;
		}
    }
    removeTail() {
		if (!this.head) return;

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
    }
    insertTail(data) {
		const last = this.getTail();
		if (last) last.next = new Node(data);
		else this.head = new Node(data);
	}

}

export default LinkedList;
// (function(){
//     let list = new LinkedList();
//     list.insertHead(1);
//     console.log(' Head ', list.getHead());
//     console.log(' Size ', list.size());
//     list.insertAt(1, 2);
//     list.insertAt(2, 3);
//     list.insertAt(3, 4);
//     console.log(' Size ', list.size());
//     list.removeAt(2);
//     console.log(' Size ', list.size());
//     console.log(' Tail ', list.getTail());
//     list.removeTail();
//     console.log(' Tail ', list.getTail());
//     list.insertTail(40);
//     console.log(' Tail ', list.getTail());

// })();