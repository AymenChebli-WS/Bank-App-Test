import React, {useState} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Tooltip, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../redux/features/authSlice';

const UserNavMenu = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(setLogout());
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color:'white', }}>
                <AccountCircleIcon sx={{fontSize: 40,}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{display: 'flex',}}>Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{display: 'flex',}}>Notifications</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{display: 'flex',}}>Settings</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{display: 'flex',}} onClick={handleLogout}><LogoutIcon sx={{marginRight: 1}}/> Logout</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
  )
}

export default UserNavMenu