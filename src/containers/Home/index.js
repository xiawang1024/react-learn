import React, { Component } from 'react'
import { Link, Prompt, withRouter } from 'react-router-dom'
import { Button } from 'react-weui'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  toList = () => {
    this.props.history.push('/list')
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
