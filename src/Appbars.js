import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import Dialogs from './Dialogs';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    width: 1111,
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  icon: {
    color: 'red',
    '&:hover': {
      color: '#e55039',
    },
  },
  checkIcon: {
    color: 'green',
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const addOr = (values) => {
    setOpen(false);
    console.log(values);
    setMessages((oldItems) => {
      return [...oldItems, values];
    });
  };
  const handleClickOpen = () => {
    console.log('Clicked');
    setOpen(true);
    console.log(open);
  };
  const deleteItems = (id) => {
    setMessages((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <CssBaseline />
      <Paper square className={classes.paper} elevation={3} width={300}>
        <Typography className={classes.text} variant='h5' gutterBottom>
          TODO APP
        </Typography>
        <List className={classes.list}>
          {messages.map((itemval, index) => (
            <React.Fragment key={index}>
              <TodoList
                id={index}
                title={itemval.title}
                details={itemval.details}
                onSelect={deleteItems}
              />
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <Fab color='secondary' aria-label='add' className={classes.fabButton}>
            <IconButton onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Dialogs open={open} setOpen={setOpen}>
        <TodoForm addOr={addOr} setOpen={setOpen} />
      </Dialogs>
    </>
  );
}
