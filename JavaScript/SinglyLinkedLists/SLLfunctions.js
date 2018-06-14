const Node = require('./_Node');

module.exports = {

    zipSLists: (L1, L2) => {

        // create new linked list pointer
        var L3 = new Node(null, null);
        var prev = L3;
        
        // while both linked lists are not empty
        while (L1 !== null && L2 !== null) {
            if (L1.val <= L2.val) { 
                prev.next = L1;
                L1 = L1.next;
            } else {
                prev.next = L2;
                L2 = L2.next;
            }
            prev = prev.next;
        }
        
        // once we reach end of a linked list, append the other 
        // list because we know it is already sorted
        if (L1 === null) { prev.next = L2; }
        if (L2 === null) { prev.next = L1; }
        
        // return the sorted linked list
        return L3.next;


        // runner1 = SLL1.head;
        // runner2 = SLL2.head;
        // while(runner1.next != null && runner2.next != null) {
        //   if (runner1.next.val > runner2.val) {
        //     let tmp = runner1.next;
        //     runner1.next = runner2;
        //     runner2 = tmp;
        //   }
        //   runner1 = runner1.next;
        // } 
        // runner1.next = SLL2.head;
        // return SLL1;
      }
}