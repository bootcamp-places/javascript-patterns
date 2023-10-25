### Bridge <!-- element style="display:none" -->

<split left="1" right="1">

![[bridge-1.png | 500 ]](./imgs/bridge.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Structural
::: 

</split>

Separates one or more classes into two separate hierarchies —abstraction and implementation — allowing them to be modified independently of each other.

note: 

connection two components via abstraction

Поділяє один або кілька класів на дві окремі ієрархії - абстракцію і реалізацію, дозволяючи змінювати їх незалежно один від одного.

--

#### Bridge: example #1

```js
class ColorsPallet {  
  constructor (name = '') {  
    this.name = name;  
  }  
}  
  
class ErrorColorPallet extends ColorsPallet {  
  constructor () {  
    super('error-colors-pallet');  
    this.color = 'red';  
  }  
}  
  
class SuccessColorPallet extends ColorsPallet {  
  constructor () {  
    super('success-colors-pallet');  
    this.color = 'green';  
  }  
}
```

--

#### Bridge: example #1

```js
class Notification {  
  constructor (name = '', colorsPallet) {  
    this.name = name;  
    this.colorsPallet = colorsPallet;  
  }  
  
  toString () {  
    return `This is ${this.name} notification with ${this.colorsPallet.color} colors pallet`;  
  }  
}

const successNotification = new Notification('success', new SuccessColorPallet());  
const errorNotification = new Notification('error', new ErrorColorPallet());
```


back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Bridge]] <!-- element style="display:none" -->
