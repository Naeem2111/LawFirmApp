import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import './CustomerRisk.scss'

const customerSubcategories = [
  { id: 1, name: 'Stability/growth of customer base' },
  { id: 2, name: 'Special Designated National (SDN) customers' },
  { id: 3, name: 'Customer risk classification' },
  { id: 4, name: 'Customer type' },
  { id: 5, name: 'Industry/occupation' },
  { id: 6, name: 'Legal form' }
]

const CustomerRisk = () => {
  const [subcats, setSubcats] = useState(customerSubcategories)

  const deleteSubcat = (id) => {
    setSubcats((subcats) => subcats.filter((subcat) => subcat.id !== id))
  }

  return (
    <div className="risk">
      {subcats.map((subcat, idx) => {
        return (
          <div className="risk-options" key={idx}>
            <Button disabled variant="outlined" className="risk-btn">
              {subcat.name}
            </Button>
            <Button onClick={() => deleteSubcat(subcat.id)}>
              <Delete />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default CustomerRisk
