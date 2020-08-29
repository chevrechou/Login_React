import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './Login';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Home';
function App() {
  const {isLoading} = useAuth0;
  if (isLoading) return <div>Loading...</div>
  
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Home/>
      
    </div>
  );
}

export default App;
