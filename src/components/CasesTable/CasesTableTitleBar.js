import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';



export default () => {
    const classes = useToolbarStyles();    
  
    return (
      <Toolbar
        className={classes.root}
      >
          <Typography className={classes.title} align="left" variant="h6" id="tableTitle" component="div">
            Cases
        </Typography>
        <AddCaseButton />
      </Toolbar>
    );
  };

const AddCaseButton  = () => (
    <Tooltip title="Create New Case">
      <IconButton aria-label="create new case">
        <AddIcon />
      </IconButton>
    </Tooltip>
)

const useToolbarStyles = makeStyles((theme) => { return ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      marginBottom: "-15px",
    },
    title: {
      flex: '2 1 100%',
    },
  });});