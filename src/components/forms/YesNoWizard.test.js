import React from 'react';
import ReactDOM from 'react-dom';
import { YesNoWizard, YesNoQuestion } from './YesNoWizard';

describe('YesNoWizard', () => {
  it('renders YesNoWizard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YesNoWizard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expects YesNoWizard to return: "Expected children for YesNoWizard."', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YesNoWizard />, div);

    expect(div.textContent).toEqual("Expected children for YesNoWizard.");

    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('YesNoQuestion', () => {
  it('renders YesNoQuestion without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YesNoQuestion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders YesNoQuestion without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YesNoQuestion />, div);

    expect(div.textContent).toEqual("Expected children for YesNoQuestion.");

    ReactDOM.unmountComponentAtNode(div);
  });
})
