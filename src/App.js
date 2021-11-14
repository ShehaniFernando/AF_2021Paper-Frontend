import './App.css';

//IMPORT BROWSERROUTER
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//IMPORT
import NavBar from './components/navBar/navBar';
import Categories from './components/categories/categories';
import CreateFood from './components/createFood/createFood';
import CreateCategory from './components/createCategory/createCategory';
import FoodList from './components/categories/foodList';
import Foods from './components/foods/foods';
import Order from './components/categories/order';


function App() {
  return (
    <div>
      <Router>
          <NavBar/>
          <section>
            <Switch>
              <Route path = "/" component={Categories} exact/>
              <Route path = "/create-food" component={CreateFood} />
              <Route path = "/create-category" component={CreateCategory} />
              <Route path="/food/:id" component={FoodList} exact/>
              <Route path="/view-food" component={Foods}/>
              <Route path="/view-order" component={Order}/>
            </Switch>
          </section>
      </Router>
    </div>
  );
}

export default App;
