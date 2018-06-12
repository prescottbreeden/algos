namespace SinglyLinkedLists
{
    public class Node
    {
        public string memoryLocation { get; set; }
        public int val { get; set; }
        public Node next { get; set; }
        public Node()
        {
            
        }
        public Node(string memoryLocation, int val)
        {
            this.memoryLocation = memoryLocation;
            this.val = val;
            this.next = null;
        }

        public override string ToString()
        {
            return "Node Memory Location: " + memoryLocation + " - Value: " + val;
        }  
    }

}
