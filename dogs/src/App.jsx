import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Footer';
import Header from './components/header/header'
// import Home from './Components/Home';
import Login from './components/login/login';
import { UserStorage } from './UserContext';
import User from './components/user/user';
import ProtectedRoute from './components/helper/protected-route';
import Photo from './Components/Photo/Photo';
// import UserProfile from './Components/User/UserProfile';
// import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              {/* <Route path="perfil/:user" element={<UserProfile />} /> */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
