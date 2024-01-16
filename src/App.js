import './App.css';
import { BrowserRouter,Route,Routes, Navigate  } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    return <Navigate to="/" />;
  };

  const [uslovPretrage,setUslovPretrage]=useState("");

  function pretrazi(uslovPretrage){
    setUslovPretrage(uslovPretrage);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {loggedInUser && <NavBar  pretrazi={pretrazi} loggedInUser={loggedInUser} handleLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={loggedInUser ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />}
          />
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
