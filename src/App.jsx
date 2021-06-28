import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //TODO :: We should never set/mutate the state directly 
            deadline: "April 25, 2021"
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className="Clock-days">14 days</div>
                    <div className="Clock-hours">15 hours</div>
                    <div className="Clock-minutes">15 minutes</div>
                    <div className="Clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input placeholder='New date' />
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;