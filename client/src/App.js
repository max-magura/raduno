import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage/loginPage';
import ViewEvents from './pages/ViewEvents/viewEvents';
import StaticModal from './pages/StaticModal/StaticModal'

function App() {
  return (
    <div>
      <ViewEvents />
      {/* <LoginPage /> */}
      {/* <StaticModal /> */}
    </div>
  );
}

export default App;