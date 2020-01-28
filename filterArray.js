const filter = function(array) {
    let filteredArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 5){
            filteredArray.push(array[i])
        }
    }

    return filteredArray;
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])