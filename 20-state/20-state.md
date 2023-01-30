### State <!-- element style="display:none" -->

<split left="1" right="1">

![[state.png | 500]](./imgs/state.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
- Complexity: ⭐⭐⭐
::: 

</split>

Позволяет объектам менять поведение в зависимости от своего состояния

--

#### State: example #1

```js [|]
class TrafficLights {
  constructor() {
    this.state = "green";
  }

  on () {
    console.log(this.state);

    this.timerId = setInterval(() => {
      if (this.state === "green") {
        this.state = "yellow";
      } else if (this.state === "yellow") {
        this.state = "red";
      } else if (this.state === "red") {
        this.state = "green";
      }

      console.log(this.state);
    }, 3000);
  }

  off () {
    clearInterval(this.timerId);
  }
}
```

--

#### State: example #1

```js [|2,9,16| 3-5, 10-12, 17-19]
class GreenLight {
  color = "green";
  next () {
    return new YellowLight();
  }
}

class YellowLight {
  color = "yellow";
  next () {
    return new RedLight();
  }
}

class RedLight {
  color = "red";
  next () {
    return new GreenLight();
  }
}
```

--

#### State: example #1

```js [|3, 10]
class TrafficLights {  
  constructor() {  
    this.state = new GreenLight();  
  }  
  
  on () {  
    console.log(this.state.color);  
  
    this.timerId = setInterval(() => {  
      this.state = this.state.next();  
  
      console.log(this.state.color);  
    }, 3000);  
  }  
  
  off () {  
    clearInterval(this.timerId);  
  }  
}

const trafficLights = new TrafficLights();  
  
trafficLights.on();
```

back: [[📖 presentation#State]] <!-- element style="display:none" -->
