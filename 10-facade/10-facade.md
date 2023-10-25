### Facade <!-- element style="display:none" -->

<split left="1" right="1">

![[facade.png | 500]](./imgs/facade.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Structural
::: 

</split>

Provides a simple interface to a complex entity: a set of class methods, a library, a framework, etc.

note:

Надає простий інтерфейс до складної сутності: набору методів класу, бібліотеки, фреймворку тощо.

::: block <!-- element style="display: none;" -->

```mermaid
flowchart TB
  subgraph D[Facade method]
    A["method-1()"]
    B["method-2()"]
    C["method-n()"]
  end
```

:::

--

#### Facade: example #1
 
![[facade-1.png]](./imgs/facade-1.png)

```js [|2-8| 19]
class Component {
  async update () {
    const data = await this.loadData();
    const filteredData = this.filterData(data);
    const sortedData = this.sortData(filteredData);
    
    this.render(sortedData);
  }
  
  async loadData () {/* some implementation */}

  filterData () {/* some implementation */}

  sortData () {/* some implementation */}
}

const component = new Component();

component.update();
```

back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Facade]] <!-- element style="display:none" -->
