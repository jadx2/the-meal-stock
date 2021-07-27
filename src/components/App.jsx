import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ListHolder from '../containers/ListHolder';
import './styles/App.scss';
import CategoryMeals from '../containers/CategoryMeals';
import IngredientMeals from '../containers/IngredientMeals';
import Meal from '../containers/Meal';
import NoMatch from '../containers/NoMatch';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListHolder} />
          <Route path="/categories/:category" component={CategoryMeals} />
          <Route path="/ingredients/:ingredient" component={IngredientMeals} />
          <Route path="/meal/:id" component={Meal} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
