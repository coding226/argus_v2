import React from 'react';
import './Header.css';
import { withStyles } from '@mui/styles';
import { useHistory } from "react-router-dom";

import { Button, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
  root: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'white',
    height: 'auto',
    padding: '1rem',
    fontSize: '16px',
    'flex-wrap': 'wrap'
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
    border: 'none',
    'text-transform': 'none !important'
  },
  logout: {
    backgroundColor: 'transparent !important',
    border: 'none',
    'text-transform': 'none !important'
  },
  datefield: {
    background: 'white !important',
    width: 170,
    maxWidth: '49%',
    borderRadius: '3px',
  },
  inputStyle: {
    fontSize: '14px !important',
    lineHeight: '16px !important'
  }
}
function Header(props: any) {
  const { classes } = props;
  const history = useHistory();
  const retunHeaderPage = () => {
    return history.location.pathname === "/sustainment" ? 'Sustainment Twin' : 'Simulation Twin';
  }
  return (
    <header className={classes.root + " header gradient-background"}>
      <div className={classes.logo} >
        <strong>ARGUS</strong><span> - {retunHeaderPage()}</span>
      </div>
      <div className={classes.dateWraper} >
        <TextField
          type="date"
          size="small"
          defaultValue="Date Start"
          placeholder="Date Start"
          className={classes.datefield}
          InputProps={{
            className: classes.inputStyle
          }}
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
          InputProps={{
            className: classes.inputStyle
          }}
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
        >
          Profile
        </Button>
      </div>
      <div className={classes.logoutWraper} >
        <Button
          variant="contained"
          disableElevation
          className={classes.logout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default withStyles(styles)(Header);