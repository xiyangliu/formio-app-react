'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormBuilder = require('./FormBuilder');

var _FormBuilder2 = _interopRequireDefault(_FormBuilder);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _camelCase2 = require('lodash/camelCase');

var _camelCase3 = _interopRequireDefault(_camelCase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormEdit = function (_Component) {
  _inherits(FormEdit, _Component);

  function FormEdit(props) {
    _classCallCheck(this, FormEdit);

    var _this = _possibleConstructorReturn(this, (FormEdit.__proto__ || Object.getPrototypeOf(FormEdit)).call(this, props));

    var form = props.form;


    _this.state = {
      form: form ? (0, _cloneDeep3.default)(form) : {
        title: '',
        name: '',
        path: '',
        display: 'form',
        type: 'form',
        components: []
      }
    };
    return _this;
  }

  _createClass(FormEdit, [{
    key: 'saveForm',
    value: function saveForm() {
      if (this.props.saveForm && typeof this.props.saveForm === 'function') {
        this.props.saveForm(this.state.form);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(path, event) {
      var target = event.target;

      var value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState(function (prev) {
        var form = (0, _cloneDeep3.default)(prev.form);
        (0, _set3.default)(form, path, value);

        // If setting title, autogenerate name and path as well.
        if (path === 'title' && !form._id) {
          form.name = (0, _camelCase3.default)(value);
          form.path = (0, _camelCase3.default)(value).toLowerCase();
        }

        return _extends({}, prev, {
          form: form
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var form = this.state.form;
      var saveText = this.props.saveText;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-2 col-md-4 col-sm-4' },
            _react2.default.createElement(
              'div',
              { id: 'form-group-title', className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'title', className: 'control-label field-required' },
                '\u6807\u9898'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control', id: 'title',
                placeholder: '\u8868\u5355\u6807\u9898',
                value: this.state.form.title,
                onChange: function onChange(event) {
                  return _this2.handleChange('title', event);
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-2 col-md-4 col-sm-4' },
            _react2.default.createElement(
              'div',
              { id: 'form-group-name', className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'name', className: 'control-label field-required' },
                '\u540D\u5B57'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'name',
                placeholder: '\u8868\u5355API Key',
                value: this.state.form.name,
                onChange: function onChange(event) {
                  return _this2.handleChange('name', event);
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-2 col-md-3 col-sm-3' },
            _react2.default.createElement(
              'div',
              { id: 'form-group-display', className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'name', className: 'control-label' },
                '\u663E\u793A\u7C7B\u578B'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement(
                  'select',
                  {
                    className: 'form-control',
                    name: 'form-display',
                    id: 'form-display',
                    value: this.state.form.display,
                    onChange: function onChange(event) {
                      return _this2.handleChange('display', event);
                    }
                  },
                  _react2.default.createElement(
                    'option',
                    { label: '\u8868\u5355', value: 'form' },
                    'Form'
                  ),
                  _react2.default.createElement(
                    'option',
                    { label: 'PDF', value: 'pdf' },
                    'PDF'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-2 col-md-3 col-sm-3' },
            _react2.default.createElement(
              'div',
              { id: 'form-group-type', className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'form-type', className: 'control-label' },
                '\u5B58\u50A8\u7C7B\u578B'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement(
                  'select',
                  {
                    className: 'form-control',
                    name: 'form-type',
                    id: 'form-type',
                    value: this.state.form.type,
                    onChange: function onChange(event) {
                      return _this2.handleChange('type', event);
                    }
                  },
                  _react2.default.createElement(
                    'option',
                    { label: '\u6570\u636E\u5E93', value: 'form' },
                    '\u6570\u636E\u5E93'
                  ),
                  _react2.default.createElement(
                    'option',
                    { label: '\u6587\u4EF6', value: 'resource' },
                    '\u6587\u4EF6'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-2 col-md-4 col-sm-4' },
            _react2.default.createElement(
              'div',
              { id: 'form-group-path', className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'path', className: 'control-label field-required' },
                '\u8DEF\u5F84'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'form-control',
                  id: 'path',
                  style: { 'textTransform': 'lowercase', width: '120px' },
                  value: this.state.form.path,
                  onChange: function onChange(event) {
                    return _this2.handleChange('path', event);
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'save-buttons', className: 'col-lg-2 col-md-5 col-sm-5 save-buttons pull-right' },
            _react2.default.createElement(
              'div',
              { className: 'form-group pull-right' },
              _react2.default.createElement(
                'span',
                { className: 'btn btn-primary', onClick: function onClick() {
                    return _this2.saveForm();
                  } },
                saveText
              )
            )
          )
        ),
        _react2.default.createElement(_FormBuilder2.default, {
          key: form._id,
          form: form,
          options: this.props.options,
          builder: this.props.builder
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.form && (prevState.form._id !== nextProps.form._id || prevState.form.modified !== nextProps.form.modified)) {
        return {
          form: (0, _cloneDeep3.default)(nextProps.form)
        };
      }

      return null;
    }
  }]);

  return FormEdit;
}(_react.Component);

FormEdit.propTypes = {
  form: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object,
  builder: _propTypes2.default.any,
  onSave: _propTypes2.default.func
};
exports.default = FormEdit;