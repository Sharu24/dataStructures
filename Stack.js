class Stack {
    constructor(){
        //Initializing Empty Stack
        this.items = [];
    }
    //push new element into Stack
    push(value){
        this.items.push(value);
    }
    //pop from stack and return the popped value
    pop(){
        return (this.items.length === 0) ? "Stack UnderFlow" : this.items.pop();
    }
}
//Create a Stack Object (Instantiation)
const stack = new Stack();
console.log(stack);
stack.push(22);
stack.push(33);
stack.push(44);
stack.push(55);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);