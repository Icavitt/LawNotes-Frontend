import React from 'react';
import CasesTable from './components/CasesTable/CasesTable';
import SplitPane from 'react-split-pane';
import './App.css';
import './utilities/arrayUtil'

function App() {
  return (
    <div className="App">
        <SplitPane split="vertical" defaultSize={'50%'}>
          <CasesTable/>
          <div style={{background: "red", padding: 20}}  />
        </SplitPane>
    </div>
  );
}

export default App;
