### Visitor <!-- element style="display:none" -->

![[visitor-1.png]](./imgs/visitor.png)

Позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться.

--

#### Visitor: Composite pattern improvement

```js [|1,5,9,13,22]
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
});  
  
console.error(list.getSize()); // 4
```

--

#### Visitor: Composite pattern improvement

```js
class Comment {  
  constructor({  
    id = '',  
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
```

--

#### Visitor: Composite pattern improvement. Solution part #1

```js
const list = new Comment({ 
  // other content and comments here
});

list.accept(Visitor);  
  
console.error(list.getSize());
```

--

#### Visitor: Composite pattern improvement. Solution part #2

```js
class Visitor {  
  constructor(compositeItem) {  
    this.compositeItem = compositeItem;  
    this.init();  
  }  
  
  init () {  
    this.addGetSize();  
  
    for (const child of this.compositeItem.children) {  
      child.accept(Visitor);  
    }  
  }  
  
  addGetSize () {  
    let count = 0;  
  
    this.compositeItem.getSize = () => {  
      count += 1;  
  
      for (const child of this.compositeItem.children) {  
        count += child.getSize();  
      }  
  
      return count;  
    };  
  }  
}
```

--

#### Visitor: Composite pattern improvement. Solution part #3

```js [|12-14]
class Comment {
  constructor({
    id = '',
    content = '',
    children = []
  } = {}) {
    this.id = id;
    this.content = content;
    this.children = children;
  }

  accept (Visitor) {
    new Visitor(this);
  }
}
```

back: [[📖 presentation#Visitor]] <!-- element style="display:none" -->
