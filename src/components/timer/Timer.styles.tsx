import styled from "styled-components";

export const OrangeCircle = styled.div`
  border: 1rem solid orange;
  border-radius: 5rem;
  padding-top: 2rem;
  height: 3rem;
  width: 5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: orangered;
    background-color: lightgreen;
  }
  &:active {
    border-color: red;
    background-color: white;
  }
`;