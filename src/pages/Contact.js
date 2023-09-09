import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 5, ml: 10, "& h4": {fontWeight: "bold", mb: 2}}}>
        <Typography variant='h4'>
          Contact Us
        </Typography>
        <p>
        Nestled in the heart of the bustling city, "La Maison de Saveurs" is a culinary oasis that beckons food enthusiasts from far and wide. With a rich history dating back to the early 20th century, this restaurant has established itself as a beacon of gastronomic excellence. As you step through the ornate, wrought-iron gates, you are transported into a world of sensory delight. The elegant façade of the restaurant exudes timeless charm, its ivy-covered walls hinting at the culinary secrets that lie within. Upon entering, you are greeted by warm, dimly lit interiors that evoke a sense of intimacy and sophistication.
        </p>
      </Box>
      <Box sx={{ m : 4, width:"600px", ml: 10, "@media (max-width: 600px":{
        width: "300px"
      } }}>
        <TableContainer component={Paper}>
        <Table aria-label='contact table'>
         <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:"black", color:"white"}} align='center'>
              Contact Details
            </TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          <TableRow>
            <TableCell>
            <SupportAgentIcon sx={{color: "red", pt: 1.3}}/> 1800-000-00 (Toll-Free)
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
            <MailIcon sx={{color: "blue", pt: 1.3}}/> 123@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
            <CallIcon sx={{color: "green", pt: 1.3}}/> 987654321
            </TableCell>
          </TableRow>
         </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
