class NewsChannel {
  users = [];

  subscribe (user) {
    // todo: add logic here
    this.users.push(user);
  }

  notify (message = '') {
    // todo: add logic here

    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}

class User {
  messagesHistory = [];
  constructor(name) {
    this.name = name;
  }

  receiveMessage (message = '') {
    this.messagesHistory.push(message);
  }
}

// tests

const channel = new NewsChannel();
const john = new User('John');
const peter = new User("Peter")

channel.subscribe(john);
channel.subscribe(peter);

channel.notify("hello everyone");

console.log(john.messagesHistory.at(-1) === "hello everyone");
console.log(peter.messagesHistory.at(-1) === "hello everyone");
