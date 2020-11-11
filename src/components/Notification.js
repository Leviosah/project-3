import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar';

const useStyles = makeStyles({
  root: {
    width: "70%",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    position: "relative" ,
    display: "inline-block",
  },
  title: {
    fontSize: "8px",
    textAlign: "left"
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "20px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> <b>Nick-name</b> interaction type </Typography> 
          <hr></hr> 
      </CardContent>
    </Card>
  );
}