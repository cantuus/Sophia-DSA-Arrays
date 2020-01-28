//memory.js
//https://gist.github.com/tparveen/c78e560c996a745dae41c1f8f2650491

const mem = require('./memory');
const memory = new mem();

class Array {
    //constructor 
    //The array starts out with zero length, and a pointer to 
    //zero blocks of memory. 
    constructor() {
        //this.memory = new memoryClass();
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }
    //push a new element to the end of array
    /*
    - Resize so we have space for the new item
    - Add the value to the end (ptr + length)
    - Increase the length 
    */
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    //Allocate a new block which is larger
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    //retrieving
    //Use pointer arithmetic. Nth item is at (startPtr + n) e.g., arr[3]
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    //Decrease the length
    //Don't resize - the extra space becomes room for us to grow into
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    /*
    Resize if necessary
    Copy all values after the insertion point forward one
    Add the new value
    Increase the length
    e.g., arr.splice(1, 0, 32);
    */
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    /*
    Copy all values after the insertion point back one
    Decrease the length
    e.g, arr.splice(1, 1);
    */
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}

//Push and pop
/*
Using the Array class you just created above, add an item to the array. 
Use the following function
*/
function main() {
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    //add an item to the array
    arr.push(3);
    //* What is the length, capacity and memory address of your array?
    console.log(arr);
    //Array { length: 1, _capacity: 3, ptr: 0 }

    /*
    Add the following in the main function before printing the array
    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    */
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    //** What is the length, capacity and memory address of your array?
    console.log(arr);
    //Explain the result of your program after adding the new lines of code 
    //Array { length: 6, _capacity: 12, ptr: 3 }

    /*
    Add the following in the main function before printing the array
    arr.pop();
    arr.pop();
    arr.pop();
    */
    arr.pop();
    arr.pop();
    arr.pop();

    //What is the length, capacity and address of your array? Explain the result of your 
    //program after adding the new lines of code
    console.log(arr);

    //Print the first item in the array arr.
    console.log(arr.get(0));

}
main();

/*
Empty the array and add just one item arr.push("tauhida"); //use pop() is fine
Print this one item that you just added. What is the result? Can you explain your result?
 -  The array type is a float meaning it will only take numbers and not string
What is the purpose of the _resize() function in your Array class?
    Resize is an internal function and it is used to do a sensible resizing everything
    the array runs out of capacity
*/