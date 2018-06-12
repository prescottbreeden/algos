using System;
using System.Collections.Generic;

namespace SinglyLinkedLists
{
    public class SLL
    {
        public string name { get; set; }
        public Node head { get; set; }
        public Node runner { get; set; }
        public SLL(Node node)
        {
            this.head = node;
        }
        public SLL(int numberOfNodes)
        {
            for(int i = 0; i < numberOfNodes; i++)
            {
                Node node = new Node($"<Memory Location {i}>", i);
                this.AddToBack(node);
            }
        }
        public SLL AddToFront(Node node)
        {
            var temp = this.head;
            this.head = node;
            this.head.next = temp;
            return this;
        }
        public SLL AddToBack(Node node)
        {
            if(this.head == null)
            {
                this.head = node;
            }
            else
            {
                this.runner = this.head;
                while(this.runner.next != null)
                {
                    this.runner = this.runner.next;
                }
                this.runner.next = node;
            }
            return this;
        }

        public Node Contains(string memoryLocation)
        {
            this.runner = this.head;
            while(this.runner != null)
            {
                if(this.runner.memoryLocation == memoryLocation)
                {
                    return this.runner;
                }
                this.runner = this.runner.next;
            }
            throw new ArgumentNullException("node search", "Memory location is null");
        }
        public Node Get(string memoryLocation)
        {
            Node target = Contains(memoryLocation);
            this.runner = this.head;
            while(this.runner.next != null)
            {
                if(this.runner.next.memoryLocation == target.memoryLocation)
                {
                    // set target to the node with memorylocation
                    // target = this.runner.next;

                    // remove connection to target
                    this.runner.next = this.runner.next.next;
                }
                this.runner = this.runner.next;

            }
            return target;
        }
        public Node GetMax()
        {
            Node maxValue = this.head;
            Node scissors = this.head;
            this.runner = this.head;
            while(this.runner.next != null)
            {
                if(this.runner.next.val > maxValue.val)
                {
                    // set target to the node with higher value
                    maxValue = this.runner.next;
                    scissors = this.runner;
                }
                this.runner = this.runner.next;
            }
            // remove connection to target node
            scissors.next = this.runner.next.next;
            return maxValue;
        }
        public void PrintHead()
        {
            System.Console.WriteLine(this.head);
        }
        public void ReadContents(string memoryLocation)
        {
            Node target = Contains(memoryLocation);
            var contents = target.ToString();
            System.Console.WriteLine(contents);
        }
        public SLL RemoveFront()
        {
            if(this.head == null)
            {
                return null;
            }
            this.head = this.head.next;
            return this;
        }
        public SLL RemoveBack()
        {
            this.runner = this.head;
            while(this.runner.next.next != null)
            {
                this.runner = this.runner.next;
            }
            this.runner.next = null;
            return this;
        }
        public SLL MoveMinToFront()
        {
            this.runner = this.head;
            Node scissor = new Node();
            Node minValue = this.head;
            while(this.runner.next != null)
            {
                if(this.runner.next.val < minValue.val)
                {
                    minValue = this.runner.next;
                    scissor = this.runner;
                }
                this.runner = this.runner.next;
            }
            scissor.next = scissor.next.next;
            this.AddToFront(minValue);
            return this;
        }
        public int totalLength()
        {
            int counter = 0;
            this.runner = this.head;
            while(this.runner != null)
            {
                counter += 1;
                this.runner = this.runner.next;
            }
            return counter;
        }
        public void PrintSLL()
        {
            string debugMe = "SLL: ";
            this.runner = this.head;
            while(this.runner != null)
            {
                var node = this.runner.val.ToString();
                debugMe += $"{node}, ";
                this.runner = this.runner.next;
            }
            if(this.runner == null)
            {
                debugMe += "null";
            }
            System.Console.WriteLine(debugMe);
        }
        public int LastNode(Node node)
        {
            this.runner = node;
            while(this.runner.next != null)
            {
                this.runner = this.runner.next;
            }
            return this.runner.val;
        }



    }
}