function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
let arr = [5, 3, 8, 4, 2]; 
const result = arr.sort((a, b) => a - b);
console.log(result);