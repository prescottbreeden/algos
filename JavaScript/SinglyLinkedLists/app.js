var SLL = require('./_SLL');
var node = require('./_Node');

bob = new SLL();

for(let i = 0; i < 10; i++) {
    bob.addToBack(new node(i))
}
console.log(bob);

bob.addToFront(new node(42))
console.log(bob);