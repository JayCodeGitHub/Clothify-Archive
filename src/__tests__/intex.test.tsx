import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "@/pages/index";
import { theme } from "@/styles/theme";

test("home page is rendering", () => {
  render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
});
