import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Risktables from './Pages/RiskTables/Risktables'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/risktables">
            <Risktables />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
