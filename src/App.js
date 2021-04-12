import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
