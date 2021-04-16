import { Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Favourite from './containers/Favourite';
import Bicycle from './containers/Bicycle';
import Home from './containers/Home';
import style from './styles/App.module.css';

const App = () => (
  <div className={style.container}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bicycles" component={Bicycle} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/favourites" component={Favourite} />
    </Switch>
  </div>
);

export default App;
