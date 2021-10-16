import './Risktables.scss'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
const Risktables = () => {
  return (
    <div className="risktables">
      <h1>risktables</h1>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Link to="/risktables" className="btnRiskRatingTables">
            <span class="text">Country</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
          <Link to="/irasettings" classname="btnIRASettings">
            <span class="text">Customer Type</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
          <Link to="/casettings" classname="btnCASettings">
            <span class="text">Industry and Occupation</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
          <Link to="/casettings" classname="btnCASettings">
            <span class="text">Legal Form</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
          <Link to="/casettings" classname="btnCASettings">
            <span class="text">Product Type</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <div className="table">Select Table</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Risktables
