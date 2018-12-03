/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Prompt, withRouter } from 'react-router-dom'
import {
  Article,
  Form,
  FormCell,
  CellHeader,
  CellBody,
  CellFooter,
  Label,
  Input,
  VCode,
  Button,
  TextArea,
  Uploader,
  CityPicker,
  Gallery,
  GalleryDelete
} from 'react-weui'

import cnCity from './cnCity'

function Banner(props) {
  return (
    <img
      src='http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233'
      width='100%'
      height='160'
    />
  )
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demoFiles: [],
      city_show: false,
      city_value: ''
    }
  }
  renderGallery() {
    if (!this.state.gallery) return false

    let srcs = this.state.demoFiles.map(file => file.url)

    return (
      <Gallery
        src={srcs}
        show
        defaultIndex={this.state.gallery.id}
        onClick={e => {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation()
          this.setState({ gallery: false })
        }}
      >
        <GalleryDelete
          onClick={(e, id) => {
            this.setState({
              demoFiles: this.state.demoFiles.filter((e, i) => i != id),
              gallery: this.state.demoFiles.length <= 1 ? true : false
            })
          }}
        />
      </Gallery>
    )
  }
  render() {
    return (
      <Article>
        {this.renderGallery()}
        <Banner />
        <Form>
          <FormCell>
            <CellHeader>
              <Label>主题</Label>
            </CellHeader>
            <CellBody>
              <Input type='text' placeholder='请输入线索主题' />
            </CellBody>
          </FormCell>
          {/* <FormCell vcode>
            <CellHeader>
              <Label>Phone</Label>
            </CellHeader>
            <CellBody>
              <Input type='tel' placeholder='Enter your cellphone #' />
            </CellBody>
            <CellFooter>
              <Button type='vcode'>Send</Button>
            </CellFooter>
          </FormCell>
          <FormCell vcode>
            <CellHeader>
              <Label>VCode</Label>
            </CellHeader>
            <CellBody>
              <Input type='number' placeholder='Enter the code' />
            </CellBody>
            <CellFooter>
              <VCode src={vcodeSrc} />
            </CellFooter>
          </FormCell> */}
          <FormCell>
            <CellBody>
              <TextArea
                placeholder='请输入线索具体内容'
                rows='3'
                maxLength={200}
              />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellBody>
              <Uploader
                capture={undefined}
                title='上传图片'
                maxCount={6}
                files={this.state.demoFiles}
                onError={msg => alert(msg)}
                onChange={(file, e) => {
                  let newFiles = [...this.state.demoFiles, { url: file.data }]
                  this.setState({
                    demoFiles: newFiles
                  })
                }}
                onFileClick={(e, file, i) => {
                  console.log('file click', file, i)
                  this.setState({
                    gallery: {
                      url: file.url,
                      id: i
                    }
                  })
                }}
                lang={{
                  maxError: maxCount => `Max ${maxCount} images allow`
                }}
              />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>日期</Label>
            </CellHeader>
            <CellBody>
              <Input
                type='date'

                // onChange={e => console.log(e.target.value)}
              />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>区域</Label>
            </CellHeader>
            <CellBody>
              <Input
                type='text'
                value={this.state.city_value}
                onChange={e => this.setState({ city_value: e.target.value })}
                placeholder='填写区域信息'
              />
            </CellBody>
          </FormCell>
        </Form>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>联系人</Label>
            </CellHeader>
            <CellBody>
              <Input type='text' placeholder='请输入姓名' />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>手机号</Label>
            </CellHeader>
            <CellBody>
              <Input type='text' placeholder='请输入手机号' />
            </CellBody>
          </FormCell>
          <FormCell>
            <Button>提交</Button>
          </FormCell>
        </Form>
      </Article>
    )
  }
}

export default withRouter(Home)
