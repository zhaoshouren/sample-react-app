import React from 'react';

export default class ConditionalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDisabled: true,
            continueDisabled: true,
            radioValue: '',
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    handleChange(event) {
        this.setState({ inputDisabled: event.target.value !== "yes" });
        this.handleContinue(event);
    }

    handleInput(event) {
        this.setState({ value: event.target.value });
        this.handleContinue(event);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleContinue(event) {
        this.setState({ continueDisabled: !(event.target.value === "no" || (event.target.type === "text" && event.target.value )) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="yesno1">
                    <input id="yesno1" name="yesno" type="radio" value="yes" onChange={this.handleChange} />
                    Yes
                </label><br />
                {this.props.children}
                <label htmlFor="conditionalvalue">
                    <span>Conditional Input</span>
                    <input id="conditionalvalue" type="text" onChange={this.handleInput} disabled={this.state.inputDisabled}/>
                </label><br />
                <label htmlFor="yesno2">
                    <input id="yesno2" name="yesno" type="radio" value="no" onChange={this.handleChange} />
                        No
                </label><br />
                <button type="submit" disabled={this.state.continueDisabled} default>Continue</button>
            </form>
        );
    }
}