
import NavBar from './components/navbar/NavBar';
import Menu from './pages/menu/Menu';
import OrderNow from './pages/ordernow/OrderNow.jsx';
import Cart from './pages/cart/Cart';
import { PizzaProvider } from './context/PizzaContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <PizzaProvider>
        <NavBar />
        <div className="app-bg">
          <Switch>
              <Route path="/" exact >
                <Menu />
              </Route>
              <Route path="/Cart">
                <Cart/>
              </Route>
              <Route path="/OrderNow" exact>
                <OrderNow />
              </Route>
              <Route path="/:name" exact>
                <Menu view="brief" type="sub-category" />
              </Route>
          </Switch>
        </div>
        </PizzaProvider>
      </Router>

    </div>
  );
}

export default App;
