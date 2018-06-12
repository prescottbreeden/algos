from sll import SLL
from node import Node

bob = SLL()

def BuildMe(count):
    for i in range(count):
        bob.add_to_back(Node(i))

BuildMe(10)
bob.print_me()

