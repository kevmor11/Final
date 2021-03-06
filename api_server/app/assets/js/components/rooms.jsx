import React, { Component } from 'react';
import Room from './Room.jsx';
import AlertContainer from 'react-alert'
import axios from 'axios';

export default
class Rooms extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      roomName: "",
      rooms: props.rooms,
    }
  }

  alertOptions = {
    offset: 255,
    position: 'top right',
    theme: 'dark',
    time: 8000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Sorry, your Email or Password did not match our records. Please try again or Register.', {
      type: 'error',
    })
  }

  handleRoomNameChange = (event) => {
    this.setState({
      roomName: event.target.value
    });
  }

  enterKeyPress = (e) => {
    if(e.charCode==13){
      this.createRoomClick();
    }
  }

  deleteRoom = (roomID, roomName) => {
    let allRooms = [];
    this.state.rooms.forEach((room,i)=>{
      if (!(roomID === room.id)) {
        allRooms.push(room);
      }
    })
    this.setState({
      rooms:allRooms
  })
    axios.delete(`/api/rooms/${roomID}`);
  }
 
  createRoomClick = (event) => {
    this.setState({
      rooms:this.state.rooms.concat({ name: this.state.roomName})
    })
    axios.post(`/api/rooms`, {
      name: this.state.roomName
    })
    this.setState({
      roomName: ""
    })
  }

  render() {
    let allRooms;
    allRooms = this.state.rooms.map((room, i) => {
      return <Room key={i} roomID={room.id} roomName={room.name} roomNumber={i+1} deleteRoom={this.deleteRoom}/>
    })
    return (
      <div className="tile is-parent profile is-3 rooms">
        <article className="tile is-child box rooms">
        <div className="content">
            <p className="subtitle">Your Rooms</p>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="name"
                  id="roomName"
                  name="roomName"
                  value={ this.state.roomName }
                  onChange={ this.handleRoomNameChange }
                  placeholder="Room Name"
                  onKeyPress={this.enterKeyPress}
                />
              </p>
              <button className="button hover" onClick={this.createRoomClick}>Create</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Rooms</th>
                </tr>
              </thead>
              <tbody>
                {allRooms}
              </tbody>
            </table>
          </div>
        </article>
      {/*<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />*/}
      </div>
    );
  }
}