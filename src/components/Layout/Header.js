import React from 'react';
import { AppBar, Box, Typography, Toolbar, IconButton } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor: "black"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{
              mr: 2, display: {sm: 'none'}
            }}>
              <MenuIcon />
            </IconButton>
          <Typography color={"goldenrod"} variant='h6' component= "div" sx={{flexGrow: 1}}>
            <LunchDiningIcon />
             My Restro </Typography>
             <Box sx={{display:{xs:"none", sm:"block"}}}>
            <ul className= "navigation-menu">
              <li><Link to={"/"}>Home</Link></li>
              <li> <Link to={"/menu"}>Menu</Link></li>
              <li> <Link to={"/about"}>About</Link></li>
              <li>  <Link to={"/contact"}>Contact</Link></li>
            </ul>
             </Box>
          </Toolbar>
          
        </AppBar>
      </Box>
    </>
  )
}

export default Header;
