import React from "react";
import { Outlet } from "react-router-dom";
import Headeranother from "./Headeranotherpage";
import Footer from "./Footer";

function Layoutanother() {
  return (
    <>
      <Headeranother />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layoutanother;
