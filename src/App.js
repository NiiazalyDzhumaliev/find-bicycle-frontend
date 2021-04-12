import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
