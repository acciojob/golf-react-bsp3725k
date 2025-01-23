import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // Determines if the ball should be rendered
      posi: 0, // Numerical position value for movement
      ballPosition: { left: "0px" }, // Ball's current style position
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the keydown event handler
  }

  // Start button click handler
  buttonClickHandler() {
    this.setState({ renderBall: true }); // Render the ball
  }

  // Keydown event handler
  handleKeyDown(event) {
    const { key, keyCode } = event;
    if (key === "ArrowRight" || keyCode === 39) {
      // Move the ball 5 pixels to the right
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }, // Update the ball's position
        };
      });
    }
  }

  // Add the keydown event listener
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Remove the event listener on component unmount
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Render the Start button or the ball based on the state
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
