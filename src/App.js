import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SignUp } from './pages/Auth/SignUp';
import { SignIn } from './pages/Auth/SignIn';
import { ForgotPassword } from './pages/Auth/ForgotPassword';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
