const binarySearch = (array, value) => {
	const midIndex = Math.floor(array.length / 2);
	const midValue = array[midIndex];

	if (value === midValue) return true;
	else if (array.length > 1 && value < midValue)
		return binarySearch(array.splice(0, midIndex), value);
	else if (array.length > 1 && value > midValue)
		return binarySearch(array.splice(midIndex + 1, array.length), value);
	else return false;
};
export default binarySearch;
// (()=>{
//     const array = [1,1,2,3,5,5,5,6,7,13,32,34,45,45,57,67,243,245,3456];
//     console.log(" Array ", array.toString());
//     console.log(" Search for 32 => " , binarySearch(array, 32));
//     console.log(" Search for 30 => " , binarySearch(array, 30));
// })();