import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Nav from "./Nav";

describe("components/Nav", () => {
  test("Renders the correct content", () => {
    render(<Nav />);
        
    const mevoLogo = screen.getByTestId("mevo-logo");
    expect(mevoLogo).toBeInTheDocument();
        
    const navigationLinks = screen.getByTestId("nav-items");
    expect(navigationLinks).toBeInTheDocument();  
  });
});

describe("components/Nav - mobile view", () => {
  test.todo("On small devices the mobile menu appears");

  test.todo("When clicking on a navigation item closeMobileMenu is called");

  test.todo("When clicking on the snackbar icon mobile navigation items appears");

  test.todo("When clicking on a menu icon click state is set to the opposite of the previous value");
});
