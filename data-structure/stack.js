class Stack {
	constructor() {
		this.data = [];
	}
	push(data) {
		this.data.push(data);
	}
	pop() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
    }
    size() {
        return this.data.length;
    }
}

// (function(){
//     let stack = new Stack();
//     console.log(' Initial size ', stack.size());
//     stack.push(1);
//     stack.push(2);
//     stack.push(3);
//     stack.push(4);
//     console.log( ' Size ', stack.size());
//     console.log( ' Peek ', stack.peek());
//     console.log( ' Size ', stack.size());
//     console.log( ' Pop ', stack.pop());
//     console.log( ' Size ', stack.size());
//     while(stack.size() > 0){
//         console.log('Item: ' + stack.pop());
//     }
// })();
