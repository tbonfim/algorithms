class Queue {
	constructor() {
		this.data = [];
	}
	enqueue(data) {
		this.data.unshift(data);
	}
	dequeue() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
    }
    size() {
        return this.data.length;
    }
}
export default Queue;
// (function(){
//     let queue = new Queue();
//     console.log(' Initial size ', queue.size());
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.enqueue(3);
//     queue.enqueue(4);
//     console.log( ' Size ', queue.size());
//     console.log( ' Peek ', queue.peek());
//     console.log( ' Size ', queue.size());
//     console.log( ' Dequeue ', queue.dequeue());
//     console.log( ' Size ', queue.size());
//     while(queue.size() > 0){
//         console.log('Item: ' + queue.dequeue());
//     }
// })();