import React, { Component } from 'react'
import { Link, Prompt, withRouter } from 'react-router-dom'
import { Button } from 'react-weui'

import emitter from '../../utils/event'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  toList = () => {
    this.props.history.push('/list')
  }
  componentDidMount() {
    setTimeout(() => {
      emitter.emit("callMe","Hello")
      console.log('call')
    },3000)
  }
  render() {
    return (
      <div className='Home'>
        <h1>Home</h1>

        <Button onClick={this.toList}>列表</Button>
        <Prompt
          when={true}
          message={location => `你确定要去 ${location.pathname}`}
        />
      </div>
    )
  }
}


export default withRouter(Home)
