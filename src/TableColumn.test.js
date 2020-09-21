import React from "react";
import renderer from "react-test-renderer";
import TableColumn from "./components/TableColumn";

test("renders correctly the table columns", () => {
  const title = "Title";
  const tree = renderer
    .create(<TableColumn title={title} lesson={"lesson5"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
