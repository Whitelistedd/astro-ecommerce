import { action } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

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

export const shoppingCart = persistentAtom<Product[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addProduct = action(
  shoppingCart,
  "addProduct",
  (store, product) => {
    const inCart = store.get().find((item) => item.id === product.id);
    if (inCart) {
      console.log(inCart);
      const currentProductIndex = store
        .get()
        .findIndex((item) => item.id === product.id);
      let allProducts = store.get();
      allProducts[currentProductIndex].quantity += product.quantity;
      store.set(allProducts);
    } else {
      store.set([...store.get(), product]);
    }
    return store.get();
  }
);

export const addQuantity = action(shoppingCart, "increase", (store, id) => {
  const inCart = store.get().find((item) => item.id === id);
  if (inCart) {
    const currentProduct = store.get().findIndex((item) => item.id === id);
    let allProducts = store.get();
    allProducts[currentProduct].quantity += 1;
    store.set(allProducts);
  } else {
    return;
  }
  return store.get();
});

export const removeQuantity = action(shoppingCart, "decrease", (store, id) => {
  const inCart = store.get().find((item) => item.id === id);
  if (inCart) {
    const currentProduct = store.get().findIndex((item) => item.id === id);
    let allProducts = store.get();
    if (allProducts[currentProduct].quantity - 1 !== 0) {
      allProducts[currentProduct].quantity -= 1;
      store.set(allProducts);
    }
  } else {
    return;
  }
  return store.get();
});
