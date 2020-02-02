import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { onUserLogin, onUserLogout } from 'stores/actions/userAction';

const useStyles = makeStyles({
  container: {
    maxWidth: 300,
    margin: '20vh auto 0 auto',
    padding: 5
  },
  signinBtn: {
    width: '95%',
    margin: '0 auto'
  }
});

const Login = () => {
  const { username, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onUserLogout);
  }, []);

  const [credential, setCredential] = useState({
    username: username || '',
    password: ''
  });
  const classes = useStyles();
  const onFieldChange = e => {
    const { name, value } = e.target;
    setCredential(state => ({
      ...state,
      [name]: value
    }));
  };

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography gutterBottom variant="h6" color="primary">
          Login Page
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          value={credential.username}
          color="primary"
          label="Username"
          margin="dense"
          variant="outlined"
          name="username"
          onChange={onFieldChange}
          fullWidth
        />
        <br />
        <TextField
          value={credential.password}
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          name="password"
          onChange={onFieldChange}
          margin="dense"
        />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          className={classes.signinBtn}
          onClick={dispatch(onUserLogin(credential))}
        >
          Sign In
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
