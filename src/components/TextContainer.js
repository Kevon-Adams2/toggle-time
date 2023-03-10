import React, { Component } from 'react';

export default class TextContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        };
        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({
            text: e.target.value,
        });
    }

    render() {
        return (
            <div className="textContainer">
                <textarea
                    style={ { fontFamily: this.props.fontFamily } }
                    onChange={this.updateText}
                    value={this.state.text}
                    placeholder="Enter text"
                    cols="90"
                    rows="30"
                    >
                </textarea>
            </div>
        )
    }
}