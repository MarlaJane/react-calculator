import React, { useState } from 'react'

export default () => {
  const [firstInteger, useFirstInteger] = useState('')
  const [secondInteger, useSecondInteger] = useState('')
  const [operator, useOperator] = useState('+')
  const [answer, giveAnswer] = useState('')
  const [error, giveError] = useState('')

  const isValidCalculation = () => !Number.isNaN(Number(firstInteger)) &&
    !Number.isNaN(Number(secondInteger)) &&
    firstInteger !== '' &&
    secondInteger !== ''

  const calculateAnswer = () => {
    if (!isValidCalculation()) {
      giveAnswer('')
      return giveError('Cat got your tongue? Please provide a valid number!')
    }

    giveError('')
    giveAnswer('')

    switch (operator) {
      case '+':
        return giveAnswer(Number(firstInteger) + Number(secondInteger))
      case '-':
        return giveAnswer(Number(firstInteger) - Number(secondInteger))
      case '*':
        return giveAnswer(Number(firstInteger) * Number(secondInteger))
      case '/':
        return giveAnswer(Number(firstInteger) / Number(secondInteger))
      default:
        return giveError('We have a puurrr-oblem! Please choose a valid operator!')
    }
  }

  return (
    <div className="calculator">
      <div className="title">React Calculator</div>
      <div className="form">
        <input
          type="text"
          name="firstInteger"
          value={firstInteger}
          onChange={event => useFirstInteger(event.target.value)}
        />
        <select name="integer" value={operator} onChange={event => useOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          name="secondInteger"
          value={secondInteger}
          onChange={event => useSecondInteger(event.target.value)}
        />
        <button type="button" aria-label="equals" onClick={calculateAnswer}>=</button>
        <input value={answer} disabled />
      </div>
      <div className="error">{error}</div>
    </div>
  )
}
