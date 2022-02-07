import './Assessment.scss'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
const Assessment = () => {
  return (
    <div className="assessment">
      <h1>Assessment Selection</h1>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link to="/home">
            <Button variant="outlined" className="risk-btn">
              AML/CFT Risk Assessment
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="#">
            <Button disabled variant="outlined" className="risk-btn">
              ABC Risk Assessment
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="#">
            <Button disabled variant="outlined" className="risk-btn">
              Proliferation Financing Risk Assessment
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Assessment
