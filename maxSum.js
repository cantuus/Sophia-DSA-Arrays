const maxSum = function(array) {
    let maxSum = 0;
    let currentSum = 0;

    for(let i = 0; i < array.length; i++){
        if( maxSum <= currentSum) {
            maxSum += array[i]
            currentSum += array[i]
        }
        else {
            currentSum += array[i]
        }
    }
    return maxSum;
}

maxSum([4, 6, -3, 5, -2, 1]);