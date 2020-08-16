import {connect} from 'react-redux'
import * as ASRActions from '../actions'
import {bindActionCreators} from 'redux'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  started: state.asr.started,
  phrases: state.asr.phrases,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ASRActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer)

