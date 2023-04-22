import React, { useContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: {
    title: string;
    slug: string;
    img: string;
    price: string;
    description: string;
  }[];
  toggleCart: () => void;
}

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

const defaultState = [
  {
    title: "T-Shirt",
    slug: "t-shirt",
    img: "/Items/t-shirt.jpeg",
    price: "12$",
    description: "ednwrn",
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
