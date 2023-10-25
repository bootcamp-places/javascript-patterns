const products = [
  {
    model: "m1",
    info: {
      name: "Apple",
      country: "USA",
      color: "silver"
    }
  },
  {
    model: "m2",
    info: {
      name: "Apple",
      country: "USA",
      color: "silver"
    }
  },
  {
    model: "m3",
    info: {
      name: "HP",
      country: "China",
      color: "black"
    }
  }
];

class Flyweight {
  constructor(sharedState = {}) {
    this.sharedState = sharedState;
  }
}

class ProductsStore {
  flyweights = {};
  products = [];

  addProduct (productData) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    // todo: add implementation
    const product = {
      model: productData.model,
      info: productFlyweight.sharedState
    };

    this.products.push(product);
  }

  getOrCreateFlyweight (info) {
    // todo: add implementation
    const key = Object.values(info).map(item => item.toLowerCase()).join('-');

    if (this.flyweights[key]) {
      return this.flyweights[key];
    }

    this.flyweights[key] = new Flyweight(info);

    return this.flyweights[key];
  }
}

const store = new ProductsStore();

for (const product of products) {
  store.addProduct(product);
}

console.error(store.products.length);
console.error(Object.keys(store.flyweights));
