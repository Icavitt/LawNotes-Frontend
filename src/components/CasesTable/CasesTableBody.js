import React from 'react';
import { useSelector } from 'react-redux';
import {selectCaseRows} from '../../redux/casesSlice/casesSlice';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default (props) => {
    const {sort, comparator} = props;
    const caseRows = useSelector(selectCaseRows);
    return (
    <TableBody>
      {sort(caseRows, comparator)
      .map((rowData) => (
        CaseRow(rowData)
      ))}
    </TableBody>
  );}
  
  const CaseRow = (row) =>  (
      <TableRow key={row.id}>
  
        <TableCell component="th" scope="row" align="right">{row.client}</TableCell>
        <TableCell align="right">{row.opposingParty}</TableCell>
        <TableCell align="right">{row.issue}</TableCell>
        <TableCell align="right">{row.caseNumber}</TableCell>
        <TableCell align="right">{row.lastActionTaken}</TableCell> 
        <TableCell align="left">{new Date(row.actionDate).toLocaleDateString()}</TableCell> 
        <TableCell align="right>">{row.deadline}</TableCell>
        <TableCell align="left>">{new Date(row.deadlineDate).toLocaleDateString()}</TableCell>
      </TableRow>
    );