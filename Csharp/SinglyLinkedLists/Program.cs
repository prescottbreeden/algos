using System;

namespace SinglyLinkedLists
{
    class Program
    {
        static void Main(string[] args)
        {

            SLL bob = new SLL(100);
            
            // add to back
            Node E = new Node("<Memory Location 100>", 42);
            bob.AddToBack(E);

            Random Rand = new Random();
            int random;
            for(int i = 0; i < 5; i++){
                random = Rand.Next(0,99);
                bob.ReadContents($"<Memory Location {random}>");
            }
            System.Console.WriteLine(bob.totalLength());
            
            bob.AddToFront(bob.Get("<Memory Location 42>"));
            System.Console.WriteLine("Printing Head >>");
            bob.PrintHead();

            random = Rand.Next(0,99);
            bob.AddToFront(bob.Get($"<Memory Location {random}>"));
            System.Console.WriteLine("Printing Head >>");
            bob.PrintHead();

            bob.MoveMinToFront();
            System.Console.WriteLine("Printing Head >>");
            bob.PrintHead();

            bob.AddToFront(bob.GetMax());
            System.Console.WriteLine("Printing Head >>");
            bob.PrintHead();
        }
    }
}
