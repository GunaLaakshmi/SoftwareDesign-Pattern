import SearchIcon from '@mui/icons-material/Search';
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <AppBar position="static" className="top-bar">
      <Toolbar>
        <Typography variant="h6" noWrap>
          AdminDashboard
        </Typography>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: 'inputRoot',
              input: 'inputInput',
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
