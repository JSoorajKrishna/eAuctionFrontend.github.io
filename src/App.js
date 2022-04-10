import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import LoginIn from './Login';
import SignUp from './SignUp';
import HomePage from './HomePage';
import DashBoard from './DashBoard';
import SellGood from './SellGood';
import Participated from './Participated';

function App() {
  // console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/login'>
            <LoginIn/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/dashboard'>
            <DashBoard/>
          </Route>
          <Route path='/sellGood'>
            <SellGood/>
          </Route>
          <Route path='/participatedAuctions'>
            <Participated/>
          </Route>
          <Route path='/auction/id'>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;