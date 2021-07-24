import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import listHolder from '../containers/listHolder';
import './styles/App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={listHolder} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
