const quickSort = array => {

	if (array.length < 2) return array;

	const pivot = array[array.length - 1];
	const left = [], right = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) left.push(array[i]);
		else right.push(array[i]);
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};


// (()=>{
//     let array = [1,221,32,3,6,4,3,3,2,6,88,4,54,23,6,21,3];
//     console.log(quickSort(array));
// })();