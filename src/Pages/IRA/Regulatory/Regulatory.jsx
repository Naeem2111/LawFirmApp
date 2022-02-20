import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import './Regulatory.scss'

const regSubcategories = [
  { id: 1, name: 'Staff turnover' },
  { id: 2, name: 'AML related STRs' },
  { id: 3, name: 'External factors impacting AML/Sanctions risk' },
  { id: 4, name: 'Expected future changes' },
  { id: 5, name: 'History of penalties/inspections' }
]

const Regulatory = () => {
  const [subcats, setSubcats] = useState(regSubcategories)

  const deleteSubcat = (id) => {
    setSubcats((subcats) => subcats.filter((subcat) => subcat.id !== id))
  }

  return (
    <div className="regulatory">
      {subcats.map((subcat, idx) => {
        return (
          <div className="regulatory-options" key={idx}>
            <Button disabled variant="outlined" className="regulatory-btn">
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

export default Regulatory
