// First in last out
class Stack {
	constructor() {
		this.items = [];
	}

	// push: add an element at the top of the stack
	push(item) {
		this.items.push(item);
		return this
	}

	// pop: remove an element from the stack
	// if called on empty stack it indicates "Underflow"
	pop() {
		// return top most element in the stack
		// and removes it from the stack
		// underflow if stack is empty
		if (this.items.length == 0)
			return "Underflow"
		return this.items.pop()
	}

	// peek: returns the top most elements in the stack
	// but doesn't delete them
	peek() {
		// return the top most element from the stack
		// do not delete!
		return this.items[this.items.length -1];
	}

	// isEmpty: returns true if the stack is empty
	isEmpty() {
		// return true if stack is empty
		return this.items.length == 0;
	}

	// printStack: returns a string in which all 
	// elements of a stack are concatenated
	printStack() {
		var str = "";
		for (let i = 0; i < this.items.length; i++)
			str += this.items[i] + " ";
		return str;
	}

	max_element() {
		let max = this.items[0]
		for(let i = 0; i < this.items.length; i++) {
			if(this.items[i] > max) {
				max = this.items[i];
			}
		}
		return max
	}
}


// creating object for stack
var stack = new Stack();

function test_stack(name, input, output) {
	let assert = require('assert');
	console.log("===================")
	console.log(`testing: ${name}, value: ${input}`)
	let test = assert(input == output);
	if (!test)
		console.log(`${name} passed`)
}

test_stack("isEmpty()", stack.isEmpty(), true);
stack.push(1)
test_stack("push()", stack.peek(), 1)
stack.pop()
test_stack("pop()", stack.isEmpty(), true)
test_stack("Underflow", stack.pop(), "Underflow")
stack.push(1).push(2).push(3).push(4).push(5)
test_stack("peek()", stack.peek(), 5)
test_stack("max_element()", stack.max_element(), 5)
