import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Test Block", () => {
  test("Render same text which passes to title props", () => {
    render(<Header title="My Title" />);
    const headingElement = screen.getByText(/my title/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// test('Render title component with getByRole',  () => {
//     render(<Header title='My Title'/>);
//     const headingElement = screen.getByRole('heading');
//     expect(headingElement).toBeInTheDocument()
// })

// test('Render title component with test id',  () => {
//     render(<Header title='My Title'/>);
//     const headingElement = screen.getByTestId('heading-1')
//     expect(headingElement).toBeInTheDocument()
// })

// test('Render title component with title',  () => {
//     render(<Header title='My Title'/>);
//     const headingElement = screen.getByTitle('Header')
//     expect(headingElement).toBeInTheDocument()
// })

// test('Render title with async find by query', async () => {
//     render(<Header title='My Title'/>);
//     const headingElement = await screen.findByRole('heading')
//     expect(headingElement).toBeInTheDocument()
// })

// test('Render title with find all by query', async () => {
//     render(<Header title='My Title'/>);
//     const headingElement = await screen.findAllByRole('heading')
//     expect(headingElement.length).toBe(1)
// })

// test('Render Title component even not found in query',  () => {
//     render(<Header title='My Title'/>);
//     const headingElement = screen.queryByText('cat')
//     expect(headingElement).not.toBeInTheDocument()
// })
