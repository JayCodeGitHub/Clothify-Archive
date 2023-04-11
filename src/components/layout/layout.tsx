import { ThemeProvider } from "styled-components";
import NavBar from "../navbar/navbar";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      {children}
    </ThemeProvider>
  );
}
