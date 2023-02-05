import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    CountUp = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    
    render() {
        return (
            <button onClick={ (e) => this.props.CountUp(e.target.value)} disabled={this.props.editStatus === 'false'}> {this.state.count} </button>
        )
    }
}

export default Counter;