import './Home.scss'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <h1>First Time Setup</h1>
      <div className="menu">
        <Link to="/risktables" className="btnRiskRatingTables">
          <span class="text">Risk Rating Tables</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </Link>
        <Link to="/irasettings" classname="btnIRASettings">
          <span class="text">Inherent Risk Assessment</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </Link>
        <Link to="/casettings" classname="btnCASettings">
          <span class="text">Control Assessment</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </Link>
      </div>
    </div>
  )
}

export default Home
