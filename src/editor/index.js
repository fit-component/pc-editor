import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import AutoSizeTextarea from 'react-textarea-autosize'
import marked from 'marked'
import 'font-awesome/css/font-awesome.css'
import './index.scss'

import ToolbarTable from './toolbar/table'

// 设置渲染模式
marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: false,
    silent: false,
    langPrefix: 'prettyprint',
    smartypants: false,
    headerPrefix: '',
    xhtml: false
})

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        let textareaArray = this.dom.getElementsByClassName('textarea')
        if (textareaArray.length > 0) {
            this.textarea = textareaArray[0]
        }
    }

    handleTextareaChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="_namespace">
                <div className="tool-bar">
                    <div className="i effect fa fa-header j-ul-list"
                         type="header">
                        <ul className="f-bln">
                            <li className="effect"
                                type="h1">h1
                            </li>
                            <li className="effect"
                                type="h2">h2
                            </li>
                            <li className="effect"
                                type="h3">h3
                            </li>
                            <li className="effect"
                                type="h4">h4
                            </li>
                            <li className="effect"
                                type="h5">h5
                            </li>
                            <li className="effect"
                                type="h6">h6
                            </li>
                        </ul>
                    </div>
                    <div className="i f-hvc effect fa fa-bold"
                         type="bold"></div>
                    <div className="i f-hvc effect fa fa-italic"
                         type="italic"></div>
                    <div className="i f-hvc effect fa fa-link"
                         type="link"></div>
                    <div className="i f-hvc effect fa fa-quote-left"
                         type="quote-left"></div>
                    <div className="i f-hvc effect fa fa-code"
                         type="code"></div>
                    <div className="i f-hvc effect fa fa-tag"
                         type="tag"></div>
                    <div className="i f-hvc effect fa fa-list-ol"
                         type="list-ol"></div>
                    <div className="i f-hvc effect fa fa-list-ul"
                         type="list-ul"></div>
                    <div className="i f-hvc effect fa fa-minus"
                         type="minus"></div>
                    <div className="i f-hvc effect fa fa-image dz-clickable"
                         type="image"></div>
                    <div className="i f-hvc effect fa fa-table j-table">
                        <ToolbarTable/>
                    </div>
                    <div className="i f-hvc effect fa fa-save"
                         type="save"></div>
                    <div className="i f-hvc effect fa fa-paste"
                         type="paste"></div>
                </div>

                <div className="textarea-preview-container">
                    <AutoSizeTextarea onChange={this.handleTextareaChange.bind(this)}
                                      className="textarea"/>

                    <div className="preview"
                         dangerouslySetInnerHTML={{__html: marked(this.state.value)}}></div>
                </div>
            </div>
        )
    }
}

Editor.defaultProps = {
    // @desc 上传图片地址
    uploadUrl: '',

    // @desc 上传参数
    uploadParams: {},

    // @desc 是否自动拓展高度
    autoHeight: false
}

