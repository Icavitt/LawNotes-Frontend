import { createSlice } from '@reduxjs/toolkit';
import cases from './testData';

export const counterSlice = createSlice({
  name: 'cases',
  initialState: cases,
  reducers: {
    createCase: (state, action) => {
      state.cases.push({...action.payload});
    },
  },
});


export const selectCaseRows = state => state.cases.map(x => {
  const lastActionTaken = x.actionHistory.slice()
    .sort((action1, action2) => new Date(action2.actionCreated) - new Date(action1.actionCreated))
    [0] ?? {action: "",actionCreated: "",};
  
  const closestDeadline = x.deadlines.slice()
    .where(deadline => new Date(deadline.dueDate) >= Date.now())
    .sort((deadline1, deadline2) => Date(deadline1.dueDate) - Date(deadline2.dueDate))
    [0] ?? {description: "",dueDate: "",};

  return {id: x.id,
    caseNumber: x.caseNumber,
    opposingParty: x.opposingParty,
    client: x.client,
    issue: x.issue,
    lastActionTaken: lastActionTaken.action,
    actionDate: lastActionTaken.actionCreated,
    deadline: closestDeadline.description,
    deadlineDate: closestDeadline.dueDate        
  };
} 
);

export default counterSlice.reducer;
