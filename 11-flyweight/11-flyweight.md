### Flyweight <!-- element style="display:none" -->

![[flyweight.png | 500]](./imgs/flyweight.png)

Позволяет экономит память, разделяя общее состояние объектов между собой,
вместо хранения одинаковых данных в каждом объекте.

note:

The flyweight pattern is useful when you're creating a huge number of objects, 
which could potentially drain all available RAM. It allows us to minimize the amount of consumed memory.

In JavaScript, we can easily solve this problem through
[prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
Nowadays, hardware has GBs of RAM, which makes the flyweight pattern less important.

--

#### Flyweight

![[flyweight-2.png | 600]](https://gameprogrammingpatterns.com/flyweight.html)

--

#### Flyweight

![[flyweight-3.png | 600]](https://gameprogrammingpatterns.com/flyweight.html)

back: [[📖 presentation#Flyweight]] <!-- element style="display:none" -->
