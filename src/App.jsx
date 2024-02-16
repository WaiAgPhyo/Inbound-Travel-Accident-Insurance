import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ConfirmForm } from "./components/ConfirmForm";
import Footer from "./components/Footer";
import { PassportInformationForm } from "./components/PassportInformationForm";
import Success from "./components/Success";
import Header from "./components/Header";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<PassportInformationForm />} />
            <Route path="/confirm" element={<ConfirmForm />} />
            <Route path="/form" element={<PassportInformationForm />} />
            <Route path="/success" element={<Success />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
