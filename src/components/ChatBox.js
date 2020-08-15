import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ChatBox extends Component {
  static propTypes = {
    phrases: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    const values = this.props.phrases ? this.props.phrases.join('\n') : ''
    return (<div>
    <textarea
        onChange={this.handleChange}
        value={values}
        cols="30"
        rows="10"/>
    </div>)
  }

}
