import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        name: '',
      },
      work: {
        job: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      general: {
        name: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      general: {
        name: '',
      },
    });
  };

  render() {
    const { general } = this.state;

    return (
      <div className="App">
        <General
          name={general.name}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
