import "./App.css";
import Footer from "./components/Home/Footer";
import Hero from "./components/Home/Hero";
import Middle from "./components/Home/Middle";
import Navbar from "./components/Home/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Middle />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
