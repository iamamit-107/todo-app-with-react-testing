import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockFunc = jest.fn();

describe("AddInput Block Test", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockFunc} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should show the input value", () => {
    render(<AddInput todos={[]} setTodos={mockFunc} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    expect(inputElement.value).toBe("Go Shopping");
  });

  test("should empty the input box when add button clicked", () => {
    render(<AddInput todos={[]} setTodos={mockFunc} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
