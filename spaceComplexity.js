// Space complexity refers to the amount of memory space required by an algorithm to solve a problem. It is the measure of the maximum amount of memory space required by an algorithm during its execution.
// In computer science, space complexity is usually expressed in terms of the amount of memory space used by an algorithm in terms of Big O notation, which provides an upper bound on the growth rate of the space requirements as the input size of the problem grow

//0(1)
function sum(arr) {

    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sum([23, 4, 6]))

// o(n)
function double(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}
console.log(double([3, 4, 5]))