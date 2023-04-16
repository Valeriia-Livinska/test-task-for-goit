import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Header } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
