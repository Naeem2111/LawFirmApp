import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Risktables from './Pages/RiskTables/Risktables'
import IRA from './Pages/IRA/IRA'
import CustomerRisk from './Pages/IRA/CustomerRisk/CustomerRisk'
import Assessment from './Pages/Assessment/Assessment'
import Products from './Pages/IRA/Products/Products'
import Regulatory from './Pages/IRA/Regulatory/Regulatory'

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
          <Route exact path="/irasettings/customer-risk">
            <CustomerRisk />
          </Route>
          <Route exact path="/irasettings/products-services">
            <Products />
          </Route>
          <Route exact path="/irasettings/regulatory">
            <Regulatory />
          </Route>
          <Route exact path="/assessment">
            <Assessment />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
