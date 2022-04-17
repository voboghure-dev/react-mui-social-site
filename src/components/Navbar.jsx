import {
  AccountBalance,
  Mail,
  Notifications,
  Search,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const StyledIcons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const StyledUserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Dashboard
        </Typography>
        <AccountBalance sx={{ display: { xs: 'block', sm: 'none' } }} />
        <StyledSearch>
          <Search sx={{ color: '#ccc' }} />
          <InputBase placeholder='Search' />
        </StyledSearch>
        <StyledIcons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </StyledIcons>
        <StyledUserBox>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
          <Typography>Tapan</Typography>
        </StyledUserBox>
      </StyledToolbar>
    </AppBar>
  );
}
