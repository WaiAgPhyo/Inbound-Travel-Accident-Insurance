import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Pdf from "./components/Pdf";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        {/* <Pdf /> */}
        <Enquiry />
        <Footer />
      </div>
    </>
  );
}

export default App;
