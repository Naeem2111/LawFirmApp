import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import industry from './industry.jsx';
const IndustryType = () => {

    const columns = [
        // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
        { field: 'IndustryDesciption', headerName: 'Industry Description', type: 'text', editable: true,  width: 300, },
        {
          field: 'riskRating',
          headerName: 'Risk Rating',
          type: 'number',
          width: 180,
          editable: true,
        },
        {
          field: 'riskLevel',
          headerName: 'Risk Level',
          type: 'text',
          width: 220,
          editable: true,
        },

      ];
      
      const rows = industry;

    return (
        
      <div style={{ height: 800, width: 900 }}>
        <DataGrid rows={rows} columns={columns}  />
      </div>
    );
  }
 
  
export default IndustryType;