import {
  DarkMode,
  Drafts,
  ExpandLess,
  ExpandMore,
  Home,
  Inbox,
  Send,
  Settings,
  StarBorder,
} from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from '@mui/material';
import React, { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Dashboard
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Homepage' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Starred' />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
