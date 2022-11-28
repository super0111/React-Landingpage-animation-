import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;