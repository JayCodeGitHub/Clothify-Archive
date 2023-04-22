import React, { useContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: {
    id: number;
    name: string;
    slug: string;
    img: string;
    price: number;
    description: string;
    quantity: number;
  }[];
  quantityIncrementation: (id: number, quantity: number) => void;
  quantityDecrementation: (id: number, quantity: number) => void;
  addItem: (newItem: any, quantity: number) => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState = [
  {
    id: 1,
    name: "T-Shirt",
    slug: "t-shirt",
    img: "/Items/t-shirt.jpeg",
    price: 12,
    description: "ednwrn",
    quantity: 2,
  },
];

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(defaultState);
  function quantityIncrementation(id: number, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function quantityDecrementation(id: number, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - quantity,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function addItem(newItem: any, quantity: number) {
    let isNew = true;
    cart.map((item) => {
      if (item.id === newItem.id) {
        isNew = false;
      }
    });
    if (isNew) {
      cart.push({ ...newItem, quantity: quantity });
    } else {
      quantityIncrementation(newItem.id, quantity);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, quantityIncrementation, quantityDecrementation, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);

  return cart;
}
