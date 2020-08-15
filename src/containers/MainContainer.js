import {connect} from 'react-redux'
import * as ASRActions from '../actions'
import {bindActionCreators} from 'redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
  started: state.asr.started,
  phrases: state.asr.phrases,
  log: state.asr.log,
  messages: state.asr.messages,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ASRActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main)

