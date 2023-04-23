import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { CartProvider } from "@/hooks/useCart";
import Alert from "../alert/alert";

interface LayoutProps {
  children: React.ReactNode;
}

const NavBar = dynamic(() => import("../navbar/navbar"), { ssr: false });

export default function Layout({ children }: LayoutProps) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Alert />
        <GlobalStyle />
        <NavBar />
        {children}
      </ThemeProvider>
    </CartProvider>
  );
}
