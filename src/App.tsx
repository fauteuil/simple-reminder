import React from "react";

import "./styles.css";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

import { OrangeTimer } from "./components/timer";
import { ReminderList } from "./components/reminder-list";
import { BrowserRouter as Router } from "react-router-dom";

import { RouterViews } from "./RouterViews";
import { LayoutWrapper } from "./components/layout";

export function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <>
            <h1>Recoil Simple Reminders</h1>
            <h2>Click the Orange timer to reset!</h2>
            <LayoutWrapper>
              <RouterViews />
            </LayoutWrapper>
          </>
        </Router>
      </RecoilRoot>
    </div>
  );
}
