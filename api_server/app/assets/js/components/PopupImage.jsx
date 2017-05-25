import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

export default
class PopupLink extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
  }

  close() {
    this.props.onClose();
  }

  render() {

    return (
      <div>

        <Modal show={this.props.isActive} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="api/posts" method="POST">
              <div className="field">
                <label htmlFor="image_file" className="label">Image</label>
                <p className="control">
                  <input className="input" type="file" id="image_file" />
                </p>
              </div>
              <div className="field">
                <label htmlFor="image_title" className="label">Content</label>
                <p className="control">
                  <input className="input" type="text" id="image_title" />
                </p>
              </div>
              <div className="field">
                <label htmlFor="image_description" className="label">Description</label>
                <p className="control">
                  <input className="input" type="text" id="image_description" />
                </p>
              </div>
              <p className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </p>
            </form>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}
