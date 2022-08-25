# Decorator

```mermaid
flowchart LR
  A[Client] --> D

  subgraph D[Decorator]
    Component
  end
```

The decorator pattern lets you wrap the target object and enhance it by adding new features. As decorator implements the same interface as the target object, you can wrap as many decorators one inside another as you need.

Implementation example:

```js
class ListItem {
  constructor(title) {
    this.title = title;
  }

  render() {
    const container = document.createElement("div");
    const title = document.createElement("h4");
    title.append(this.title);
    container.append(title);

    return container;
  }
}
```
```js
class DismissableWrapper {
  constructor(wrapped, onDismiss) {
    this.wrapped = wrapped;
    this.onDismiss = onDismiss.bind(this);
    this.touchStart = -1;
  }

  handleTouchMove = (e) => {
    if (e.touches[0].clientX - this.touchStart <= -100) {
      this.onDismiss();
    }
  };

  handleTouchStart = (e) => {
    if (e.touches[0]) {
      this.touchStart = e.touches[0].clientX;
    }
  };

  render() {
    const wrapper = document.createElement("div");

    wrapper.addEventListener("touchstart", this.handleTouchStart);
    wrapper.addEventListener("touchmove", this.handleTouchMove);
    wrapper.append(this.wrapped.render());

    return wrapper;
  }
}
```
Usage example:
```js
const data = [{ title: "Hello" }, { title: "World" }];

const notificationsList = data.map(
  (item) =>
    new DismissableWrapper(new ListItem(item.title), () => {
      // handle action, e.g. with api call
      console.log("dismissed");
    })
);

```
