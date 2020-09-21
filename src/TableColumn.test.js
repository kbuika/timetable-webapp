import React from "react";
import renderer from "react-test-renderer";
import TableColumn from "./components/TableColumn";

test("renders correctly the table columns", () => {
  const title = "Title";
<<<<<<< HEAD
  const tree = renderer
    .create(<TableColumn title={title} lesson={"lesson5"} />)
    .toJSON();
=======
  const tree = renderer.create(<TableColumn title={title} lesson={"lesson5"}/>).toJSON();
>>>>>>> daac7645fd4b080f240e287ed5b999acb6b94654
  expect(tree).toMatchSnapshot();
});
