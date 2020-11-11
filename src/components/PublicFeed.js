import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar';

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginLeft: "5%",
    marginTop: "2%",
    position: "relative" ,
    display: "inline-block"
  },
  title: {
    fontSize: "8px",
    textAlign: "center"
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "16px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> Nick-Name</Typography> 
        <Typography variant="h5" component="h2" style = {{ textAlign: "left", fontSize: "20px"}}> 
          Entry Title
        </Typography>
        <Typography variant="body2" component="p" style = {{ textAlign: "left", marginBottom: ""}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        <br></br>
        <Typography vairant= "h3" component="h3" style ={{ marginLeft: "300px"}}>
        <Button>Comments</Button>
        </Typography>
        <hr></hr>
        </Typography>
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "16px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> Nick-Name</Typography>
        <Typography variant="h5" component="h2" style = {{ textAlign: "left", fontSize: "20px"}}> 
          Entry Title
        </Typography>
        <Typography variant="body2" component="p" style = {{ textAlign: "left", marginBottom: ""}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        <br></br>
        <Typography vairant= "h3" component="h3" style ={{ marginLeft: "300px"}}>
        <Button>Comments</Button>
        </Typography>
        <hr></hr>
        </Typography>
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "16px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> Nick-Name</Typography>
        <Typography variant="h5" component="h2" style = {{ textAlign: "left", fontSize: "20px"}}> 
          Entry Title
        </Typography>
        <Typography variant="body2" component="p" style = {{ textAlign: "left", marginBottom: ""}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        <br></br>
        <Typography vairant= "h3" component="h3" style ={{ marginLeft: "300px"}}></Typography>
        <Button>Comments</Button>
        <hr></hr>
        </Typography>
      </CardContent>
      <CardContent>
          <Avatar></Avatar>
          <Typography variant = "h6" component="h6" style = {{ textAlign: "Left", fontSize: "16px", marginLeft: "60px", marginTop: "-40px", marginBottom: "20px" }}> Nick-Name</Typography>
        <Typography variant="h5" component="h2" style = {{ textAlign: "left", fontSize: "20px"}}> 
          Entry Title
        </Typography>
        <Typography variant="body2" component="p" style = {{ textAlign: "left", marginBottom: ""}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        <br></br>
        <Typography vairant= "h3" component="h3" style ={{ marginLeft: "300px"}}></Typography>
        <Button>Comments</Button>
        <hr></hr>
        </Typography>
      </CardContent>
    </Card>
    
  );
}