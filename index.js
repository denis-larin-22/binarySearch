// Binary Search
const array = new Array(100).fill().map((_, i) => ++i);

const STEP = 1;

function binarySearch(arr, numb, left = 0, right = arr.length - STEP) {
    let mid = Math.ceil((left + right) / 2);

    if (left > right) return - STEP;

    if (numb > arr[mid]) return binarySearch(arr, numb, mid + STEP, right);

    if (numb < arr[mid]) return binarySearch(arr, numb, left, mid - STEP);

    if (arr[mid] === numb) return mid;
}


console.log(binarySearch(array, 22));