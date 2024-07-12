import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Purchased from "./pages/Purchased";
import Afro from "./pages/Afro";
import EDM from "./pages/EDM";
import HipHop from "./pages/Hiphop";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/afro" element={<Afro />} />
        <Route path="/edm" element={<EDM />} />
        <Route path="/hiphop" element={<HipHop />} />
      </Routes>
    </>
  );
}

export default App;
