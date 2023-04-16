import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

interface LayoutProps {
  children: React.ReactNode;
}

const NavBar = dynamic(() => import("../navbar/navbar"), { ssr: false });

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      {children}
    </ThemeProvider>
  );
}
