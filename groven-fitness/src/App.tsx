import { Outlet, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="constent-wrapper">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
