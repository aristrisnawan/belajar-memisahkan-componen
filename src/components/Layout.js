import React from "react";
import FooterComponents from "./FooterComponents";
import NavbarComponent from "./NavbarComponent";

export default function Layout({ children }) {
  return (
    <div>
      <NavbarComponent />
      <div>{children}</div>
      <FooterComponents />
    </div>
  );
}
