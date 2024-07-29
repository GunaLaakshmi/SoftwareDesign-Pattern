import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Footer, Main, Navbar, Product } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  )
}

export default Home