import './Risktables.scss'
//import { Grid } from '@mui/material'
import { useState } from 'react'
import Tablist from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import { TabContext } from '@mui/lab'
import Country from '../../Data/Country/country.jsx'
import CustomerType from '../../Data/CustomerType/customerType'
import IndustryType from '../../Data/IndustryAndOccupation/industryType'
import LegalForm from '../../Data/LegalForm/legalform'
import ProductType from '../../Data/ProductType/productType'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import OccupationType from '../../Data/Occupation/OccupationType'
const Risktables = () => {
  const [tabListValue, setValue] = useState('Country')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="risktables">
      <h1>Risk Factors</h1>
      <TabContext value={tabListValue}>
        <Tablist value={tabListValue} onChange={handleChange}>
          <Tab label="Country" value="Country" />
          <Tab label="Customer Type" value="Customer Type" />
          <Tab label="Industry" value="Industry" />
          <Tab label="Occupation" value="Occupation" />
          <Tab label="Legal Form" value="Legal Form" />
          <Tab label="Product Type" value="Product Type" />
        </Tablist>
        <TabPanel value="Country">
          <Country />
        </TabPanel>
        <TabPanel value="Customer Type">
          <CustomerType />
        </TabPanel>
        <TabPanel value="Industry">
          <IndustryType />
        </TabPanel>
        <TabPanel value="Occupation">
          <OccupationType />
        </TabPanel>
        <TabPanel value="Legal Form">
          <LegalForm />
        </TabPanel>
        <TabPanel value="Product Type">
          <ProductType />
        </TabPanel>
      </TabContext>

      <Button component={RouterLink} to="/home">
        Return to Settings
      </Button>
    </div>
  )
}

export default Risktables
