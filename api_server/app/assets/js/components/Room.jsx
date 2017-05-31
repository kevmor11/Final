import React, { Component } from 'react';

export default
class Rooms extends Component {

  redirectionTime = () => {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  render() {
    return (
      <tr>
        <th className="room-list">{this.props.roomNumber}</th>
        <td>
          <p className="field">
            <a onClick={this.redirectionTime}>
              {this.props.roomName}
            </a>
          </p>
        </td>
      </tr>
    );
  }
}
