import SideBar from "../../components/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="d-flex row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col">{children}</div>
    </div>
  );
}
