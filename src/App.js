import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import BlogPage from "./components/pages/BlogPage";
import LoginPage from "./components/pages/LoginPage";
import JoinPage from "./components/pages/JoinPage";
import ErrorPage from "./components/pages/ErrorPage";
import { RecoilRoot } from "recoil";
import WritePage from "./components/pages/WritePage";
import MyPage from "./components/pages/MyPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/write" element={<WritePage />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
