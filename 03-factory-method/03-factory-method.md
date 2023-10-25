### Factory Method <!-- element style="display:none" -->


<split left="1" right="1">

![[factory-method.png | 500]](./imgs/factory-method.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Creational
::: 

</split>

Defines a common interface for creating objects in a superclass, allowing subclasses to change the type of objects created.

note:

Визначає загальний інтерфейс для створення об'єктів у суперкласі, дозволяючи підкласам змінювати тип об'єктів, що створюються.

--

#### Factory method: example #1

```js
class Creator {
  factoryMethod() {/* abastruct */}

  someOperation() {
    const product = this.factoryMethod();

    return `Creator: Run ${product.operation()}`;
  }
}

class ConcreteProduct1 {
  operation() {
    return '{Result of the ConcreteProduct1}';
  }
}

class ConcreteProduct2 {
  operation() {
    return '{Result of the ConcreteProduct2}';
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}
```
--

#### Factory method: example #2

```js [|7-11|13]
class SuccessNotification {}
class ErrorNotification {}
class InfoNotification {}

class Component {
  factoryMethod (type = '') {
    const notificationTypes = {
      succes: SuccessNotification,
      error: ErrorNotification,
      info: InfoNotification
    };

    const notification = new notificationTypes[type];

    return notification;
  }
}
```

back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Factory Method]] <!-- element style="display:none" -->
