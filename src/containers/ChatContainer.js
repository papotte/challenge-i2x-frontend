import {connect} from 'react-redux'
import * as ASRActions from '../actions'
import {bindActionCreators} from 'redux'
import Chat from '../components/Chat'

const mapStateToProps = state => ({
  log: state.asr.log,
  messages: state.asr.messages,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ASRActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Chat)

