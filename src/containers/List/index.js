import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userinfoActions from '../../store/actions/userinfo'
import emitter from '../../utils/event'

import { Button, Article, Cells, Cell, CellBody, CellFooter } from 'react-weui'

class List extends Component {
  constructor(props) {
    super(props)
    this.state= {
      name:'wangxia'
    }
  }
  gotoDetail(item) {
    this.props.history.push(`/detail/${item}`)
  }
  updateUserInfo() {
    let { userinfoActions, userinfo } = this.props
    let { age } = userinfo
    age++
    userinfoActions.login({
      name: 'gyy',
      age
    })
  }
  componentDidMount() {
    console.log(this.props)
    // this.eventEmitter = emitter.addListener("callMe",(msg)=>{
    //   this.setState({
    //     name:'gyy'
    //   })
    // });
    emitter.on('callMe',(msg) => {
      alert(msg)
    })
  }
  componentWillUnmount() {
    
  }
  render() {
    const arr = [1, 2, 3]
    let { userinfo } = this.props
    return (
      <div className='list-wrap'>
        <Cells>
          {arr.map((item, index) => {
            return (
              <Cell
                key={index}
                onClick={this.gotoDetail.bind(this, item)}
                access
              >
                <CellBody>API jump to {item}</CellBody>
                <CellFooter />
              </Cell>
            )
          })}
        </Cells>

        <Article>
          <Button onClick={this.updateUserInfo.bind(this)}>修改</Button>
          <p>{userinfo.name}</p>
          <p>{userinfo.age}</p>
        </Article>
      </div>
    )
  }
  clickHandler(item) {
    console.log(this.props)
    this.props.history.push('/detail/' + item)
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo
  }
}

const mapDispatchToProps = dispatch => {
  return { userinfoActions: bindActionCreators(userinfoActions, dispatch) }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
)
