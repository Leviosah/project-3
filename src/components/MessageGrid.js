import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChatWindow from './ChatWindow';
import ChatList from './ChatList';
import MessageSearch from './MessageSearch';
import MessageSearchBtn from './MessageSearchBtn'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: "2%",
    marginTop: "2%",
    marginLeft: "2%",
    marginRight: "2%",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}><MessageSearch></MessageSearch></Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}><MessageSearchBtn></MessageSearchBtn></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h2>Message List</h2><ChatList></ChatList></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><ChatWindow></ChatWindow></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
