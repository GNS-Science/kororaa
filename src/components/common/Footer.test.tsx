import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import theme from "../../themeGulf";
import { CC_BY_URL } from "../../constants/licence";

describe("Footer", () => {
  it("shows the CC BY 4.0 licence and licensor, linking to the licence deed", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const licence = screen.getByTestId("footer-licence");
    expect(licence).toHaveTextContent("© Earth Sciences New Zealand, licensed under CC BY 4.0");

    const links = within(licence).getAllByRole("link");
    expect(links).toHaveLength(2);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", CC_BY_URL);
      expect(link).toHaveAttribute("rel", expect.stringContaining("license"));
    });
  });
});
