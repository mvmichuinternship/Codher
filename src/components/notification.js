import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { theme } from './themes';
import { ThemeProvider } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    color: theme.palette.primary
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <ThemeProvider theme={theme}>
        <DialogTitle color="rosana" sx={{ m: 0, p: 2, bgColor:"rosana"}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
    </ThemeProvider>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen}  color="secondary" sx={{backgroundColor:"#FA9884",mt: "5%"}}>
        Enroll Now!
      </Button>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
          Advanced AI: Deep Reinforcement Learning in Python
        </BootstrapDialogTitle>
        <DialogContent dividers bgColor='violet'>
          <Typography gutterBottom >
            The Complete Guide to Mastering Artificial Intelligence using Deep Learning and Neural Networks!
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant ="outlined" color="secondary" sx={{backgroundColor:"#FA9884"}} href="/coursecurriculum" >
            Enroll Here!
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}