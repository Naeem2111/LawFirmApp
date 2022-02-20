import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import './Diligence.scss'

const diligenceSubcategories = [
  { id: 1, name: 'RMF' },
  { id: 2, name: 'RBA' },
  { id: 3, name: 'Risk Assessment' },
  { id: 4, name: 'KYC/CDD/ODD' },
  { id: 5, name: 'Simplified Due Diligence (SiDD)' },
  { id: 6, name: 'Customer Risk Profiling' }
]

const Diligence = () => {
  const [subcats, setSubcats] = useState(diligenceSubcategories)

  const deleteSubcat = (id) => {
    setSubcats((subcats) => subcats.filter((subcat) => subcat.id !== id))
  }

  return (
    <div className="diligence">
      {subcats.map((subcat, idx) => {
        return (
          <div className="diligence-options" key={idx}>
            <Button disabled variant="outlined" className="diligence-btn">
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

export default Diligence
