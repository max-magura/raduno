import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage/loginPage';
import ViewEvents from './pages/ViewEvents/viewEvents';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={AdminPage} />
          <Route exact path="/event/:id" component={ViewEvents} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;