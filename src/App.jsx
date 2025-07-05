import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { TemplateProvider } from "./context/TemplateContext";
import TemplatePreviewSection from "./components/TemplatePreviewSection";

function App() {
  return (
    <TemplateProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/templates-preview" element={<TemplatePreviewSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TemplateProvider>
  );
}

export default App;
