import { ConfirmForm } from './components/ConfirmForm';
import { PassportInformationForm } from './components/PassportInformationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route> </Route>
         
          </Routes>
       </BrowserRouter>
       <PassportInformationForm/>
        <ConfirmForm />
    </div>
  );
}

export default App;