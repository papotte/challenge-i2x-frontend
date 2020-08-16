import React, {Component} from 'react'
import PropTypes from 'prop-types'
import KeywordsInput from './KeywordsInput'

export default class Toolbar extends Component {
  static propTypes = {
    phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
    actions: PropTypes.object.isRequired,
  }

  render() {
    const {phrases, actions} = this.props
    return <div className={'px-2'}>
      <KeywordsInput phrases={phrases}
                     onChange={actions.changePhrases}/>
    </div>
  }

}
