import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MapLegend from "./MapLegend";

test("components/MapLegend - renders the correct content", () => {
  render(<MapLegend />);

  const legendContainer = screen.getByTestId("map-legend");
  expect(legendContainer).toBeInTheDocument();

  const vehicleIcon = screen.getByRole("img");
  expect(vehicleIcon).toHaveAttribute("src", "https://assets.mevo.co.nz/vehicles/pin-vehicle-available.png");

  const homeZones = screen.getByTestId("home-zones-legend");
  expect(homeZones).toBeInTheDocument();
});