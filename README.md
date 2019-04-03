
# A Javascript implementation of algorithms and data structures
I implemented several algorithms and data-structures using javascript. To use them in your app, just download and import the needed .js file.

## Common algorithms
###### Vowels 
Given a string, count the number of vowels on it.  `vowelsCounter("Any String")`;
###### Palindrome 
Given a string, returns if its palindrome or not.  `palindrome("Any String")`
###### Fibonacci
Returns the nth number inside Fibonacci sequence. `fibonacci(5)`
###### Caesar Cipher 
Substitute each character by shifting it up or down the alphabet by a given integer. `caesarCipher("Any String", 5)`

## Data structures
###### Three
Javascript implementation of trees.
```
const tree = new Tree();
tree.root = new Node(1);
tree.root.add(2);
```
###### Linked List
Javascript implementation of Linked Lists.
```
let list = new LinkedList();
list.insertHead(1);
list.insertAt(1, 2);
list.removeAt(2);
list.removeTail();
list.insertTail(40);
```
###### Stack
Javascript implementation of Stackks.
```
let stack = new Stack();
stack.size();
stack.push(1);
stack.peek();
stack.pop();
```
###### Queue
Javascript implementation of Queues
```
let queue = new Queue();
queue.enqueue(4);
queue.size();
queue.peek();
queue.dequeue();
```

## Sort algorithms
###### Quick Sort
Quick sort algorithm
```
let array = [1,221,32,3,6,4,3,3,2,6,88,4,54,23,6,21,3];
quickSort(array);
```
###### Merge Sort 
Merge sort algorithm
```
let array = [1,221,32,3,6,4,3,3,2,6,88,4,54,23,6,21,3];
mergeSort(array);
```

## Sort algorithms/structures
###### Binary Search 
Javascript implementation of binary search.
```
const array = [1,1,2,3,5,5,5,6,7,13,32,34,45,45,57,67,243,245,3456];
binarySearch(array, 32);
```
###### Binary Search Tree 
Javascript implementation of binary search tree. 
```
const root = new Node(5);
root.insert(1);
root.insert(3);
root.insert(0);
root.search(3);
```
