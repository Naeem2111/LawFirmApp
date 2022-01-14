import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import countries from './countries2'
const Country = () => {
  const columns = [
    // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
    {
      field: 'countryDescription',
      headerName: 'Country',
      type: 'text',
      editable: false,
      width: 180
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
    },
    {
      field: 'vendorRiskScore',
      headerName: 'Risk Score',
      type: 'number',
      width: 220,
      editable: true
    }
  ]

  const rows = countries

  return (
    <div style={{ height: 600, width: 900 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        id={(row) => row.countryRanking}
      />
    </div>
  )
}

export default Country
