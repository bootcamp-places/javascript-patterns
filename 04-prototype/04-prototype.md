### Prototype <!-- element style="display:none" -->

![[prototype-1.png | 400]]

Позволяет копировать объекты, не вдаваясь в подробности их реализации.

note:

In JavaScript Prototype pattern may be implemented via `Object.create` method 

--

#### Prototype: example #1

```js
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



