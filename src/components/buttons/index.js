import React from 'react';
import { EVENT, send } from "services/analytics";

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
        return <button id={this.props.id} onClick={this.handleClick}>{this.props.children}</button>;
    }
}

Button.defaultProps = {
    id: 'button_' + new Date().getTime(),
}

export function GetTranscriptButton(props) {
    return <Button id={props.id} event={EVENT.getTranscript} url={props.url}>{props.children}</Button>;
}

GetTranscriptButton.defaultProps = {
    id: "getTranscriptButton_" + new Date().getTime(),
    children: "Get Transcript",
    url: process.env.REACT_APP_GET_TRANSCRIPT_URL || (window.env && window.env.GET_TRANSCRIPT_URL)
}
