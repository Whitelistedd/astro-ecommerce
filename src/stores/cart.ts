import { persistentAtom } from "@nanostores/persistent";

type Product = {
  newProduct: boolean;
  name: string;
  desc: string;
  price: number;
  id: number;
  image: string;
  features: string[];
  extraImages: string[];
  inside: {
    quantity: number;
    name: string;
  }[];
};

export const shoppingCart = persistentAtom<Product[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
