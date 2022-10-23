import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import Form2 from "./components/Form2";
import ImageUpload from "./components/ImageUpload";
import RegForm2 from "./components/RegForm2";
import Succes from "./components/Success";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path ="/v2/upload" element={<ImageUpload />} />
        <Route path="/v2" element={<Form2 />} />
        <Route path="/v2/reg" element={<RegForm2 />} />
        <Route path="/success" element={<Succes />} />
      </Routes>
  </BrowserRouter>
);
