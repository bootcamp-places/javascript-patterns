class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  }

  write () {
    return "write something to repo";
  }
}

class ProxyUser {
  constructor(user) {
    this.user = user;
  }

  write () {
    // your logic here

    // if (this.user.rights.includes('admin')) {
    //   return "user has write permissions";
    // }
    //
    // return "user does not have permission to write";
  }
}

// tests

const john = new ProxyUser(new User("John Doe", ["admin"]));
const peter = new ProxyUser(new User("Peter Parker", []));

john.write();
peter.write();

