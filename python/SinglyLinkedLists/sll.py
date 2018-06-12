import node

class SLL(object):
    def __init__(self):
        self.head = None
        self.runner = None

    def add_to_front(self, node):
        if self.head == None:
            self.head = node
        else:
            temp = self.head
            self.head = node
            node.next = temp
        return self

    def add_to_back(self, node):
        if self.head == None:
            self.head = node
        else:
            self.runner = self.head
            while(self.runner.next != None):
                self.runner = self.runner.next
            self.runner.next = node
        return self

    def contains(self, value):
        self.runner = self.head
        contains = False
        while(self.runner != None):
            if self.runner.val == value:
                contains = True
            self.runner = self.runner.next
        return contains

    def print_me(self):
        print("###################")
        self.runner = self.head
        while(self.runner != None):
            print(self.runner)
            self.runner = self.runner.next
        return self

