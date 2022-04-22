import React from 'react'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import { SidebarData } from './SidebarData';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Tooltip, IconButton, ListSubheader, Menu, MenuItem, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import UserNavMenu from './UserNavMenu';
import logo from './assets/LogoV1.png'


const drawerWidth = 240;

const Navbar = () => {
  return (
    <div>
        <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#04953d', }}>
        <Toolbar>
          <img src={logo} height="50"  alt='placeholder-logo' />
          
          <FormControl sx={{borderColor: 'white', outlineColor: 'white'}}>
          <OutlinedInput
            id="outlined-adornment-amount"
            value="Search"
            startAdornment={<SearchIcon />} 
            sx={{width: 500, height: 45,marginLeft: '32rem',color: 'white',outlineColor: 'white'}}
          />
          </FormControl>
          <Box sx={{flexGrow: 1}}/>
          <UserNavMenu />
        </Toolbar>
      </AppBar>
      
      <Drawer sx={{width: drawerWidth,flexShrink: 0,'& .MuiDrawer-paper': {width: drawerWidth,boxSizing: 'border-box',},}} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.path} style={{
              textDecoration: 'none',
              color: '#212121',
            }}>
            <ListItem button key={index} className={item.cName} sx={{}}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText><Typography variant="h4" sx={{fontSize: 14}}>
              {item.title}</Typography></ListItemText>
             </ListItem>
             </Link>
            )})}
        </List>
        <Divider />
        <ListSubheader component="div" align="center">
        @mennet {new Date().getFullYear()}
    </ListSubheader>
    <Typography variant="body2" color="text.secondary" align="center">BANQUE A DOMICILE
    </Typography>
      </Drawer>
    </div>
  )
}

export default Navbar