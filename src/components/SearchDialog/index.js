import React, {useState, useRef} from 'react';
import {
  useTheme,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const styles = (theme) => ({
  searchInput: {
    width: '100%'
  }
});

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function SearchDialog({
  open, onClose
}) {
  const theme = useTheme();
  const classes = styles(theme);
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <form>
        <DialogTitle>
          <TextField
            autoComplete="off"
            // onChange={handleSearchChange}
            sx={classes.searchInput}
            size="large"
            label="Search..."
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Search</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

// export default withStyles(styles)(searchDialog);
export default SearchDialog;
