import { describe, it, expect } from "vitest";
import { screen,render } from "@testing-library/react";
import About from "../Components/About";
import React from "react"; 
import '@testing-library/jest-dom'
describe("About", () => {
  it("should render the About component", () => {
    render(<About />);    
    const aboutElement = screen.getByRole('heading', {level: 1})
    expect(aboutElement).toBeInTheDocument();
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/Contact Developer/i);
    const text = screen.queryByText(/about/i); 
      expect(text).toBeInTheDocument();
    const image = screen.getByAltText('devimage')
      expect(image).toHaveClass('userImage');


  });
  });


