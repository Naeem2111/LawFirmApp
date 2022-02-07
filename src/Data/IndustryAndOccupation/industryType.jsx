import { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import industry from './industry.jsx'
import { Button, Box } from '@mui/material'

const columns = [
  // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
  {
    field: 'IndustryDesciption',
    headerName: 'Industry Description',
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
    width: 220,
    editable: true
  }
]

const IndustryType = () => {
  const [rows, setRows] = useState(industry)
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
      IndustryDesciption: 'Industry',
      riskRating: 1,
      riskLevel: 'Low'
    })
    setRows(newRows)
  }

  return (
    <div style={{ height: 800, width: 900 }}>
      <Box sx={{ height: 50 }}>
        <Button size="small" onClick={handleDeleteRow}>
          Delete selected
        </Button>
        <Button size="small" onClick={handleAddRow}>
          Add a row
        </Button>
      </Box>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        checkboxSelection
        selectionModel={selectedIDs}
        onSelectionModelChange={setSelectedIDs}
      />
    </div>
  )
}

export default IndustryType
