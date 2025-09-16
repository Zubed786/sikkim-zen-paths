import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import DigitalLama from './DigitalLama';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <DigitalLama />
    </div>
  );
};

export default Layout;