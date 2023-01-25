### Composite <!-- element style="display:none" -->

![[composite.png | 400]](./imgs/composite.png)

Позволяет сгруппировать множество объектов в древовидную структуру, 
а затем работать с ней так, как будто это единичный объект.

--

#### Composite: example #1

![[composite.png | 600]]

--

#### Composite: example #1

```js
const list = new Comment({  
  id: "comment-1",  
  content: "text content for comment-1",  
  children: [  
    new Comment({  
      id: "comment-1.1",  
      content: "text content for comment-1.1",  
    }),  
    new Comment({  
      id: "comment-1.2",  
      content: "text content for comment-1.2",  
      children: [  
        new Comment({  
          id: "comment-1.2.1",  
          content: "text content for comment-1.2.1",  
        })  
      ]  
    })  
  ]  
})
```

--

#### Composite: example #1

```js
class Comment {  
  constructor({  
    id = 0,  
    content = '',  
    children = []  
  } = {}) {  
    this.id = id;  
    this.content = content;  
    this.children = children;  
  }  
  
  getSize () {  
    let count = 1;  
  
    for (const child of this.children) {  
      count += child.getSize();  
    }  
  
    return count;  
  }  
}

console.error(list.getSize()); // 4
```

--

#### Composite: example #2

```js
class List {
  children = [];

 constructor (content = '', children = []) {
  this.content = content;
  this.children.push(...children);
 }

  getContentLength () {
    let counter = this.content.length;  
 
    for (const child of this.children) {  
      counter += child.getContentLength();  
    }  

    return counter;
  }
}

class Item {
  constructor (content = '') {
    this.content = content;
  }

  getContentLength () {
    return this.content.length;
  }
}

const list = new List('list #1.0', [
  new Item('item #1.1'),
  new Item('item #1.2'),
  new List('list #2.0', [
    new Item('item #2.1'),
    new Item('item #2.2'),
    new Item('item #2.3')
  ])
]);

list.getContentLength(); // 63
```

--

#### Composite: example #2

```js
class List {
  children = [];  
    
  constructor(content = '', children = []) {  
    this.content = content;  
    this.children.push(...children);  
  }

  getContent (buffer = []) {  
    buffer.push(this.content, []);  
    
    for (const child of this.children) {  
      child.getContent(buffer.at(-1));  
    }  
    
    return buffer;  
  }
}

class Item {  
  constructor(content = '') {  
    this.content = content;  
  }  
  
  getContent (buffer = []) {  
    buffer.push(this.content);  
  
    return buffer;  
  }
}

const list = new List('list #1.0', [
  new Item('item #1.1'),
  new Item('item #1.2'),
  new List('list #2.0', [
    new Item('item #2.1'),
    new Item('item #2.2'),
    new Item('item #2.3')
  ])
]);

const print = (content) => {
  const printContent = (arr = [], index = 0) => {  
    for (const item of arr) {  
      if (Array.isArray(item)) {  
        printContent(item, index + 1);  
      } else {  
        console.log(`${'*'.repeat(index)} ${item}`);  
      }  
    }  
  };  

  printContent(content, 0);
};

print(list.getContent());
```

back: [[📖 presentation#Composite]] <!-- element style="display:none" -->
