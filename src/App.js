import SignIn from './SignIn'
import { Route, Switch } from 'react-router-dom';
import BoysChoose from './BoysChoose'
import GirlsChoose from './GirlsChoose'
import ChooseFloor from './ChooseFloor';
import firebase from "firebase";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path = "/">
        <SignIn />
    </Route>
    <Route exact path = "/GirlsChoose">
        <GirlsChoose/>
    </Route>
    <Route exact path = "/BoysChoose">
        <BoysChoose/>
    </Route>
    <Route exact path = "/ChooseFloor/:name">
        <ChooseFloor/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
