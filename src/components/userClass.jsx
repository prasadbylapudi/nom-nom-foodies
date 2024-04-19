import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.name} +userClass constructor called`);
    this.state = {
      count: 0,
      count2: 200,
    };
  }
  componentDidMount() {
    console.log(`${this.props.name} userclass componenetDidmount`);
  }
  componentDidUpdate() {
    console.log("userClass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("userClass componentWillUnmount");
  }

  render() {
    console.log(`${this.props.name} userClass render called`);
    return (
      <div>
        helo world
        <h1>{this.state.count2}</h1>
        <button
          onClick={() => this.setState({ count2: this.state.count2 + 1 })}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default UserClass;
