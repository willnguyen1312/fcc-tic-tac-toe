/* eslint react/no-unused-state: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, Radio } from 'react-bootstrap'

const values = ['X', 'O']
export default class PickTypeModal extends React.Component {
  state = {
    userPick: 'X',
    botPick: 'O',
  }
  handleClose = () => {
    const { onHide } = this.props
    onHide(this.state)
  }
  handle = (e) => {
    const val = e.currentTarget.value
    this.setState({
      userPick: val,
      botPick: values.filter(x => x !== val)[0],
    })
  }
  render = () => {
    const jPick = values.indexOf(this.state.userPick)
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Your Kind</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            {values.map((value, i) => (
              <Radio
                checked={i === jPick}
                key={i}
                name="Pick"
                onClick={this.handle}
                inline
                value={value}
              >
                {value}
              </Radio>
            ))}
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

PickTypeModal.propTypes = {
  onHide: PropTypes.func.isRequired,
}
