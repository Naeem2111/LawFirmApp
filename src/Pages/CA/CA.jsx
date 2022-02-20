import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import './CA.scss'

const caOptions = [
  'Customer Risk',
  'Channels / Route to Market',
  'Products and Services',
  'Geography',
  'Regulatory and Other'
]

const CA = () => {
  return (
    <div className="ca">
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Policies and Procedures
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="/casettings/due-diligence" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Customer Due Diligence
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            On-going Monitoring
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Payment Data Quality and Completeness
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Currency and Other Transaction Reports
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Training
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
      <div className="ca-options">
        <Link to="#" className="option-link">
          <Button variant="outlined" className="ca-btn">
            Technology, Infrastructure and Record Keeping
          </Button>
        </Link>
        <Button>
          <Delete />
        </Button>
      </div>
    </div>
  )
}

export default CA
