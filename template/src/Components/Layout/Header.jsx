import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ authStatus }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>

          {authStatus && (
            <IconButton
              edge="start"
              color="inherit"
              component={Link}
              to="/profile"
            >
              <UserIcon />
            </IconButton>
          )}
          <Button component={Link} color="inherit" to="/login">
            {authStatus ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
