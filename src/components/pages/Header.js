import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import { Tab, Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom';


function Header() {
    const [value, setValue] = useState();


  return (
      <React.Fragment>
          <AppBar sx={{background:'black'}}>
              <Toolbar>
                
                      <MovieIcon/>
                      Movie
                  <Tabs sx={{ margin: 'auto' }}
                      textColor='white'
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      indicatorColor='secondary'
                  >
                      {/* <NavLink to='/list'> Movies List </NavLink> */}
                      <NavLink to='/list' style={{color: 'white'}}> <Tab label='Movies List'>  </Tab></NavLink>
                      <Tab label='New'> </Tab>
                      <Tab label='Announcements'> </Tab>
                          <Tab label='Collections'> </Tab>
                      </Tabs>
                  <Button sx={{marginLeft:'auto'}} variant='contained' color='secondary' >Login</Button>
                  <Button sx={{marginLeft:'10px'}}  variant='contained' color='secondary'>Sign Up</Button>
              </Toolbar>
          </AppBar>
    </React.Fragment>
  );
}


export default Header