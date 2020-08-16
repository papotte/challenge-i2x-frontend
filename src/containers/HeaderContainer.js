import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => ({
  started: state.asr.started,
})

export default connect(
    mapStateToProps,
)(Header)

