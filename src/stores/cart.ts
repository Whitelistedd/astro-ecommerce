import { action, actionFor } from "nanostores";
import { persistentAtom, persistentMap } from "@nanostores/persistent";

type Product = {
  newProduct: boolean;
  name: string;
  shortName: string;
  desc: string;
  price: number;
  id: number;
  image: string;
  features: string[];
  extraImages: string[];
  quantity: number;
  inside: {
    quantity: number;
    name: string;
  }[];
};

type cart = {
  products: Product[];
  total: number;
  addedItem: boolean;
};

export const shoppingCart = persistentMap<cart>(
  "cart",
  {
    products: [],
    total: 0,
    addedItem: false,
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const addProduct = action(
  shoppingCart,
  "addProduct",
  (store, product) => {
    const inCart = store.get().products.find((item) => item.id === product.id);
    if (inCart) {
      console.log(inCart);
      const currentProductIndex = store
        .get()
        .products.findIndex((item) => item.id === product.id);
      let allProducts = store.get().products;
      allProducts[currentProductIndex].quantity += product.quantity;
      store.setKey(
        "total",
        store.get().total + product.price * product.quantity
      );
      store.setKey("products", allProducts);
    } else {
      store.setKey("addedItem", true);
      store.setKey(
        "total",
        store.get().total + product.price * product.quantity
      );
      store.setKey("products", [...store.get().products, product]);
    }
    return store.get();
  }
);

export const addQuantity = action(shoppingCart, "increase", (store, id) => {
  const inCart = store.get().products.find((item) => item.id === id);
  if (inCart) {
    const currentProduct = store
      .get()
      .products.findIndex((item) => item.id === id);
    let allProducts = store.get().products;
    allProducts[currentProduct].quantity += 1;
    store.setKey("products", allProducts);
    console.log(store.get().total + allProducts[currentProduct].price);
    store.setKey(
      "total",
      store.get().total + allProducts[currentProduct].price
    );
  } else {
    return;
  }
  return store.get();
});

export const removeQuantity = action(shoppingCart, "decrease", (store, id) => {
  const inCart = store.get().products.find((item) => item.id === id);
  if (inCart) {
    const currentProduct = store
      .get()
      .products.findIndex((item) => item.id === id);
    let allProducts = store.get().products;
    if (allProducts[currentProduct].quantity - 1 !== 0) {
      allProducts[currentProduct].quantity -= 1;
      store.setKey("products", allProducts);
      store.setKey(
        "total",
        store.get().total - allProducts[currentProduct].price
      );
    } else if (allProducts[currentProduct].quantity - 1 === 0) {
      store.setKey(
        "products",
        shoppingCart.get().products.filter((item) => item.id !== id)
      );
      store.setKey(
        "total",
        store.get().total - allProducts[currentProduct].price
      );
    }
  } else {
    return;
  }
  return store.get();
});
