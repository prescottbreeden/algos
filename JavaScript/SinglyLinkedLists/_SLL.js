module.exports = class SLL {
    constructor(){
        this.head = null;
        this.runner = null;
    }

    addToFront(node) {
        let temp = this.head;
        this.head = node;
        node.next = temp;

        return this;
    }

    addToBack(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            this.runner = this.head;
            while(this.runner.next != null) {
                this.runner = this.runner.next
            }
            this.runner.next = node
        }

        return this;
    }

}