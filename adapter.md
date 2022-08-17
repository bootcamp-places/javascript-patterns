# Adapter

![This is an image](/assets/adapter.jpg)

```mermaid
flowchart LR
  A[Client] -- "get(a)" --> B[Adapter]
  B -- "getLibMethod(a)" --> C[Library]
```

For example, we are working on push notifications feature for Android and IOS. And there are two different library classes that provides required functionality: one is developed for Android, and the another one for IOS.
To make the work with them easier we can add an Adapter to each of these classes;

---
## First example
```js
// External package class example

class PushNotificationsIOS {
  registerDevice() {
    return Promise.resolve("123qwe");
  }

  onForegroundNotification(handler) {
    this.foregroundListener = handler;
  }

  onBackgroundNotification(handler) {
    this.backgroundListener = handler;
  }

  /*
    rest of the implementation with 
    triggering notification listeners
  */
}

// External package class example
class FirebaseNotifications {
  getDeviceToken() {
    return "qwe123";
  }

  onMessage(handler) {
    this.messageListener = handler;
  }

  /*
    rest of the implementation with 
    triggering notification listener
  */
}
```
Adapters:
```js
class IOSNotificationsAdapter {
  constructor() {
    this.service = new PushNotificationsIOS();
  }

  getDeviceToken() {
    return this.service.registerDevice();
  }

  onNotificatonReceived(handler) {
    this.service.onForegroundNotification((data) => {
      handler(data, "foreground");
    });

    this.service.onBackgroundNotification((data) => {
      handler(data, "background");
    });
  }
}

class FirebaseNotificationsAdapter {
  constructor() {
    this.service = new FirebaseNotifications();
  }

  getDeviceToken() {
    return Promise.resolve(this.service.getDeviceToken());
  }

  onNotificatonReceived(handler) {
    this.service.onMessage(handler);
  }
}
```
Usage example
```js
import {isIOS} from 'somewhere';

class Application {
  constructor() {
    this.notificationService = isIOS
      ? new IOSNotificationsAdapter()
      : new FirebaseNotificationsAdapter();
  }

  async subscribeToNotifications() {
    const token = await this.notificationService.getDeviceToken();
    /* do something with token, e.g. send it to backend */
    
    this.notificationService.onNotificatonReceived((data, type) => {
      if (type === 'foreground') {
        // show custom notification
      } else if (type === 'background') {
        // show system notification
      }
    })
  }
}
```
---
## Second example
Services that we can use to get shipping price depending on chosen shipping provider:
```js
// External package class
class FedexShipping {
  calc({ from, to, weight, urgent }) {
    // ... some business logic
    return {
      price: 370,
      daysForDelivery: 3
    };
  }
}

// External package class
class AmazonShipping {
  calcShipping(from, to, weight) {
    // ... some business logic
    return {
      total: 400,
      days: 2
    };
  }
}

class CourierShipping {
  getShippingInfo(from, to, weight) {
    // ... some business logic

    return {
      price: 150,
      daysForDelivery: 10
    };
  }
}
```

And to simplify the usage of these class it would be good to add an adapter for each of them, to use the services via unified interface:

```js
class FedexShippingAdapter {
  constructor() {
    this.service = new FedexShipping();
  }

  getShippingInfo({ from, to, weight, urgent }) {
    const info = this.service.calc({
      from, to, weight, urgent
    });

    return {
      price: info.days,
      days: info.daysForDelivery,
    };
  }
}

class AmazonShippingAdapter {
  constructor() {
    this.service = new FedexShipping();
  }

  getShippingInfo({ from, to, weight, urgent }) {
    const info = this.service.getShippingInfo(from, to, weight);

    return {
      price: info.total,
      days: info.days,
    };
  }
}

class CourierShippingAdapter {
  constructor() {
    this.service = new FedexShipping();
  }

  getShippingInfo({ from, to, weight, urgent }) {
    const info = this.service.getShippingInfo(from, to);

    return {
      price: info.price,
      days: info.daysForDelivery,
    };
  }
}
```
Usage example
```js
const dropdownValue = 'fedex';
let shippingService = null;

if (value === 'fedex') {
  shippingService = new FedexShippingAdapter();
} else if (value === 'amazon') {
  shippingService = new AmazonShippingAdapter();
} else {
  shippingService = new CourierShippingAdapter();
}

console.log(shippingService.getShippingInfo({
  from: 'address1',
  to: 'address2',
  weight: 3,
  urgent: false,
}))

```