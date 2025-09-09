import Navigation from './Navigation';
import Footer from '../sections/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;