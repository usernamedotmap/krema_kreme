import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {

  return (
    <>

      <Header />
      {/* Main dito */}
      <main>
        <Outlet />
      </main>
      {/* footer goods lang*/}
      
    </>
  );
};

export default UserLayout;
