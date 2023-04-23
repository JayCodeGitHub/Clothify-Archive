import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { useAlert } from "@/hooks/useAlert";
import Alert from "../alert/alert";

interface LayoutProps {
  children: React.ReactNode;
}

const NavBar = dynamic(() => import("../navbar/navbar"), { ssr: false });

export default function Layout({ children }: LayoutProps) {
  const { alert } = useAlert();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {alert ? <Alert message={alert} /> : null}
      <NavBar />
      {children}
    </ThemeProvider>
  );
}
