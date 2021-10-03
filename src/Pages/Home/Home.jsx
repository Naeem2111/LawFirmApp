import { Button, TextField } from '@mui/material'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <img
            src="https://lh3.googleusercontent.com/proxy/2nFvVBlwLME6n5OCiylLQqAu8jS-npeP3k3emMuqLzAXbr7ytDUAgdEnBhvXriq-LR6bAO_38xadt3joAJr0EKZuiIme1k0JBN-ydzfHZJ9zWuFZy4hIse1p1gUUXYmodsQ5kvKe9iKNTvkgst4Ki24S5-8R6T-fat1korY"
            alt=""
          />
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
            <Button className="btnLogin" variant="outlined">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
