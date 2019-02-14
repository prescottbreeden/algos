using System;
using System.Collections.Generic;

namespace SinglyLinkedLists
{
    public class SLL
    {
        public Node head { get; set; }
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
                Node runner = this.head;
                while(runner.next != null)
                {
                    runner = runner.next;
                }
                runner.next = node;
            }
            return this;
        }

        public Node Contains(string memoryLocation)
        {
            Node runner = this.head;
            while(runner != null)
            {
                if(runner.memoryLocation == memoryLocation)
                {
                    return runner;
                }
                runner = runner.next;
            }
            throw new ArgumentNullException("node search", "Memory location is null");
        }
        public Node Get(string memoryLocation)
        {
            Node target = Contains(memoryLocation);
            Node runner = this.head;
            while(runner.next != null)
            {
                if(runner.next.memoryLocation == target.memoryLocation)
                {
                    // set target to the node with memorylocation
                    // target = this.runner.next;

                    // remove connection to target
                    runner.next = runner.next.next;
                }
                runner = runner.next;

            }
            return target;
        }
        public Node GetMax()
        {
            Node maxValue = this.head;
            Node scissors = this.head;
            Node runner = this.head;
            while(runner.next != null)
            {
                if(runner.next.val > maxValue.val)
                {
                    // set target to the node with higher value
                    maxValue = runner.next;
                    scissors = runner;
                }
                runner = runner.next;
            }
            // remove connection to target node
            scissors.next = runner.next.next;
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
            Node runner = this.head;
            while(runner.next.next != null)
            {
                runner = runner.next;
            }
            runner.next = null;
            return this;
        }
        
        public SLL MoveMinToFront()
        {
            Node runner = this.head;
            Node scissor = new Node();
            Node minValue = this.head;
            while(runner.next != null)
            {
                if(runner.next.val < minValue.val)
                {
                    minValue = runner.next;
                    scissor = runner;
                }
                runner = runner.next;
            }
            scissor.next = scissor.next.next;
            this.AddToFront(minValue);
            return this;
        }
        
        public int totalLength()
        {
            int counter = 0;
            Node runner = this.head;
            while(runner != null)
            {
                counter += 1;
                runner = runner.next;
            }
            return counter;
        }
        
        public void PrintSLL()
        {
            string debugMe = "SLL: ";
            Node runner = this.head;
            while(runner is bool value)
            {
                var node = runner.val.ToString();
                debugMe += $"{node}, ";
                runner = runner.next;
            }
            if(runner is null)
            {
                debugMe += "null";
            }
            System.Console.WriteLine(debugMe);
        }
        
        public int LastNode(Node node)
        {
            Node runner = node;
            while(runner.next != null)
            {
                runner = runner.next;
            }
            return runner.val;
        }



    }
}