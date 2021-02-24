import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      mssg: "",
    };
  }

  handleChange = (event) => {
    this.setState({ mssg: event.target.value });
  };

  render() {
    let CharactersLeft = this.props.maxChars - this.state.mssg.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.mssg}
        />
        {CharactersLeft}
      </div>
    );
  }
}

export default TwitterMessage;
