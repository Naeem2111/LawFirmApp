import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import './CustomerRisk.scss'

const CustomerRisk = () => {
  return (
    <div className="risk">
      <div className="risk-options">
        <Button disabled variant="outlined" className="risk-btn">
          Stability / Growth of customer base
        </Button>
        <Button>
          <Delete />
        </Button>
      </div>
    </div>
  )
}

export default CustomerRisk
