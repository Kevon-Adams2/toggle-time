import React, { Component } from 'react';

export default class EditToggle extends Component {
    render() {
        return (
            <select className="ToggleSwitch">
                <option value="true"> On </option>
                <option value="false"> Off </option>
            </select>
        )
    }
}