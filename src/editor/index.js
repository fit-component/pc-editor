import React from 'react'
import ReactDOM from 'react-dom'
import AutoSizeTextarea from 'react-textarea-autosize'
import marked from 'marked'
import effect from './effect'
import classNames from 'classnames'
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

    handleToolbarClick(type) {
        effect(type, this.textarea, this.forceUpdate.bind(this))
    }

    // 因为jquery操作了dom,所以强制刷新
    forceUpdate() {
        this.setState({
            value: this.textarea.value
        })
    }

    render() {
        const {className, autoHeight, height, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let previewStyle = {
            height: !autoHeight ? height : null,
            overflowY: !autoHeight ? 'auto' : null
        }

        return (
            <div {...others} className={classes}>
                <div className="tool-bar">
                    <div className="i effect fa fa-header j-ul-list"
                         onClick={this.handleToolbarClick.bind(this,'header')}>
                        <ul className="f-bln">
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h1')}>h1
                            </li>
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h2')}>h2
                            </li>
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h3')}>h3
                            </li>
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h4')}>h4
                            </li>
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h5')}>h5
                            </li>
                            <li className="effect"
                                onClick={this.handleToolbarClick.bind(this,'h6')}>h6
                            </li>
                        </ul>
                    </div>
                    <div className="i f-hvc effect fa fa-bold"
                         onClick={this.handleToolbarClick.bind(this,'bold')}></div>
                    <div className="i f-hvc effect fa fa-italic"
                         onClick={this.handleToolbarClick.bind(this,'italic')}></div>
                    <div className="i f-hvc effect fa fa-link"
                         onClick={this.handleToolbarClick.bind(this,'link')}></div>
                    <div className="i f-hvc effect fa fa-quote-left"
                         onClick={this.handleToolbarClick.bind(this,'quote-left')}></div>
                    <div className="i f-hvc effect fa fa-code"
                         onClick={this.handleToolbarClick.bind(this,'code')}></div>
                    <div className="i f-hvc effect fa fa-tag"
                         onClick={this.handleToolbarClick.bind(this,'tag')}></div>
                    <div className="i f-hvc effect fa fa-list-ol"
                         onClick={this.handleToolbarClick.bind(this,'list-ol')}></div>
                    <div className="i f-hvc effect fa fa-list-ul"
                         onClick={this.handleToolbarClick.bind(this,'list-ul')}></div>
                    <div className="i f-hvc effect fa fa-minus"
                         onClick={this.handleToolbarClick.bind(this,'minus')}></div>


                </div>

                <div style={previewStyle}
                     className="textarea-preview-container">
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
    autoHeight: false,

    // @desc 高度,只有设置了 autoHeight 才有效
    height: 200
}

//<div className="i f-hvc effect fa fa-image dz-clickable"
//     onClick={this.handleToolbarClick.bind(this,'image')}></div>
//<div className="i f-hvc effect fa fa-table j-table">
//    <ToolbarTable/>
//</div>
//<div className="i f-hvc effect fa fa-save"
//onClick={this.handleToolbarClick.bind(this,'save')}></div>
//<div className="i f-hvc effect fa fa-paste"
//onClick={this.handleToolbarClick.bind(this,'paste')}></div>
