import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../store/actions/userinfo'

import { Button } from 'react-weui'

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  updateUserInfo() {
    let { userinfoActions } = this.props
    userinfoActions.updateUserInfo({
      name: 'baodan',
      age: 0
    })
  }
  render() {
    let { match, userinfo } = this.props
    return (
      <div>
        <p>Detail，url参数：{match.params.id}</p>

        <Button onClick={this.updateUserInfo.bind(this)}>更新</Button>
        <p>{userinfo.name}</p>
        <p>{userinfo.age}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Detail)
)
