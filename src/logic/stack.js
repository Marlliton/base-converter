class Stack {
  constructor() {
    this.itens = [];
  }

  push(element) {
    this.itens.push(element);
  }
  pop() {
    return this.itens.pop();
  }
  peek() {
    return this.itens[this.itens.length - 1];
  }
  isEmpty() {
    return this.itens.length === 0;
  }
  clear() {
    this.itens = [];
  }
  size() {
    return this.itens.length;
  }
}

module.exports = Stack;
