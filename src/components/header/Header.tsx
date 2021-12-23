import React from 'react';
import './Header.css';
import { withStyles } from '@mui/styles';

import { Button, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    height: '60px',
    padding: '1rem',
    fontSize: '16px'
  },
  logo: {
    flexGrow: 1
  },
  dateWraper: {
    display: 'flex',    
    justifyContent: 'space-between',
    width: '360px'
  },
  profileWraper: {},
  logoutWraper: {},
  profileDropdown: {
    backgroundColor: 'transparent !important',
    border: 'none'
  },
  logout: {
    backgroundColor: 'transparent !important',
    border: 'none'
  },
  datefield: {
    background: 'white !important',
    width: 170,
    borderRadius: '3px' 

  }
}
function Header(props: any) {
  const { classes } = props;
  return (
    <header className={classes.root + " header gradient-background"}>
      <div className={classes.logo} >
        <strong>ARGUS</strong><span> - Simulation Twin</span>
      </div>
      <div className={classes.dateWraper} >
        <TextField
          type="date"
          size="small"
          defaultValue="Date Start"
          placeholder="Date Start"
          className={classes.datefield}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="date"
          size="small"
          defaultValue="Date Start"
          placeholder="Date End"
          className={classes.datefield}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.profileWraper} >
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          variant="contained"
          disableElevation
          endIcon={<KeyboardArrowDownIcon />}
          className={classes.profileDropdown}
          sx={{ textTransform: 'none' }}
        >
          Profile
        </Button>
      </div>
      <div className={classes.logoutWraper} >
        <Button
          variant="contained"
          disableElevation
          className={classes.logout}
          sx={{ textTransform: 'none' }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default withStyles(styles)(Header);