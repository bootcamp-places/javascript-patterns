# Factory Method

```mermaid
flowchart LR
  A[Component] -- factoryMethod --> B[Factory] -- new --> C[Object]
```

Example:

Classical example:

```js
class Creator {
  factoryMethod() {/* abastruct */}
  
  someOperation() {
    const product = this.factoryMethod();
    
    return `Creator: Run ${product.operation()}`;
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
```

Project example:

```js
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
