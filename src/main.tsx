import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Product from "./pages/product/product";
import "./pages/product/product.css";
import "./pages/developer/developer.css";
import "./pages/Home.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Developer from "./pages/developer/developer";
import Enterprise from "./pages/enterprise/enterprise";
import Pricing from "./pages/pricing/pricing";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);
