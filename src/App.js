import React from 'react';
import './App.css';
import Appbars from './Appbars';
import { makeStyles, Grid, Box } from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.root}
        width='100vw'
        height='100vh'
        justifyContent='center'
        bgcolor='#353b48'
        alignItems='center'>
        <Grid container item xs={6}>
          <Appbars />
        </Grid>
      </Box>
    </>
  );
}
