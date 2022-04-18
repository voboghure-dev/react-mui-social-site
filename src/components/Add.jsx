import { Fab, Tooltip } from '@mui/material';
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';

export default function Add() {
  return (
    <>
      <Tooltip
        title='Delete'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}
