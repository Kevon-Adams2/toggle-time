import { Component } from 'react';
import './App.css';
import EditToggle from './components/EditToggle';
import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      editStatus: true
    }

    this.updateEditStatus = this.updateEditStatus.bind(this)

  }

  updateEditStatus(val) {
    this.setState({ editStatus: val })
  }

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
