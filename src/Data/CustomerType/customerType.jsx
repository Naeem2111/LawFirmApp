import { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button, Box } from '@mui/material'
import customer from './customer.js'

const columns = [
  // { field: 'id', 'customerType', 'riskRating','riskLevel'},
  // { field: 'id', 'customerType', 'riskRating','riskLevel'},
  {
    field: 'customerType',
    headerName: 'Customer Type',
    width: 180,
    editable: true
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
    width: 220,
    editable: true
  }
]

const CustomerType = () => {
  const [rows, setRows] = useState(customer)
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
      customerType: 'Customer',
      riskRating: 1,
      riskLevel: 'Low'
    })
    setRows(newRows)
  }

  return (
    <div style={{ height: 450, width: 900 }}>
      <Box sx={{ height: 50 }}>
        <Button size="small" onClick={handleDeleteRow}>
          Delete selected
        </Button>
        <Button size="small" onClick={handleAddRow}>
          Add a row
        </Button>
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          rows={rows}
          columns={columns}
          id={rows.id}
          checkboxSelection
          onSelectionModelChange={(ids) => {
            setSelectedIDs(ids)
            console.log(ids)
          }}
          //selectionModel={selectedIDs}
        />
      </Box>
    </div>
  )
}

export default CustomerType
