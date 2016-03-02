import React from 'react'
import './index.scss'

export default class Editor extends React.Component {
    render() {
        return (
            <div class="f-cb _namespace">
                <div class="f-wm tool-bar">
                    <div class="i f-hvc effect fa fa-header j-ul-list"
                         type="header">
                        <ul class="f-bln">
                            <li class="effect"
                                type="h1">h1
                            </li>
                            <li class="effect"
                                type="h2">h2
                            </li>
                            <li class="effect"
                                type="h3">h3
                            </li>
                            <li class="effect"
                                type="h4">h4
                            </li>
                            <li class="effect"
                                type="h5">h5
                            </li>
                            <li class="effect"
                                type="h6">h6
                            </li>
                        </ul>
                    </div>
                    <div class="i f-hvc effect fa fa-bold"
                         type="bold"></div>
                    <div class="i f-hvc effect fa fa-italic"
                         type="italic"></div>
                    <div class="i f-hvc effect fa fa-link"
                         type="link"></div>
                    <div class="i f-hvc effect fa fa-quote-left"
                         type="quote-left"></div>
                    <div class="i f-hvc effect fa fa-code"
                         type="code"></div>
                    <div class="i f-hvc effect fa fa-tag"
                         type="tag"></div>
                    <div class="i f-hvc effect fa fa-list-ol"
                         type="list-ol"></div>
                    <div class="i f-hvc effect fa fa-list-ul"
                         type="list-ul"></div>
                    <div class="i f-hvc effect fa fa-minus"
                         type="minus"></div>
                    <div class="i f-hvc effect fa fa-image dz-clickable"
                         type="image"></div>
                    <div class="i f-hvc effect fa fa-table j-table">
                        <table>
                            <tbody>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            <tr>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                                <td class="effect"
                                    type="table"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="i f-hvc effect fa fa-save"
                         type="save"></div>
                    <div class="i f-hvc effect fa fa-paste"
                         type="paste"></div>
                    <div class="i effect fa fa-maxcdn f-fr"
                         id="markdown-enable"></div>
                </div>

                <textarea id="editor"
                          maxlength="20000"
                          class="f-w12 f-btn f-mb10"
                          style="overflow: hidden; word-wrap: break-word; height: 200px;"/>
                
                <div class="f-usn">
                    <div class="f-w12 f-p20 preview border-bottom"></div>
                </div>
            </div>
        )
    }
}

Editor.defaultProps = {}

