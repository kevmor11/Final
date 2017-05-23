import React, { Component } from 'react';
import VideoThumbnail from './VideoThumbnail.jsx';

export default
class VideoThumbnailList extends Component {

  render() {
    var allNails = this.props.nails.map((nail, nail_index) => {
      return (<VideoThumbnail key={nail_index} nail={nail} pick={this.props.pick} />);
    });
    return (
      <div>
        {allNails}
      </div>
    );
  }
}
