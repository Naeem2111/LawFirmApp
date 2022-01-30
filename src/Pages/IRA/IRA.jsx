import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import './IRA.scss'

const iraOptions = [
  'Customer Risk',
  'Channels / Route to Market',
  'Products and Services',
  'Geography',
  'Regulatory and Other'
]

const IRA = () => {
  return (
    <div className="ira">
      <div className="ira-options">
        <Link to="/customer-risk" className="option-link">
          <Button variant="outlined" className="ira-btn">
            Customer Risk
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ira-options">
        <Link to="/" className="option-link">
          <Button variant="outlined" className="ira-btn">
            Channels / Route to Market
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ira-options">
        <Link to="/" className="option-link">
          <Button variant="outlined" className="ira-btn">
            Products and Services
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ira-options">
        <Link to="/" className="option-link">
          <Button variant="outlined" className="ira-btn">
            Geography
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ira-options">
        <Link to="/" className="option-link">
          <Button variant="outlined" className="ira-btn">
            Regulatory and Other
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
    </div>
  )
}

export default IRA
