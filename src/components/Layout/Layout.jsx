import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation";
import { Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        {/* Add some logo */}
        <Navigation />
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
