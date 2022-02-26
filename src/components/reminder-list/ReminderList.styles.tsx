import styled from "styled-components";
import { Selected } from "../../types";

export const ReminderListContainer = styled.div`
  padding: 2rem;
  width: 84%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ReminderItemContainer = styled.div<Selected>`
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  background-color: ${({ selected }: Selected) =>
    selected ? "white" : "lightgray"};
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  &:hover {
    background-color: lightgreen;
  }
  &:active {
    background-color: lightsteelblue;
  }
`;
