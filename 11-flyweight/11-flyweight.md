### Flyweight <!-- element style="display:none" -->

<split left="1" right="1">

::: block
![[flyweight-1.png | 500]](./imgs/flyweight.png)
![[flyweight.png | 500]](./imgs/flyweight.png)
:::

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Structural
::: 

</split>

Allows you to save memory by sharing the general state of objects among themselves, instead of storing the same data in each object.

note:

Дозволяє заощаджувати пам'ять, поділяючи загальний стан об'єктів між собою, замість зберігання однакових даних у кожному об'єкті.

The flyweight pattern is useful when you're creating a huge number of objects, 
which could potentially drain all available RAM. It allows us to minimize the amount of consumed memory.

In JavaScript, we can easily solve this problem through
[prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
Nowadays, hardware has GBs of RAM, which makes the flyweight pattern less important.

--

#### Flyweight: example #1

```js [| 5-8, 13-16, 21-24, 29-32, 37-40]
const comments = [
  {
    id: "comment-1",
    content: "text content for comment-1",
    author: {
      id: 1,
      name: "John Doe"
    },
    children: [
      {
        id: "comment-1.1",
        content: "text content for comment-1.1",
        author: {
          id: 2,
          name: "Peter Jackson"
        }
      },
      {
        id: "comment-1.2",
        content: "text content for comment-1.2",
        author: {
          id: 3,
          name: "Marry Jane"
        },
        children: [
          {
            id: "comment-1.2.1",
            content: "text content for comment-1.2.1",
            author: {
              id: 2,
              name: "Peter Jackson"
            }
          },
          {
            id: "comment-1.2.2",
            content: "text content for comment-1.2.2",
            author: {
              id: 1,
              name: "John Doe"
            }
          }
        ]
      }
    ]
  }
];
```

--

#### Flyweight: example #1

```js [|5,11,17| 23-36]
const normalizedComments = [
  {
    id: "comment-1",
    content: "text content for comment-1",
    authorId: 1,
    childrenIds: ["comment-1.1", "comment-1.2"]
  },
  {
    id: "comment-1.1",
    content: "text content for comment-1.1",
    authorId: 2,
    childrenIds: []
  },
  {
    id: "comment-1.2",
    content: "text content for comment-1.2",
    authorId: 3,
    childrenIds: ["comment-1.2.1", "comment-1.2.2"]
  }
  // ...
];

const authors = [
  {
    id: 1,
    name: "John Doe"
  },
  {
    id: 2,
    name: "Peter Jackson"
  },
  {
    id: 3,
    name: "Marry Jane"
  }
];
```

--

#### Flyweight: example #1

```js [|1-6,17|]
class Author {  
  constructor({id = 0, name = ''} = {}) {  
    this.id = id;  
    this.name = name;  
  }  
}  
  
class Comment {  
  constructor({  
    id = 0,  
    content = '',  
    author = {},  
    children = []  
  } = {}) {  
    this.id = id;  
    this.content = content;  
    this.author = author;  
    this.children = children;  
  }  
}
```

--

#### Flyweight: example #1

```js [|4, 9, 14, 19, 24]
const list = new Comment({  
  id: "comment-1",  
  content: "text content for comment-1",  
  author: createAuthor({ id: 1, name: "John Doe" }),  
  children: [  
    new Comment({  
      id: "comment-1.1",  
      content: "text content for comment-1.1",  
      author: createAuthor({ id: 2, name: "Peter Jackson"})  
    }),  
    new Comment({  
      id: "comment-1.2",  
      content: "text content for comment-1.2",  
      author: createAuthor({ id: 3, name: "Marry Jane"}),  
      children: [  
        new Comment({  
          id: "comment-1.2.1",  
          content: "text content for comment-1.2.1",  
          author: createAuthor({ id: 2, name: "Peter Jackson"}),  
        }),  
        new Comment({  
          id: "comment-1.2.2",  
          content: "text content for comment-1.2.2",  
          author: createAuthor({ id: 1, name: "John Doe" }),  
        })  
      ]  
    })  
  ]  
});
```

--

#### Flyweight: example #1

```js [| 4-6| 8| 13]
const authorsList = {};  
  
const createAuthor = (authorProps = {}) => {  
  if (authorsList[authorProps.id]) {  
    return authorsList[authorProps.id];  
  }  
  
  authorsList[authorProps.id] = new Author(authorProps);  
  
  return authorsList[authorProps.id];  
};

console.error(Object.keys(authorsList).length); // 3
```

back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Flyweight]] <!-- element style="display:none" -->
