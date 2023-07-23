const linkedList = () => {
  list = { head: { value: null, nextNode: null } };

  return {
    append(v) {
      if (list.head.value == null) {
        list.head.value = v.value;
        return;
      }
      checkNode = (node) => {
        if (node.nextNode == null) {
          return node;
        } else return checkNode(node.nextNode);
      };
      checkNode(list.head).nextNode = v;
    },
    prepend(v) {
      const headInfo = { ...list.head };
      list.head.value = v.value;
      list.head.nextNode = headInfo;
      return list.head;
    },
    size() {
      const countNodes = (node = list.head) => {
        if (node.nextNode == null) {
          return 1;
        } else return 1 + countNodes(node.nextNode);
      };
      return countNodes();
    },
    head() {
      return list.head;
    },
    tail() {
      checkNode = (node) => {
        if (node.nextNode == null) {
          return node;
        } else return checkNode(node.nextNode);
      };
      return checkNode(list.head);
    },
    at(index) {
      checkNode = (node, i = 0) => {
        if (i == index) {
          return node;
        } else if (node.nextNode == null) {
          return "Error: INVALID INDEX!!";
        } else return checkNode(node.nextNode, i + 1);
      };
      return checkNode(list.head);
    },
    pop() {
      checkNode = (node, i = 0) => {
        if (i == this.size() - 2) {
          delete node.nextNode;
          node.nextNode = null;
          return;
        } else checkNode(node.nextNode, i + 1);
      };
      checkNode(list.head);
    },
    contains(v) {
      checkNode = (node) => {
        if (node.value.toLocaleLowerCase() === v.toLocaleLowerCase()) {
          return true;
        } else if (node.nextNode == null) {
          return false;
        } else return checkNode(node.nextNode);
      };
      return checkNode(list.head);
    },
    find(v) {
      checkNode = (node, i = 0) => {
        if (node.value.toLocaleLowerCase() === v.toLocaleLowerCase()) {
          return i;
        } else if (node.nextNode == null) {
          return null;
        } else return checkNode(node.nextNode, i + 1);
      };
      return checkNode(list.head);
    },
    toString() {
      checkNode = (node) => {
        if (node.nextNode == null) {
          return ` (${node.value}) -> null`;
        } else return ` (${node.value}) ->` + checkNode(node.nextNode);
      };
      return checkNode(list.head);
    },
    insertAt(v, index) {
      checkNode = (node, i = 0) => {
        if (index === i) {
          let tempInfo = { ...node };
          node.value = v;
          node.nextNode = tempInfo;
          return node;
        } else if (node.nextNode == null) {
            node.nextNode = {value: v, nextNode: null}
            return
        } else return checkNode(node.nextNode, i + 1);
      };
      return checkNode(list.head);
    },
    removeAt(index) {
      checkNode = (node, i = 0) => {
        if (index === 0) {
          node.value = node.nextNode.value;
          node.nextNode = node.nextNode.nextNode;
          return;
        } else if (index - 1 === i) {
          let tempInfo = { ...node.nextNode };
          delete node.nextNode;
          node.nextNode = tempInfo.nextNode;
          return;
        } else if (node.nextNode == null) {
          return "Error: INVALID INDEX!!";
        } else return checkNode(node.nextNode, i + 1);
      };
      return checkNode(list.head);
    },
  };
};

const node = (value = null, nextNode = null) => {
  value = value;
  return {
    value,
    nextNode,
  };
};
