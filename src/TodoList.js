import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemAvatar, ListSubheader } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'red',
    '&:hover': {
      color: '#e55039',
    },
  },
  checkIcon: {
    color: 'green',
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function TodoList(props) {
  const classes = useStyles();
  return (
    <div>
      <ListSubheader className={classes.subheader}>{props.date}</ListSubheader>
      <ListItem>
        <ListItemAvatar>
          <CheckCircleOutlineIcon className={classes.checkIcon} />
        </ListItemAvatar>
        <ListItemText
          id={props.id}
          primary={props.title}
          secondary={props.details}
        />
        <IconButton
          onClick={() => {
            props.onSelect(props.id);
          }}>
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </ListItem>
    </div>
  );
}
