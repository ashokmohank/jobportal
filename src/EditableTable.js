import React from 'react';
import { upperFirst } from 'lodash/string';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  EditDialogColumn,
  SelectFieldColumn,
} from 'react-md';

import desserts from './constants/workflow'
const headers = Object.keys(desserts[0]).map((Sequence, i) => ({
  key: Sequence ,
  Sequence : upperFirst(Sequence),
  numeric: i > 1,
  selectColumnHeader: i === 1,
}));
const types =  [{
    type: 'ApplicationSubmission',
    type: 'HR-Review',

}];



const EditableTables = () => (
  <DataTable baseId="table-with-interactions">
    <TableHeader>
      <TableRow>
        {headers.map(({ Sequence , ...props }, i) => <TableColumn {...props} grow={i === 0}>{Sequence }</TableColumn>)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {desserts.map(({ Sequence , FromStage, ToStage, Assignee, Manager, DueDate, sodium, calcium, iron }) => (
        <TableRow key={Sequence }>
          <TableColumn >{Sequence} </TableColumn>
          <TableColumn string>{FromStage}</TableColumn>
          <TableColumn numeric>{ToStage}</TableColumn>
          <TableColumn numeric>{Assignee}</TableColumn>
          <TableColumn numeric>{Manager}</TableColumn>
          <TableColumn numeric>{DueDate}</TableColumn>
          <TableColumn numeric>{sodium}</TableColumn>
          <TableColumn numeric>{calcium}</TableColumn>
          <TableColumn numeric>{iron}</TableColumn>
        </TableRow>
      ))}
    </TableBody>
  </DataTable>
);

export default EditableTables;