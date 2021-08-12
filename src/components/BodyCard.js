import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function BodyCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>*</span>;
  
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <StarBorderOutlinedIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
      <Typography className={ classes.title} color="textSecondary" gutterBottom>
        Word of Day
      </Typography>
      <Typography variant="h5" component="h2">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        adjective
      </Typography>
      <Typography variant="body2" conponent="p">
        well meaning and kindly.
        <br/>
        {'"a benevolent smile"'}
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
};

export default BodyCard;
