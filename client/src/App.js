import PetList from './components/PetList';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';
import CurrentPet from './components/CurrentPet';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PetList />
          </Route>
          <Route exact path="/pets/new">
            <CreatePet />
          </Route>
          <Route exact path="/pets/:petId/edit">
            <UpdatePet />
          </Route>
          <Route exact path="/pet/:petId">
            <CurrentPet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
