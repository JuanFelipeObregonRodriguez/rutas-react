import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';



const App = () => {
  return (
    <Router>

      <Link to="/">Usuarios</Link>



      <Switch>

        <Route exact path="/">
          <Usuarios> </Usuarios>

        </Route>
        <Route path="/usuario/:id">
          <Usuario> </Usuario>

        </Route>
      </Switch>
    </Router>

  )
}
export default App;