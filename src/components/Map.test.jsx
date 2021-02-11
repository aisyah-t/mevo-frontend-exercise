/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Map from "./Map";

jest.mock("mapbox-gl", () => <Map />);

describe("components/Map", () => {


	it ("renders the correct content", () => {
		render(<Map />);
		const heading = screen.getByTestId("nav-bar");
		expect(heading).toBeInTheDocument();
		expect(screen.getByTestId("mapbox")).toBeInTheDocument();
	});
});

