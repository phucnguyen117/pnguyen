import Header from "../components/Header";
import Footer from "../components/Footer";
import HeartButton from "../components/HeartButton";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <HeartButton />
      <Footer />
    </>
  );
}

export default MainLayout;