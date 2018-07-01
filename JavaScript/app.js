const basic = require('./fundamentals/basic13');
const maths = require('./fundamentals/maths');
const stars = require('./fundamentals/starart');
const part2 = require('./fundamentals/part2');
const clock = require('./fundamentals/clockHandAngles');
const SLL = require('./SinglyLinkedLists/_SLL');
const node = require('./SinglyLinkedLists/_Node');
const Sort = require('./sorts/Sort');
const zip = require('./SinglyLinkedLists/SLLfunctions');


// let result;
// function createArray(arr, start, stop) {
//     for(let i = start; i <= stop; i++) {
//         arr.push(i);
//     }
// }
// var arr = new Array();
// createArray(arr, -10, 15);

list1 = new SLL();
list2 = new SLL();

for(let i = 10; i > 0; i--) {
    x = Math.floor(Math.random()*i)
    list1.addToBack(new node(x))
}


for(let i = 10; i > 0; i--) {
    x = Math.floor(Math.random()*i)
    list2.addToBack(new node(x))
}

list1.printMe();
list2.printMe();

