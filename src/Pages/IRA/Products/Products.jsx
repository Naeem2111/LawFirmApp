import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import './Products.scss'

const productsSubcategories = [
  { id: 1, name: 'Product & Service Types' },
  { id: 2, name: 'Wire Transfers' }
]

const Products = () => {
  const [subcats, setSubcats] = useState(productsSubcategories)

  const deleteSubcat = (id) => {
    setSubcats((subcats) => subcats.filter((subcat) => subcat.id !== id))
  }

  return (
    <div className="products">
      {subcats.map((subcat, idx) => {
        return (
          <div className="products-options" key={idx}>
            <Button disabled variant="outlined" className="products-btn">
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

export default Products
