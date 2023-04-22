import React, { useContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: {
    name: string;
    slug: string;
    img: string;
    price: number;
    description: string;
    quantity: number;
  }[];
  toggleCart: () => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState = [
  {
    name: "T-Shirt",
    slug: "t-shirt",
    img: "/Items/t-shirt.jpeg",
    price: 12,
    description: "ednwrn",
    quantity: 2,
  },
  {
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
  const toggleCart = () => {
    console.log("cart");
  };

  return (
    <CartContext.Provider value={{ cart, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);

  return cart;
}
