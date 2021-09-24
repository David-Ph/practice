class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  printList() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode) {
        lastNode = lastNode.next;
      }
    }
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
let list = new linkedList(node1);

node1.next = node2;
node2.next = node3;

let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(4);
let list2 = new linkedList(node5);

node5.next = node6;
node6.next = node7;

function twoNumbers(l1, l2) {
  let firstData = getNodeData(l1);
  let secondData = getNodeData(l2);

  firstData = reverseString(firstData);
  secondData = reverseString(secondData);

  firstData = parseInt(firstData);
  secondData = parseInt(secondData);

  let total = firstData + secondData;

  total = reverseString(total);

  const list = arrayIntoList(stringIntoArray(total));
  list.printList();
  return list;
}

function getNodeData(list) {
  let data = "";
  let lastNode = list.head;
  if (lastNode) {
    while (lastNode) {
      data += lastNode.data;
      lastNode = lastNode.next;
    }
  }
  return data;
}

function reverseString(string) {
  string = string.toString();
  let temp = "";
  for (let i = string.length - 1; i >= 0; i--) {
    temp += string[i];
  }
  return temp;
}

function stringIntoArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  return array;
}

function arrayIntoList(array) {
  let list, node, temp;
  for (let i = 0; i < array.length; i++) {
    node = new ListNode(array[i]);

    if (!list) {
      list = new linkedList(node);
    } else {
      let lastNode = list.getLast();
      lastNode.next = new ListNode(array[i]);
    }
  }
  return list;
}

console.log(twoNumbers(list, list2));
