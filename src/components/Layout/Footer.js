import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  return (
    <>
     <Box sx={{textAlign:'center', bgcolor: '#1A1A19', color: 'white', p: '3'}}>
        <Box sx={{ "& svg": {
            fontSize:"60px",
            cursor:"pointer",
            mr: 2, my: 3,
        },
        "& svg:hover":{
            color: 'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms',
        }
         }}>
            {/* Footer icons */}
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <GitHubIcon />
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)": {
            fontSize: '1rem',
        },}}>
            All Rights Reserved &copy; Nit  
        </Typography>
     </Box>
    </>
  )
}

export default Footer
