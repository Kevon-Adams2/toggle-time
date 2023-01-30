import React, { Component } from 'react';

export default class EditToggle extends Component {
    render() {
        return (
            <select className="ToggleSwitch" onChange={ (e) => this.props.update(e.target.value)}>
                <option value="true"> On </option>
                <option value="false"> Off </option>
            </select>
        )
    }
}