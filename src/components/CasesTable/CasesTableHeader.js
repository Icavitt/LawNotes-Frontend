import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
  { id: 'client', type: 'string', disablePadding: true, label: 'Client' },
  { id: 'opposingParty', type: 'string', disablePadding: false, label: 'Opposing Party' },
  { id: 'issue', type: 'string', disablePadding: false, label: 'Issue' },
  { id: 'caseNumber', type: 'string', disablePadding: false, label: 'Case Number' },
  { id: 'lastActionTaken', type: 'string', disablePadding: false, label: 'Last Action Taken' },
  { id: 'actionDate', type: 'date', disablePadding: false, label: 'Action Date' },
  { id: 'deadline', type: 'string', disablePadding: false, label: 'Deadline' },
  { id: 'deadlineDue', type: 'date', disablePadding: false, label: 'DeadlineDue' },
];

export default (props) => {

  const {setOrder, setOrderBy, order, orderBy} = props;

  const onRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };  

  const createSortHandler = (property) => (event) => {
    onRequestSort(property);
  };
  return (
    <TableHead>
    <TableRow>
    {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          padding={headCell.disablePadding ? 'none' : 'default'}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
  )};