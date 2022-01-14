import { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import occupation from './occupation'

import { DataGrid } from '@mui/x-data-grid'
import QuickSearchToolbar from '../../Components/QuickSearchToolbar/QuickSearchToolbar'

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}
const columns = [
  //  {
  //     id: 1,
  //     occupationType: 'Abattoir Worker',
  //     riskScore: 2,
  //     riskLevel: 'Medium',
  //     impairmentClassification: 'D',
  //     category: 'Manual Labor'
  //   },
  {
    field: 'occupationType',
    headerName: 'Occupation Type',
    editable: true,
    width: 150
  },
  {
    field: 'riskRating',
    headerName: 'Risk Rating',
    type: 'number',
    width: 110,
    editable: true
  },
  {
    field: 'riskLevel',
    headerName: 'Risk Level',
    width: 110,
    editable: true
  }
]

const OccupationType = () => {
  const [rows, setRows] = useState(occupation)
  const [searchText, setSearchText] = useState('')
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
      occupationType: 'Actor',
      riskRating: 2,
      riskLevel: 'Medium',
      impairmentClassification: 'D',
      category: 'Media/Print/Entertainment'
    })
    setRows(newRows)
  }

  const requestSearch = (searchValue) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = rows.filter((row) => {
      return Object.keys(rows).some((field) => {
        return searchRegex.test(rows[field].toString())
      })
    })
    setRows(filteredRows)
  }

  useEffect(() => {
    setRows(rows)
  }, [rows])

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
          components={{ Toolbar: QuickSearchToolbar }}
          rows={rows}
          columns={columns}
          checkboxSelection
          selectionModel={selectedIDs}
          onSelectionModelChange={setSelectedIDs}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch('')
            }
          }}
        />
      </Box>
    </div>
  )
}

export default OccupationType
