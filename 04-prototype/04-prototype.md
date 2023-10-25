### Prototype <!-- element style="display:none" -->

<split left="1" right="1">

![[prototype-1.png | 500]](./imgs/prototype.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Creational
::: 

</split>

Allows you to copy objects without going into the details of their implementation.

note:

Дозволяє копіювати об'єкти, не вдаючись у подробиці їх реалізації.

In JavaScript Prototype pattern may be implemented via `Object.create` method 

--

#### Prototype: example #1

```js [|10-15 | 18-19]
class Card {  
  constructor({  
    title = '',  
    description = '',  
  } = {}) {  
    this.title = title;  
    this.description = description;  
  }  
  
  clone () {  
    return new Card({  
      title: this.title,  
      description: this.description,  
    });  
  }  
}  
  
const card1 = new Card({ title: 'first card', description: 'some description'});  
const card2 = card1.clone();
```

