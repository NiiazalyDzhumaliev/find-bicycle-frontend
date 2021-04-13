import { Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Favourite from './containers/Favourite';
import Home from './containers/Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/favourites" component={Favourite} />
  </Switch>
);

export default App;
