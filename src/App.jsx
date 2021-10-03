import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
