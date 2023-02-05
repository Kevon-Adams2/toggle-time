import React, { Component } from 'react';

export default class EditToggle extends Component {
    render() {
        return (
            <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) }>
                <option value="true"> Allow Edit </option>
                <option value="false"> Disable Edit </option>
            </select>
        )
    }
}