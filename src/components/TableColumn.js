import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 30em;
  width: 11.6em;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const ItemDiv = styled.div`
  height: ${(props) => (props.subject ? "5em" : "2.5em")};
  width: ${(props) => (props.half ? "50%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const ClassTitleDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

function TableColumn({ title }) {
  return (
    <MainDiv>
      <ItemDiv>{title}</ItemDiv>
      <ClassTitleDiv>
        <ItemDiv half>3N</ItemDiv>
        <ItemDiv half>3S</ItemDiv>
      </ClassTitleDiv>
    </MainDiv>
  );
}

export default TableColumn;
