import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout";
import { Container } from "./App.styled";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const TweetsPage = lazy(() => import("../../pages/Tweets/Tweets"));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
