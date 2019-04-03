const mergeSort = array => {
	if (array.length < 2) return array;

	const center = Math.floor(array.length / 2);
	const left = array.slice(0, center),
		right = array.slice(center, array.length);

	return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
	const result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) result.push(left.shift());
		else result.push(right.shift());
	}

	while (left.length) result.push(left.shift());
	while (right.length) result.push(right.shift());

	return result;
};
export default mergeSort;

// (()=>{
//     const array = [2,3,1,4,5,2,3,5,67,13,4,5,34,45,245,3456,7,57,45,6,32,4,1,243];
//     console.log(array.toString());
//     console.log(' Sorted array : ', mergeSort(array).toString());
// })();