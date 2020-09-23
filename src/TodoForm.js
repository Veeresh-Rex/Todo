import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //     },
  //   },
}));

export default function BasicTextFields(props) {
  const todo = {
    title: '',
    details: '',
  };
  const { addOr } = props;
  const { setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValue] = React.useState(todo);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOr(values);
  };
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin='dense'
        id='title'
        name='title'
        value={values.title}
        onChange={handleChangeInput}
        label='Title'
        type='text'
        fullWidth
      />
      <TextField
        margin='dense'
        id='name'
        name='details'
        value={values.details}
        label='Discription'
        type='text'
        onChange={handleChangeInput}
        fullWidth
      />
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button type='submit' color='primary'>
          Add
        </Button>
      </DialogActions>
    </form>
  );
}
