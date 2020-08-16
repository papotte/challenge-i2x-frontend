import {connect} from 'react-redux'
import * as ASRActions from '../actions'
import {bindActionCreators} from 'redux'
import Toolbar from '../components/Toolbar'

const mapStateToProps = state => ({
  phrases: state.asr.phrases,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ASRActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Toolbar)

