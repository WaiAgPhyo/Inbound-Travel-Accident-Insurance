import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfirmForm } from './components/ConfirmForm';
import { PassportInformationForm } from './components/PassportInformationForm';
import { PaymentComplete } from './components/PaymentComplete';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route element={<PassportInformationForm/>} index/>
            <Route path='form' element={<PassportInformationForm/>}/>
            <Route path='confirm' element={<ConfirmForm/>}/>
            <Route path='complete' element={<PaymentComplete/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;