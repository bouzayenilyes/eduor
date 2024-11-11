"use client";
import React, { ReactNode } from "react";
import NavbarSection from "../navbar/NavbarSection";
import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";
type Props = {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <NavbarSection style="" logo="/images/logo.png" />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection />
    </>
  );
};

export default Layout;
