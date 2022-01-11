import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import product from './product';

const ProductType = () => {

    const columns = [
        // { field: 'countryRanking', headerName: 'Country Ranking', width: 180, type: 'number', editable: true },
        { field: 'ProductType', headerName: 'Product Type/Name', type: 'text', editable: true,  width: 300, },
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
      
      const rows = product;

    return (
        
      <div style={{ height: 470, width: 900 }}>
        <DataGrid rows={rows} columns={columns}  />
      </div>
    );
  }
 
  
export default ProductType;