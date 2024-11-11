"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMobileNavClose } from "@/redux/features/mobileNavSlice";
type Props = {
  href: string;
  children: ReactNode
}
const Navlink = ({ href, children } : Props) => {
  const dispatch = useAppDispatch()
  const isMobileNavOpen = useAppSelector(state => state.mobileNav.isMobileNavOpen);
  const handleMobileNavClose = () => {
    dispatch(toggleMobileNavClose())
  } 
  const pathname = usePathname(); // Get the current URL pathname

  const isActive = pathname === href;

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      handleMobileNavClose();
    }
  };

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={handleLinkClick}
    >
      {children}
    </Link>
  );
};

export default Navlink;
