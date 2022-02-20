import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  const history = useHistory()

  return (
    <div className="navbar">
      <Button variant="outlined" className="btn" onClick={history.goBack}>
        &#8592;
      </Button>
      <div className="logo">Bank Name</div>
    </div>
  )
}

export default Navbar
