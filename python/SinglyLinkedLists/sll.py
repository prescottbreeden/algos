import node

class SLL(object):
    def __init__(self):
        self.head = None
        self.runner = None

    def add_to_back(self, node):
        if self.head == None:
            self.head = node
        else:
            self.runner = self.head
            while(self.runner.next != None):
                self.runner = self.runner.next
            self.runner.next = node
        return self

    def print_me(self):
        self.runner = self.head
        while(self.runner != None):
            print(self.runner)
            self.runner = self.runner.next
        return self