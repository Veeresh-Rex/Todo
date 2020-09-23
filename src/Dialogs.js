import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Dialogs(props) {
  const { children, open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  // const { addOne, setaddOne } = props;
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Add new item</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new item to the list </DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
