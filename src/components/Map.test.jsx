import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Map from "./Map"

test('renders the correct content', () => {
  render(<Map />);

  const heading = screen.getByText(/mevo front end engineer/i);
  expect(heading).toBeInTheDocument();
screen.debug()
  expect(screen.getByTestId("mapbox")).toBeInTheDocument()
});
