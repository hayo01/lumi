import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          minWidth: '1180px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
