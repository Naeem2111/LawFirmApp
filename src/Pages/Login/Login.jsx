import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './Login.scss'

const Home = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src="" alt="" />
        </div>

        <div className="right">
          <div className="heading">
            <h2>Log In</h2>
          </div>

          <form>
            <TextField className="inputField" variant="filled" label="Email" />
            <TextField
              className="inputField"
              variant="filled"
              label="Password"
            />
            <Link to="/assessment" className="btnLogin">
              <Button variant="outlined">Log In</Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
