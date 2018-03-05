/* eslint react/jsx-no-target-blank: 0 */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Info from './components/Info'
import Field from './components/Field'
import Footer from './components/Footer'
import './App.css'

/** ***** SIMPLE LOGIC ******* */

// initial state of the board
let fields = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

function checkMove(rowNum, colNum, info) {
  // if the game is over, start again
  if (info !== '') {
    fields = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    return { fields, info: '' }
  }
  // check player's current move
  const blankFields = []
  let score = [0, 0, 0, 0]
  if (fields[rowNum][colNum] === 0) {
    fields[rowNum][colNum] = 1
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (fields[i][j] === 0) blankFields.push([i, j])
      }
      score[0] += fields[rowNum][i]
      score[1] += fields[i][colNum]
      if (rowNum === colNum) score[2] += fields[i][i]
      if (rowNum + colNum === 2) score[3] += fields[i][2 - i]
    }
    if (score.indexOf(3) !== -1) {
      return { fields, info: 'You Won' }
    }
  } else {
    return { fields, info: '' }
  }
  // if there are still empty fields, choose one randomly and check for victory
  if (blankFields.length > 0) {
    const randomIndex = Math.floor(Math.random() * blankFields.length)
    const chosenRow = parseInt(blankFields[randomIndex][0], 10)
    const chosenCol = blankFields[randomIndex][1]
    fields[chosenRow][chosenCol] = -1
    score = [0, 0, 0, 0]
    for (let i = 0; i < 3; i += 1) {
      score[0] += fields[chosenRow][i]
      score[1] += fields[i][chosenCol]
      if (chosenRow === chosenCol) score[2] += fields[i][i]
      if (chosenRow + chosenCol === 2) score[3] += fields[i][2 - i]
    }
    if (score.indexOf(-3) !== -1) {
      return { fields, info: 'You Lost' }
    }
    // if there are no empty fields, end the game
  } else {
    const subinfor = 'Game Over'
    return { fields, subinfor }
  }
  return { fields, info }
}

/** **************** RENDERING VIEW WITH REACT ************************* */

class App extends Component {
  state = { fields: this.props.fields, info: '' }

  onFieldClicked = (e) => {
    const rowNum = +e.target.id[0]
    const colNum = +e.target.id[1]
    const retVal = checkMove(rowNum, colNum, this.state.info)
    this.setState({ fields: retVal.fields, info: retVal.info })
  }

  render = () => {
    const subFields = []
    this.state.fields.forEach((row, i) => {
      const rowNum = i
      row.forEach((val, index) => {
        let value
        const colNum = index
        const id = rowNum.toString() + colNum.toString()
        if (val === 0) value = ''
        else if (val === 1) value = 'x'
        else value = 'o'
        const ele = (
          <Field key={id} id={id} onClick={this.onFieldClicked}>
            {value}
          </Field>
        )
        subFields.push(ele)
      })
    })
    return (
      <Fragment>
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {subFields}
          <Info>{this.state.info}</Info>
          <Footer>
            Made by{' '}
            <a target="_blank" href="http://namnguyen.design">
              Nam Nguyen
            </a>
            {' - '}
            Inspired by{' '}
            <a target="_blank" href="https://codepen.io/marzelin">
              marzelin
            </a>
          </Footer>
        </div>
      </Fragment>
    )
  }
}

App.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default App
