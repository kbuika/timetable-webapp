import React from "react";
import styled from "styled-components";
const data = require("../data/subjectData.json");

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

const MainClassColumnDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 25em;
  width: 100%;
`;

const ClassColumnDiv = styled.div`
  height: 100%;
  width: 50%;
  background-color: ${(props) => (props.col ? "#f1f3f8" : "#d6e0f0")};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

function TableColumn({ title, lesson }) {
  return (
    <MainDiv>
      <ItemDiv>{title}</ItemDiv>
      <ClassTitleDiv>
        <ItemDiv half>3N</ItemDiv>
        <ItemDiv half>3S</ItemDiv>
      </ClassTitleDiv>
      <MainClassColumnDiv>
        <ClassColumnDiv col>
          {data.subject[lesson]["3N"].map((sub) => {
            return (
              <ItemDiv half subject>
                {sub.subject}
              </ItemDiv>
            );
          })}
        </ClassColumnDiv>
        <ClassColumnDiv>
          {data.subject[lesson]["3S"].map((sub) => {
            return (
              <ItemDiv half subject>
                {sub.subject}
              </ItemDiv>
            );
          })}
        </ClassColumnDiv>
      </MainClassColumnDiv>
    </MainDiv>
  );
}

export default TableColumn;
