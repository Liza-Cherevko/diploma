import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LoginIcon  from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
     
    <>
          {/* <NavLink to="/auth">Login</NavLink>
      <NavLink to="/auth/logout">Logout</NavLink>
      <NavLink to="/admin">Admin Panel</NavLink></div> */}
        
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'text.secondary', color: 'background.paper', margin: 'auto' }}>
            
          <NavLink to="/auth">
              <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LoginIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Login"  />
      </ListItem>
              </NavLink> 
              
          <NavLink to="/auth/logout">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LogoutIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Logout" />
      </ListItem>
      </NavLink>  
    </List>
</>
     
  )
}

export default Landing