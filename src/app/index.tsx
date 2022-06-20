import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "@pages/main/Main";
import { PreMain } from "@pages/pre-main";
import { RoadmapWidget } from "@widgets/roadmap";
import { UserGroupWidget } from "@widgets/UserGroup";
import { ExpertsWidget } from "@widgets/ExpertsWidget";
import { CuratorsWidget } from "@widgets/CuratorsWidget";

import Modal from "@features/Modal/containers/ModalContainer";
import { RatePage } from "@pages/rates";
import { PrivatePage } from "@pages/private";

import store from "@shared/api/store";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/pre" element={<PreMain />} />
          <Route
            path="/"
            element={
              <PrivatePage>
                <Main />
              </PrivatePage>
            }
          />
          <Route
            path="/rates"
            element={
              <PrivatePage>
                <RatePage />
              </PrivatePage>
            }
          />
          <Route
            path="/roadmap"
            element={
              <PrivatePage>
                <RoadmapWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/group"
            element={
              <PrivatePage>
                <UserGroupWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/experts"
            element={
              <PrivatePage>
                <ExpertsWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/curators"
            element={
              <PrivatePage>
                <CuratorsWidget />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
      <Modal />
    </Provider>
  );
};

export default App;
