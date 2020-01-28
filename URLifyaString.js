const replace = function (str) {
    let output = [];

    for(let i = 0; i < str.length ; i++){
        if(str[i] === ' '){
            output.push('%20')
        } else {
            output.push(str[i])
        }
    }

    let result = output.join('');

    return result;
}

console.log(replace('sophia koeut'));

