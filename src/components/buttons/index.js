import React from 'react';
import { send } from "services/analytics";

export default class Button extends React.Component {
    
    handleClick = () => {
        if (this.props.event) {
            send(this.props.event);
        }

        if (this.props.url) {
            window.location.href = this.props.url;
        }
    }

    render() {
        return <button id={this.props.id} onClick={this.handleClick} disabled={this.props.disabled}>{this.props.children}</button>;
    }
}

Button.defaultProps = {
    id: 'button_' + new Date().getTime(),
}

export function ContinueButton(props) {
    return <Button id={props.id} disabled={props.disabled}>{props.children}</Button>;
}

ContinueButton.defaultProps = {
    id: "continueButton_" + new Date().getTime(),
    disabled: true,
    children: "Continue",
}
