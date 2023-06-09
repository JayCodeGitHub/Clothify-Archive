import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "@/hooks/useCart";

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper = ({ children }: WrapperProps) => (
  <CartProvider>{children}</CartProvider>
);

test("Inital value of cart is []", () => {
  const { result } = renderHook(() => useCart(), { wrapper });
  const { cart } = result.current;
  expect(cart).toEqual([]);
});

test("AddItem works", () => {
  const { result } = renderHook(() => useCart(), { wrapper });
  act(() => {
    result.current.addItem(
      {
        id: 1,
        name: "T-Shirt",
        slug: "t-shirt",
        img: "/Items/t-shirt.webp",
        price: 12,
        quantity: 1,
      },
      1
    );
  });
  const { cart } = result.current;
  expect(cart[0]).toEqual({
    id: 1,
    name: "T-Shirt",
    slug: "t-shirt",
    img: "/Items/t-shirt.webp",
    price: 12,
    quantity: 1,
  });
});

test("Increasing quantity works", () => {
  const { result } = renderHook(() => useCart(), { wrapper });
  act(() => {
    result.current.addItem(
      {
        id: 1,
        name: "T-Shirt",
        slug: "t-shirt",
        img: "/Items/t-shirt.webp",
        price: 12,
        quantity: 1,
      },
      1
    );
    result.current.addItem(
      {
        id: 1,
        name: "T-Shirt",
        slug: "t-shirt",
        img: "/Items/t-shirt.webp",
        price: 12,
        quantity: 1,
      },
      1
    );
  });
  const { cart } = result.current;
  expect(cart[0]).toEqual({
    id: 1,
    name: "T-Shirt",
    slug: "t-shirt",
    img: "/Items/t-shirt.webp",
    price: 12,
    quantity: 2,
  });
});

test("RemoveItem works", () => {
  const { result } = renderHook(() => useCart(), { wrapper });
  act(() => {
    result.current.addItem(
      {
        id: 1,
        name: "T-Shirt",
        slug: "t-shirt",
        img: "/Items/t-shirt.webp",
        price: 12,
        quantity: 1,
      },
      1
    );
    result.current.removeItem(1);
  });
  const { cart } = result.current;
  expect(cart).toEqual([]);
});
