import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import SingleShoe from "./pages/SingleShoe";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddShoe from "./pages/AddShoe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/shoes/:id" element={<SingleShoe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shoes/add" element={<AddShoe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
