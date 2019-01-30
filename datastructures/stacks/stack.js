class Stack {
	constructor() {
		this.items = [];
	}

	push(item) {
		this.items.push(item);
		return this
	}

	pop() {
		if (this.items.length == 0)
			return "Underflow"
		return this.items.pop()
	}

	peek() {
		return this.items[this.items.length -1];
	}

	isEmpty() {
		return this.items.length == 0;
	}

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
