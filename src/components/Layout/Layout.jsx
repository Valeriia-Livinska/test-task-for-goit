import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import Box from "../Box/Box";
import Spinner from "../Spinner/Spinner";
import { Header } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense
        fallback={
          <Box flexDirection="column" alignItems="center" mt={8}>
            <Spinner />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
