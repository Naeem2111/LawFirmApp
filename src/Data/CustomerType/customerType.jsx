import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import customer from './customer.jsx';
const CustomerType = () => {

    const columns = [
        // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
        { field: 'customerType', headerName: 'Customer Type', type: 'text', editable: true,  width: 180, },
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
      
      const rows = customer;

    return (
        
      <div style={{ height: 400, width: 900 }}>
        <DataGrid rows={rows} columns={columns}  />
      </div>
    );
  }
 
  
export default CustomerType;
