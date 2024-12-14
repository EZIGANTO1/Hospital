import React from 'react'
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2} }}>
        <Typography variant='h4'>Contact the Hospital</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem quia aperiam quae inventore, a reiciendis incidunt eum debitis nisi error voluptatum delectus dicta! Quae odit a dicta fugit tempora.
        </p>
      </Box>
      <Box sx= {{ m: 3, width: '600px', ml: 10, '@media (max-width:600px)':{
        width: '300px',
      } }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell 
                sx={{bgcolor:'black', color:'white'}}
                align='center'
                >
                  Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt:1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
            <TableRow>
            <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt:1 }} /> eziganto@yahoo.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                  <CallIcon sx={{ color: 'skyblue', pt:1 }} /> +234-8133587409
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact
