### Visitor <!-- element style="display:none" -->

<split left="1" right="1">

![[visitor.png]](./imgs/visitor.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
::: 

</split>

Allows you to add new operations to a program without changing the classes of objects on which these operations can be performed.

note:

Дозволяє додавати до програми нові операції, не змінюючи класи об'єктів, над якими ці операції можуть виконуватися.

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

```js [| 12-20]
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

```js [|7-13]
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

back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Visitor]] <!-- element style="display:none" -->
