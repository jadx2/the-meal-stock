import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ListHolder from '../containers/ListHolder';
import './styles/App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListHolder} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
