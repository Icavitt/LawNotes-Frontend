import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectCaseRows} from '../../redux/casesSlice/casesSlice';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CasesTable() {
  const classes = useStyles();
  const caseRows = useSelector(selectCaseRows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <Header />
        <TableBody>
          {caseRows.map((rowData) => (
            CaseRow(rowData)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Header = () => {
  return (
    <TableHead>
    <TableRow>
      <TableCell align="right">Client</TableCell>
      <TableCell align="right">Opposing Party</TableCell>
      <TableCell align="right">Issue</TableCell>
      <TableCell align="right">Case Number</TableCell>
      <TableCell align="right">Last Action Taken</TableCell>
      <TableCell align="left">Action Date</TableCell>
      <TableCell align="right">Deadline</TableCell>
      <TableCell align="left">Deadline Due</TableCell>
    </TableRow>
  </TableHead>
  )
};

const CaseRow = (row) =>  (
    <TableRow key={row.id}>

      <TableCell component="th" scope="row" align="right">{row.client}</TableCell>
      <TableCell align="right">{row.opposingParty}</TableCell>
      <TableCell align="right">{row.issue}</TableCell>
      <TableCell align="right">{row.caseNumber}</TableCell>
      <TableCell align="right">{row.lastActionTaken}</TableCell> 
      <TableCell align="left">{row.actionDate}</TableCell> 
      <TableCell align="right>">{row.deadline}</TableCell>
      <TableCell align="left>">{row.deadlineDate}</TableCell>
    </TableRow>
  )

