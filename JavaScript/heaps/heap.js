function MinIntHeap() {
  this.capacity = 10,
  this.size = 0,
  this.items = [];

  this.getLeftChildIdx = (parentIdx) => 2 * parentIdx + 1,
  this.getRightChildIdx = (parentIdx) => 2 * parentIdx + 2,
  this.getParentIdx = (childIdx) => (childIdx - 1)/2,

  this.hasLeftChild = (idx) => this.getLeftChildIdx(idx) < this.size,
  this.hasRightChild = (idx) => this.getRightChildIdx(idx) < size,
  this.hasParent = (idx) => this.getParentIdx(idx) >= 0,

  this.leftChild = (idx) => this.items[getLeftChildIdx(idx)],
  this.rightChild = (idx) => this.items[getRightChildIdx(idx)],
  this.parent = (idx) => this.items[getParentIdx(idx)],

  this.ensureExtraCapacity = () => {
    if(this.size === this.capacity) {
      this.capacity *= 2;
      console.log('boosted capacity');
    }
  },

  this.addItem = (val) => {
    this.ensureExtraCapacity();
    this.size++;
    this.items.push(val);
    console.log(this.items);
  },

  this.peek = () => {
    if(size === 0) throw 'Illegal State Exception';
    return this.items[0];
  },

  this.sort = () => console.log('omg im sorting')
}

MinIntHeap.prototype.swap = (idxOne, idxTwo) => {
  const temp = this.items[idxOne];
  this.items[idxOne] = this.items[idxTwo];
  this.items[idxTwo] = temp;

}

const heap = new MinIntHeap();
console.log(heap.items);
heap.addItem(1);
heap.addItem(2);
heap.addItem(3);
heap.addItem(4);
heap.addItem(5);
heap.addItem(6);
heap.addItem(7);
heap.addItem(8);
heap.addItem(9);
heap.addItem(10);
heap.addItem(11);
