import React from "react";
import "./Layout.css";

const Layout: any = ({ mainContent, Header }: any) => {
  return (
    <div className="layout-container">
      <div>{Header}</div>
      <div>{mainContent}</div>
    </div>
  );
};

export default Layout;
