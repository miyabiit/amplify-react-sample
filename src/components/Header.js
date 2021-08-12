import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import AccoutCircleOutLinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header</Typography>
        <AccoutCircleOutLinedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;