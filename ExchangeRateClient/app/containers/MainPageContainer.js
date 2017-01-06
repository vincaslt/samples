import React, { PropTypes } from 'react'
import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestStartUpdates } from '../actions'

class MainPageContainer extends React.Component {
  componentWillMount() {
    this.props.startRateUpdates()
  }

  render() {
    return <MainPage />
  }
}

MainPageContainer.propTypes = {
  startRateUpdates: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  startRateUpdates: bindActionCreators(requestStartUpdates, dispatch)
})



export default connect(null, mapDispatchToProps)(MainPageContainer)