import React from 'react';
import logo from './logo.svg';
import './App.css';
import YesNoWizard, { YesNoQuestion } from 'components/forms/YesNoWizard';
import ConditionalInput from 'components/forms/ConditionalInput'

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
        selected: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({ selected: event.target.value });
  }

  render() {

    const selections = [
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
      </YesNoWizard>,
      <form>
        <ConditionalInput/>
      </form>
    ];


    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sample React App</h1>
          <form>
            <select onChange={this.handleChange}>
              <option value="0">Yes/No Wizard</option>
              <option value="1">Conditional Input</option>
            </select>
          </form>
        </header>
        <article>
          {selections[this.state.selected]}
        </article>
      </div>
    );
  }
}

export default App;