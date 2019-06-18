import React from 'react';

export function Question (props) {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

export class YesNoWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            value: '',
            disabled: true,
            final: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, disabled: false });
    }

    handleSubmit(event) {
        const value = this.state.value;
        const answers = this.state.answers;
        const question = this.props.children[answers.length];
        this.setState({ 
            answers: this.state.answers.concat(value), 
            disabled: true 
        });

        if (value !== question.props.continueOn) {
            this.setState({
                final: question.props.final
            });
        } else if (answers.length + 1 === this.props.children.length) {
            this.props.continueTo();
        } else {
            document.getElementsByName("radio").forEach(element => {
                if (element.checked) {
                    element.checked = false;
                }
            });
        }

        event.preventDefault();
    }

    render() {
        const index = this.state.answers.length;
        const final = this.state.final;

        if (final) {
            return final;
        }

        if (index < this.props.children.length) {
            return (
                <form onSubmit={this.handleSubmit}>
                    {this.props.children[index]}
                    <label>
                        <input name="radio" type="radio" value="yes" onChange={this.handleChange} />
                        Yes
                    </label><br />
                    <label>
                        <input name="radio" type="radio" value="no" onChange={this.handleChange} />
                        No
                    </label><br />
                    <button type="submit" disabled={this.state.disabled}>Continue</button>
                </form>
            );
        } 
        
        return null;
    }
}