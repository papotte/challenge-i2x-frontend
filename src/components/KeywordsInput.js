import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class KeywordsInput extends Component {
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
      <div className={'text-lg mb-4'}>Spotting phrases</div>
      <textarea className={'p-4 shadow-xl border-2 rounded-md'}
                onChange={this.handleChange}
                value={values}
                cols="30"
                rows="10"/>
    </div>)
  }

}
