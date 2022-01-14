import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import product from './product'
import { Button, Box } from '@mui/material'

const columns = [
  // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
  {
    field: 'ProductType',
    headerName: 'Product Type/Name',
    type: 'text',
    editable: true,
    width: 300
  },
  {
    field: 'riskRating',
    headerName: 'Risk Rating',
    type: 'number',
    width: 180,
    editable: true
  },
  {
    field: 'riskLevel',
    headerName: 'Risk Level',
    type: 'text',
    width: 220,
    editable: true
  }
]

const ProductType = () => {
  const [rows, setRows] = useState(product)
  const [selectedIDs, setSelectedIDs] = useState([])

  const handleDeleteRow = () => {
    const newRows = [...rows]
    const filteredRows = newRows.filter(
      (element) => !selectedIDs.includes(element.id)
    )
    //https://issueexplorer.com/issue/mui-org/material-ui-x/2714
    setTimeout(() => setRows(filteredRows))

    console.log(selectedIDs)
  }

  const handleAddRow = () => {
    const newRows = [...rows]

    newRows.push({
      id: Object.keys(newRows).length + 1,
      IndustryDesciption: 'ProductType',
      riskRating: 1,
      riskLevel: 'Low'
    })
    setRows(newRows)
  }

  return (
    <div style={{ height: 600, width: 900 }}>
      <Box sx={{ height: 50 }}>
        <Button size="small" onClick={handleDeleteRow}>
          Delete selected
        </Button>
        <Button size="small" onClick={handleAddRow}>
          Add a row
        </Button>
      </Box>
      <Box sx={{ height: 550 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          selectionModel={selectedIDs}
          onSelectionModelChange={setSelectedIDs}
        />
      </Box>
    </div>
  )
}

export default ProductType
