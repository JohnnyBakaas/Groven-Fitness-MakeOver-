import { Outlet, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="constent-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
