import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Risktables from './Pages/RiskTables/Risktables'
import IRA from './Pages/IRA/IRA'
import CustomerRisk from './Pages/IRA/CustomerRisk/CustomerRisk'
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
          <Route exact path="/irasettings">
            <IRA />
          </Route>
          <Route exact path="/customer-risk">
            <CustomerRisk />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
