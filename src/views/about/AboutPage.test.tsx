import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AboutPage from "./AboutPage";
import theme from "../../themeGulf";
import { CC_BY_URL } from "../../constants/licence";

describe("AboutPage", () => {
  it("has a Licence section with CC BY 4.0 and the licensor", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <AboutPage />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const licence = screen.getByTestId("about-licence");
    expect(within(licence).getByRole("heading", { name: "Licence" })).toBeInTheDocument();
    expect(licence).toHaveTextContent("© Earth Sciences New Zealand");
    expect(licence).toHaveTextContent("Creative Commons Attribution 4.0 International licence (CC BY 4.0)");
    within(licence)
      .getAllByRole("link")
      .filter((link) => !link.closest("[data-testid='about-citation']"))
      .forEach((link) => expect(link).toHaveAttribute("href", CC_BY_URL));
  });

  it("shows the BSSA 2024 paper as the citation, linking to its DOI", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <AboutPage />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const citation = screen.getByTestId("about-citation");
    expect(citation).toHaveTextContent(
      "Gerstenberger, M. C., et al. (2024). The 2022 Aotearoa New Zealand National Seismic Hazard Model: Process, Overview, and Results. Bulletin of the Seismological Society of America, 114(1), 7–36.",
    );
    expect(within(citation).getByRole("link")).toHaveAttribute("href", "https://doi.org/10.1785/0120230182");
  });
});
