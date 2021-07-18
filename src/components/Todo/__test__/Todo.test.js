import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (task) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /add/i });

  task.forEach((element) => {
    fireEvent.change(inputElement, { target: { value: element } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  // Integration Testing
  test("Render same text passed into input", () => {
    render(<MockTodo />);

    addTask(["Go to shopping"]);

    const taskElement = screen.getByText(/Go to shopping/i);
    expect(taskElement).toBeInTheDocument();
  });

  test("Render multiple task itmes", () => {
    render(<MockTodo />);

    addTask(["Go to shopping", "Playing cricket"]);

    const taskElement = screen.getAllByTestId("task-item");
    expect(taskElement.length).toBe(2);
  });

  test("Intially no task is completed", () => {
    render(<MockTodo />);

    addTask(["Go to shopping"]);

    const taskElement = screen.getByText(/Go to shopping/i);
    expect(taskElement).not.toHaveClass("todo-item-active");
  });

  test("task is completed on click", () => {
    render(<MockTodo />);

    addTask(["Go to shopping"]);

    const taskElement = screen.getByText(/Go to shopping/i);
    fireEvent.click(taskElement);
    expect(taskElement).toHaveClass("todo-item-active");
  });
});
