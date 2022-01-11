import './Risktables.scss'
//import { Grid } from '@mui/material'
import * as React from 'react';
import Tablist from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel'
import { TabContext } from '@mui/lab';
import Country from '../../Data/Country/country.jsx';
import CustomerType from '../../Data/CustomerType/customerType';
import IndustryType from '../../Data/IndustryAndOccupation/industryType';
import LegalForm from '../../Data/LegalForm/legalform';
import ProductType from '../../Data/ProductType/productType';

const Risktables = () => {

const [value, setValue] = React.useState("Country");

const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="risktables">
      <h1>risktables</h1>
      <TabContext value={value}>
      <Tablist value={value} onChange={handleChange} >
        <Tab label="Country" value="Country" />
        <Tab label="Customer Type" value="Customer Type" />
        <Tab label="Industry and Occupation" value="Industry and Occupation" />
        <Tab label="Legal Form" value="Legal Form"/>
        <Tab label="Product Type" value="Product Type"/>
        </Tablist>
        <TabPanel value="Country"><Country></Country></TabPanel>
        <TabPanel value="Customer Type"><CustomerType/></TabPanel>
        <TabPanel value="Industry and Occupation"><IndustryType/></TabPanel>
        <TabPanel value="Legal Form"><LegalForm/></TabPanel>
        <TabPanel value="Product Type"><ProductType/></TabPanel>
        </TabContext>
    </div>
  )
}


export default Risktables
