import React, { Component } from 'react';
import axios from 'axios';

export default
class Rooms extends Component {

  redirectionTime = () => {
    window.location.href = "/rooms/" + this.props.roomName;
  }

  onDeleteRoom = () => {
    this.props.deleteRoom(this.props.roomID, this.props.roomName);

  }

  render() {
    return (
      <tr>
        <th className="room-list">{this.props.roomNumber}</th>
        <td>
          <div className="field">
            <a><i className="fa fa-trash-o deleteIcon" onClick={this.onDeleteRoom}></i></a>
            <div className="room-name" onClick={this.redirectionTime}>
              {this.props.roomName}
            </div>
          </div>
        </td> 
      </tr>
    );
  }
}
