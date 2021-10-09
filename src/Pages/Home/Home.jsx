import './Home.scss'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <h1>First Time Setup</h1>
      <div className="buttons">
        <Link to="/risktables" className="btnRiskRatingTables" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Risk Rating Tables</Button>
        </Link>
        <Link to="/irasettings" classname="btnIRASettings" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Inherent Risk Assessment</Button>
        </Link>
        <Link to="/casettings" classname="btnCASettings" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Control Assessment</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
