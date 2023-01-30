---
theme: serif
highlightTheme: monokai
published: true
margin: 0
tags: ["Gof", "patterns"]
width: 1440
height: 900
---

<style>

.reveal pre code {
  max-height: 80vh;
}

.app-resources-block {
  font-size: 1.5rem;
}

</style>

## GoF Patterns

![[gof-patterns.png | 800]]

note:
- Design patterns are common architectural approaches.
- Popularized by the Gang of Four book 1994 (Smalltalk and C++)
- Universally relevant

---

## Singleton

![[05-singleton]]

--

### Singleton: practice

Todo: add practice

--

### Singleton: resources:


::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/index.js#L9
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification-manager/index.js#L8
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/router/index.js#L16
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/index.js#L7
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/sync-storage.js#L8
:::

---

## Factory Method

![[03-factory-method]]

--

### Factory Method: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification-manager/index.js#L30
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/sync-storage.js#L17
:::

---

## Abstract Factory

![[01-abstract-factory]]

--

### Abstract Factory: resources


::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification/index.js#L3
::: 

---

## Builder

![[02-builder]]

--

### Builder: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/api/index.js#L3
:::

---

## Prototype

![[04-prototype]]

---

## Adapter

![[06-adapter]]

--

### Adapter: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/local-storages.service.js#L1
:::

---

## Bridge

![[07-bridge]]

---

## Composite

![[08-composite]]

---

## Decorator

![[09-decorator]]

--

### Decorator: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/cart/index.js#L87
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/search/debounce.js#L1
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/connect.js#L1
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/connect.js#L3
:::

---

## Facade

![[10-facade]]

--

### Facade: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/infinity-list/index.js#L43
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/main/index.js#L138
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/cart/index.js#L19
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/wishlist/index.js#L33
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/wishlist/index.js#L101
:::

---

## Flyweight

![[11-flyweight]]

---

## Proxy

![[12-proxy]]

--

### Proxy: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/request/proxy.js#L1
:::

---

### Chain of Responsibility

![[13-chain-of-responsibility]]

---

### Command

![[14-command]]

---

### Iterator

![[16-iterator]]

---

### Mediator

![[17-mediator]]

--

#### Mediator: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/index.js#L1
:::

---

### Memento

---

### Observer

![[19-observer]]

--

#### Observer: resources

::: block <!-- element class="app-resources-block" -->
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/index.js#L1
:::

---

### State

![[20-state]]

---

### Strategy

![[21-strategy]]

---

### Template Method

![[22-template-method]]

---

### Visitor

![[23-visitor]]

---

## Patterns comparison

- Observer vs Mediator
- Factory method vs Abstract factory
- Strategy vs Bridge
- Composite vs Iterator
