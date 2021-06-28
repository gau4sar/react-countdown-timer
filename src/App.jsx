import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: "April 25, 2021",
            newDeadline: ""
        }
    }

    changeDeadline() {
        // We never mutate or change state directly and always set it using the setState function
        this.setState({ deadline: this.state.newDeadline })
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
                    <input
                        placeholder='New date'
                        onChange={event => this.setState({ newDeadline: event.target.value })}
                    />
                    {/* We use anonymous function here to stop the code from being in a loop */}
                    <button onClick={() => this.changeDeadline()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }

}

export default App;