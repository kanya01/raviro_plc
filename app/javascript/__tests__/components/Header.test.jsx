import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../components/Header";

describe("Header", () => {
  describe("Desktop Navigation", () => {
    it("renders navigation links in desktop view", () => {
      render(<Header />);
      const desktopNav = screen.getByRole("navigation");

      // Test desktop navigation links
      const desktopLinks = desktopNav.querySelectorAll(".md\\:flex a");
      expect(desktopLinks).toHaveLength(4);

      // Verify specific link text and href
      expect(desktopLinks[0]).toHaveAttribute("href", "/research");
      expect(desktopLinks[0]).toHaveTextContent("Research");
    });
  });

  describe("Mobile Navigation", () => {
    it("toggles mobile menu when hamburger button is clicked", async () => {
      render(<Header />);

      // Find and click hamburger button
      const menuButton = screen.getByRole("button");
      await userEvent.click(menuButton);

      // Verify mobile menu is visible
      const mobileMenu = screen
        .getByRole("navigation")
        .querySelector(".md\\:hidden");
      expect(mobileMenu).toBeVisible();

      // Verify mobile navigation links
      const mobileLinks = mobileMenu.querySelectorAll("a");
      expect(mobileLinks).toHaveLength(4);
      expect(mobileLinks[0]).toHaveAttribute("href", "/research");
    });
  });

  describe("Accessibility", () => {
    it("has accessible navigation", () => {
      render(<Header />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Toggle navigation menu",
      );
    });
  });
});
