import React from "react";
import styled from "styled-components";
import TableColumn from "../components/TableColumn";

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 2em;
  font-weight: 800;
  margin-top: 0.2em;
`;

const MainTableDiv = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row nowrap;
`;

const DayOfWeekDiv = styled.div`
  height: 25em;
  width: 8em;
  padding-top: 5em;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const Day = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

function HomePage() {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];
  return (
    <MainDiv>
      <Title>
        <u>School TimeTable</u>
      </Title>
      <MainTableDiv>
        <DayOfWeekDiv>
          {days.map((day) => {
            return <Day>{day}</Day>;
          })}
        </DayOfWeekDiv>
        <TableColumn title={"8am - 9am"} />
        <TableColumn title={"10am - 11am"} />
        <TableColumn title={"11:30am - 12:45pm"} />
        <TableColumn title={"1:30pm - 2:30pm"} />
        <TableColumn title={"3pm - 4pm"} />
      </MainTableDiv>
    </MainDiv>
  );
}

export default HomePage;
