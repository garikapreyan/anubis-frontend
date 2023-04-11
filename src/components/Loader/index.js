import * as React from 'react';
import {Box, CircularProgress, useTheme} from '@mui/material';

function Loader({ show }) {
  const styles = (theme) => ({
    container: {
      position: 'fixed',
      zIndex: '1000000',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
    circularProgress: {
      position: 'absolute',
      top: 'calc(50vh)',
      left: 'calc(50% - 20px)',
      color: theme.palette.primary.main,
    }
  });

  const theme = useTheme();
  const classes = styles(theme);
  return (
    <>
      {
        show && (
          <Box sx={classes.container}>
            <CircularProgress
              disableShrink
              sx={classes.circularProgress}
            />
          </Box>
        )
      }
    </>
  );
}

export default Loader;
