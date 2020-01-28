const Memory = require('./memory');

let mem = new Memory;

class Array {

  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = mem.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = mem.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    mem.copy(this.ptr, oldPtr, this.length);
    mem.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return mem.get(this.ptr + index);
  }

  pop() {
    // eslint-disable-next-line eqeqeq 
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = mem.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    mem.set(this.ptr + index, value); this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    mem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}

Array.SIZE_RATIO = 3;

module.exports = Array;

function main() {
    Array.SIZE_RATIO = 3;

    let arr = new Array();

    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    arr.pop();
    arr.pop();
    arr.pop();

    console.log('first item in the array' + arr[0]);

    //[3, 5, 15, 19, 45, 10]
    console.log(arr);
}

main()

//the length of the the array would be 3
//the capacity of the array is 6
//the memory address of the array is 1, 2, 3, 4, 5, 6

//the length of the array is 6
//the capacity of the array is 12


//the length went down to 3
//the capacity is STILL 12 because it doesn't resize. It makes room
//for us to grow into

