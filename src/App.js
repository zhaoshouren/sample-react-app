import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { YesNoQuestion, YesNoWizard } from 'components/forms/YesNoWizard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <YesNoWizard continueTo={() => alert('continueTo')}>
        <YesNoQuestion continueOn="yes" final={<p>Question 1: final</p>}>
          <p>Question 1: Lorem ipsum</p>
        </YesNoQuestion>
        <YesNoQuestion continueOn="yes" final={<p>Question 2: final</p>}>
          <p>Question 2: Lorem ipsum</p>
        </YesNoQuestion>
        <YesNoQuestion continueOn="no" final={<p>Question 3: final</p>}>
          <p>Question 3: Lorem ipsum</p>
        </YesNoQuestion>
      </YesNoWizard>
    </div>
  );
}

export default App;