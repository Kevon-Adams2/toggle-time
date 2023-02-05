import { Component } from 'react';
import './App.css';
import EditToggle from './components/EditToggle';
import TextContainer from './components/TextContainer';
import FamilyChanger from './components/FamilyChanger';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fontFamily: "monospace",
      allowEdit: "true"
    };

    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);

  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={ this.updateEditStatus} />
          <FamilyChanger update={this.updateFamily} allowEdit={ this.state.allowEdit }/>
        </div>
        <div className="textArea">
          <TextContainer 
          fontFamily={ this.state.fontFamily}/>
        </div>
        
      </div>
    );
  }
}

export default App;
