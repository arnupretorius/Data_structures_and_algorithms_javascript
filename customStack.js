/* custom stack */

var Stack = function() {
    this.count = 0;
    this.storage = {};

    // add a value onto the end of the stack
    this.push  = function(value) {
        this.storage[this.count] = value;
        this.count++; 
    }

    // removes and returns the value at the end of the stack
    this.pop = function(){
        if (this.count == 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // give the size of the stack
    this.size = function(){
        return this.count;
    }

    // return the top item
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

// Show usage of the custom stack
var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());