import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "@pages/main/Main";
import store from "@shared/api/store";
import { RoadmapWidget } from "@widgets/roadmap";
import { UserGroupWidget } from "@widgets/UserGroup";
import { ExpertsWidget } from "@widgets/ExpertsWidget";
import { CuratorsWidget } from "@widgets/CuratorsWidget";

import "./index.scss";
import Modal from "@features/Modal/containers/ModalContainer";
import { PreMain } from '@pages/pre-main';
import { RatePage } from '@pages/rates';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreMain />} />
          <Route path="/main" element={<Main />} />
          <Route path="/rates" element={<RatePage />} />
          <Route path="/roadmap" element={<RoadmapWidget />} />
          <Route path="/group" element={<UserGroupWidget />} />
          <Route path="/experts" element={<ExpertsWidget />} />
          <Route path="/curators" element={<CuratorsWidget />} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </Provider>
  );
};

export default App;
