import React from "react";

import "./styles.css";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

import { OrangeTimer } from "./components/timer";
import { ReminderList } from "./components/reminder-list";
import { BrowserRouter as Router } from "react-router-dom";

import { RouterViews } from "./RouterViews";

const LayoutWrapper = styled.div`
  padding: 2rem;
  width: 84%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <>
            <h1>Recoil Simple Reminders</h1>
            <h2>Click the Orange timer to reset!</h2>
            <ReminderList />
            <LayoutWrapper>
              <OrangeTimer />
            </LayoutWrapper>
            <LayoutWrapper>
              <RouterViews />
            </LayoutWrapper>
          </>
        </Router>
      </RecoilRoot>
    </div>
  );
}
