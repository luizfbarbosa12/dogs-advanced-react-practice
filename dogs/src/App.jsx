import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
