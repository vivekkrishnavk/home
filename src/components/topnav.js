import React from "react";
import containerStyles from "./header.module.css";

const Topnav = () => (
  <header className={containerStyles.topnav}>
    <div className={containerStyles.sideBarOptions}>Menu</div>
    <div className={containerStyles.midSection}>Vivek Krishna</div>
    <div className={containerStyles.sideBarOptions}>Email</div>
  </header>
);

export default Topnav;
