import React from 'react';
import Navbar from '../Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;