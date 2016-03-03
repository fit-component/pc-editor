'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

require('font-awesome/css/font-awesome.css');

require('./index.css');

var _table = require('./toolbar/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 设置渲染模式
_marked2.default.setOptions({
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
});

var Editor = function (_React$Component) {
    _inherits(Editor, _React$Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Editor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.dom = _reactDom2.default.findDOMNode(this);
            var textareaArray = this.dom.getElementsByClassName('textarea');
            if (textareaArray.length > 0) {
                this.textarea = textareaArray[0];
            }
        }
    }, {
        key: 'handleTextareaChange',
        value: function handleTextareaChange(event) {
            console.log((0, _marked2.default)(event.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-editor-lib-editor' },
                _react2.default.createElement(
                    'div',
                    { className: 'tool-bar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'i effect fa fa-header j-ul-list',
                            type: 'header' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'f-bln' },
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h1' },
                                'h1'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h2' },
                                'h2'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h3' },
                                'h3'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h4' },
                                'h4'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h5' },
                                'h5'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    type: 'h6' },
                                'h6'
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-bold',
                        type: 'bold' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-italic',
                        type: 'italic' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-link',
                        type: 'link' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-quote-left',
                        type: 'quote-left' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-code',
                        type: 'code' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-tag',
                        type: 'tag' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-list-ol',
                        type: 'list-ol' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-list-ul',
                        type: 'list-ul' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-minus',
                        type: 'minus' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-image dz-clickable',
                        type: 'image' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'i f-hvc effect fa fa-table j-table' },
                        _react2.default.createElement(_table2.default, null)
                    ),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-save',
                        type: 'save' }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-paste',
                        type: 'paste' })
                ),
                _react2.default.createElement(_reactTextareaAutosize2.default, { onChange: this.handleTextareaChange.bind(this),
                    className: 'textarea' })
            );
        }
    }]);

    return Editor;
}(_react2.default.Component);

exports.default = Editor;


Editor.defaultProps = {
    // @desc 上传图片地址
    uploadUrl: '',

    // @desc 上传参数
    uploadParams: {}
};