"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialog(props: any) {
  const {
    children, 
    title, 
    execBtnText,
    handleExecBtn,
    isOpen,
    closeDialog
  } = props

  return (
    <React.Fragment>
      <MuiDialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          { title }
        </DialogTitle>
        <DialogContent>
          { children }
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={closeDialog}>キャンセル</Button>
          <Button variant="contained" onClick={handleExecBtn} autoFocus>
            { execBtnText }
          </Button>
        </DialogActions>
      </MuiDialog>
    </React.Fragment>
  );
}