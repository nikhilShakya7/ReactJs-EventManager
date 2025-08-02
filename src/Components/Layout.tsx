// src/components/Layout.tsx
import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[url('/Images/bg1.png')] bg-cover bg-fixed bg-center">
      <Header />
      <div className="pt-20 px-4">{children}</div>{" "}
    </div>
  );
};

export default Layout;
