import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/components/Button.styles.scss'

const DEFAULT_TYPE = 'primary'
const DEFAULT_SIZE = 'large'

class Button extends React.Component {
  render() {
    const {
      type = DEFAULT_TYPE,
      size = DEFAULT_SIZE,
      testid,
      isDisabled,
      onClick,
      text,
      formType,
    } = this.props
    return (
      <button
        data-testid={testid}
        testid={testid}
        className={`button ${type} ${size}`}
        disabled={isDisabled}
        onClick={onClick}
        type={formType}
      >
        {text}
      </button>
    )
  }
}

export default Button

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  testid: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  formType: PropTypes.string,
}
