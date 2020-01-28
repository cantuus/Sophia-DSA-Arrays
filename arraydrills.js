/*
### 1. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. One solution that developers can use to solve this problem is to replace any spaces with a '%20'. Write a method that takes in a string and replaces all its empty spaces with a '%20'. Your algorithm can only make 1 pass through the string.
Examples of input and output for this problem can be 
Input: tauhida parveen
Output: tauhida%20parveen
input: www.thinkful.com /tauh ida parv een
output: www.thinkful.com%20/tauh%20ida%20parv%20een
*/
function urlifyString(str) {
    let spaceCount = 0;
    let index = 0;
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newString += '%20'

        } else {
            newString += str[i];
        }

    }
    return newString;
}

/*
### 2. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers 
less than five from the array. 
Don't use array's built-in `.filter` method here; write the algorithm from scratch.
Input: [10,4,5,8,2,9];
Output: [10,5,8,9]
*/
function remove_lt_5(arr) {
    let ret = [];
    for (var i = 0; i < arr.length; ++i) {
        if (!(arr[i] < 5))
            ret.push(arr[i]);
    }
    return ret;
}

/*
### 3: Max sum in the array
You are given an array containing positive and negative integers. 
Write an algorithm which will find the largest sum in a continuous sequence.
Input: [4,6,-3,5,-2,1]
Output: 12
*/

let maxSubarray = function (arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        maxEndingHere = Math.max(0, maxEndingHere + item);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        //console.log(item, maxEndingHere, maxSoFar);
    }
    return maxSoFar;
};

/*
### 4. Merge Arrays
Imagine you have two arrays which have already been sorted. 
Write an algorithm to merge the two arrays into a single array, 
which should also be sorted. 
Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/
function merge_arrays(arr1, arr2) {
    let idx1 = 0, idx2 = 0;
    let ret = [];
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] <= arr2[idx2])
            ret.push(arr1[idx1++]);
        else
            ret.push(arr2[idx2++]);
    }
    // One array is now empty. Join the rest of the other array on.
    if (idx2 < arr2.length) {
        idx1 = idx2;
        arr1 = arr2;
    }
    while (idx1 < arr1.length)
        ret.push(arr1[idx1++]);
    return ret;
}

/*
### 5: Remove Characters
Write an algorithm that deletes given characters from a string. For example, given a 
string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are 
"aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
ot use Javascript's filter, split, or join methods.
Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/
function removeChar(str1, str2) {
    let tempArr = [], newStr = [], newStrMod = '';
    let index = 0, j = 0;

    for (let i = 0; i < str2.length; i++) {
        index = (Math.abs(str2[i].charCodeAt() - 'a'.charCodeAt()));
        if (!tempArr[index]) {
            tempArr[index] = 1;
        }
    }
    for (let i = 0; i < str1.length; i++) {
        index = (Math.abs(str1[i].charCodeAt() - 'a'.charCodeAt()));
        if (!tempArr[index]) {
            newStr[j++] = str1[i];
        }
    }
    for (let i = 0; i < newStr.length; i++) {
        newStrMod += newStr[i];
    }
    return newStrMod;
}

/*
### 6: Products
Given an array of numbers, write an algorithm to find out the products of every number, 
except the one at that index.
Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
*/
function products(arr) {
    let ret = [];
    for (let idx1 = 0; idx1 < arr.length; ++idx1) {
        let prod = 1;
        for (let idx2 = 0; idx2 < arr.length; ++idx2) {
            if (idx1 != idx2) {
                prod *= arr[idx2];
            }
        }
        ret.push(prod);
    }
    return ret;
}

/*
### 7: 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a zero should 
set the entire row and column to zero.
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
*/
function zeroRowsColumns(mat) {
    const zeroRows = [];
    const zeroCols = [];

    for (let i = 0; i < mat.length; i++) {
        let row = mat[i];
        for (let j = 0; j < row.length; j++) {
            const item = row[j];
            if (item === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    for (let i = 0; i < mat.length; i++) {
        let row = mat[i];
        for (let j = 0; j < row.length; j++) {
            if (zeroRows[i] || zeroCols[j]) {
                row[j] = 0;
            }
        }
    }
    return mat;
}

/*
### 8: String rotation
Given two strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
Input: amazon, azonma
Output: False
Input: amazon, azonam
Output: true
*/

function strRotation(string1, string2) {
    return (string2 + string2).indexOf(string1) != -1;

}

/*
*/

function main() {
    let urlifyStr = 'www.thinkful.com /tauh ida parv een';
    let arr = [10, 4, 5, 8, 2, 9];
    let maxSubarr = [4, 6, -3, 5, -2, 1];
    let mergeArr1 = [1, 3, 6, 8, 11];
    let mergeArr2 = [2, 3, 5, 8, 9, 10];
    let str1 = 'Battle of the Vowels: Hawaii vs. Grozny';
    let charToRemove = 'aeiou';
    let productsArr = [1, 3, 9, 4];
    let twoDarr = [[1, 0, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1]];
    let StringRot1 = 'amazon'; //amazon
    let stringRot2 = 'azonma'; //azonam - should be true

    //console.log('Drill #1: urlifyString');
    //console.log(urlifyString(urlifyStr));

    //console.log('Drill #2: Filtering array');
    //console.log(remove_lt_5(arr));

    //console.log('Drill #3: maxSubarray');
    //console.log(maxSubarray(maxSubarr));

    //console.log('Drill #4: Merge Arrays');
    //console.log(merge_arrays(mergeArr1,mergeArr2));

    //console.log('Drill #5: Remove Characters');
    //console.log(removeChar(str1, charToRemove));

    //console.log('Drill #6: Products');
    //console.log(products(productsArr));

    //console.log('Drill #7: 2D Array');
    //console.log(zeroRowsColumns(twoDarr));

    //console.log('Drill #8: String rotation');
    //console.log(strRotation(StringRot1,stringRot2));

}
main();