import React from "react";
import User from "./user";
import UserClass from "./userClass";
class About extends React.Component {
  constructor() {
    super();
    console.log("about constructur called");
  }
  componentDidMount() {
    console.log("about componenetDidmount");
  }
  componentDidUpdate() {
    console.log("about componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("about componentWillUnmount");
  }
  render() {
    console.log("about render called");
    return (
      <div>
        About <br />
        <UserClass name={"first"} />
        <User />
      </div>
    );
  }
}

export default About;
