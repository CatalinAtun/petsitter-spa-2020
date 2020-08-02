import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

// Pages
import { LoginPage, Dashboard } from './pages';

// Components
import Navbar from './components';

export const Routes = () => (
    <Switch>
        <Route exact path="/"><Dashboard /></Route>
        <Route path="/account-login"><LoginPage /></Route>
        {/* <Route path="*"><NotFound /></Route> */}
    </Switch>
);

const App = () => (
    <div>
        <Router>
            {window.location.pathname === "/account-login" ? "" : <Navbar />}
            <Routes />
        </Router>
    </div>
);

export default App;
