let stack = [];

function push(stack, item) {
  return [...stack, item];
}

function pop(stack) {
  if (stack.length == 0) {
    return "Underflow";
  }
  const val = stack[stack.length-1];
  stack.length = stack.length-1;
  return val;
}

function peek(stack) {
  return stack[stack.length-1];
}

function isEmpty(stack) {
  return stack.length == 0;
}

function printStack(stack) {
  let str = "";
  for (let i = 0; i < stack.length; i++) {
    str += stack[i] + " ";
  }
  return str;
}


stack = push(stack, 1);
stack = push(stack, 2);
stack = push(stack, 3);
console.log(printStack(stack));
console.log(isEmpty(stack));
console.log(peek(stack));
let last = pop(stack);
console.log(peek(stack));
