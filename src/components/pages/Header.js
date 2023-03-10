import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import { Tab, Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom';


function Header() {
    // const [value, setValue] = useState();
  //   value={value}
  //   onChange={(e, value) => setValue(value)}

  return (
      <React.Fragment>
          <AppBar sx={{ background: 'black' }}>
      
                <Toolbar >
                      <MovieIcon component={NavLink} to='/main'></MovieIcon> 
                    <Tab label='Movie' component={NavLink} to='/main'>   </Tab>
                  <Tabs sx={{ margin: 'auto' }}
                      textColor='inherit'
                      indicatorColor='secondary'
                      variant="p"
                      component="p"
                  >
                     
                      <Tab label='Movies List' component={NavLink} to='/movies-list'>   </Tab>
                      <Tab label='Serials' component={NavLink} to='/serials-list'>   </Tab>
                      <Tab label='TV Show' component={NavLink} to='/tvshow-list'> </Tab>
                          <Tab label='Collections'> </Tab>
                      </Tabs>
                  <Button sx={{marginLeft:'auto'}} variant='contained' color='secondary' >Logout</Button>
                 
              </Toolbar>
     
          </AppBar>
    </React.Fragment>
  );
}


export default Header