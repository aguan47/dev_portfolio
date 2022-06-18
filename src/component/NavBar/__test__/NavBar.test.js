import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe("NavBar should have all the items listed", () => {
    it("should have the home item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
    });

    it("should have the about me item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/about me/i)).toBeInTheDocument();
    });

    it("should have the projects item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/projects/i)).toBeInTheDocument();
    });

    it("should have the experience item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/experience/i)).toBeInTheDocument();
    });

    it("should have the education item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/education/i)).toBeInTheDocument();
    });

    it("should have the contact me item", () => {
        render(<NavBar/>);
        expect(screen.getByText(/contact me/i)).toBeInTheDocument();
    });
});