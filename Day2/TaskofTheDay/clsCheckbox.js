/**
 * 
 * 
 * Example
 * {controlType:"radio",SuppressLabel:false,position:"left",label:"<small>",TextOne:"Hello I Am Abhay",TextTwo:"Hello Two"}
 * 
 * controlType : checkbox ||switch||radio
 * SuppressLabel : type Boolean, Displays label if false
 * Position : left||top , default right for label
 * label : accepts HTML tag 
 * TextOne/TextTwo : Sets Text content of HTML tag
 * 
 * @param {*} param accepts a JSON obejct
 */
var clsCheckbox = function (param) {
    var _DisplayDiv;
    var _checkbox;
    var _DisplayText;
    var _ToggleContainer;
    var _ToggelContainerClass;
    var _ToggleButton;
    var _ToggleText;
    var isActive = false;
    var _checkboxClass;
    var _param;
    var _radioContainer;
    var _radioInput1;
    var _radioInput2

    this.construct = function (param) {
        _param = param;
        isActive=_param.Default;
        if (_param.position == 'left') {
            _checkboxClass = 'CheckboxLeft';
            _ToggelContainerClass = 'toggle-containerLeft';
        } else if (_param.position == 'top') {
            _checkboxClass = 'CheckboxTop';
            _ToggelContainerClass = 'toggle-containerTop'
        }

        _DisplayDiv = $('<div>').addClass('DisplayDiv')
        $('body').append(_DisplayDiv)

        switch (_param.controlType) {
            case 'checkbox':
                _checkbox = $('<input>');
                _checkbox.attr('type', 'checkbox').addClass(!_param.SuppressLabel ? _checkboxClass : "");
                _checkbox.prop('checked', isActive);
                _checkbox.attr('title', 'Do you smoke');
                _DisplayDiv.append(_checkbox);

                this._SuppressLabel(_param.SuppressLabel, _param.position, _param.label);
                this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);

                _DisplayText?.text((_checkbox?.is(":checked") || isActive) ? _param.TextOne : _param.TextTwo);

                _checkbox.click(() => {
                    isActive = !isActive;
                    _checkbox.prop('checked', isActive);

                    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)
                })
                break;

            case 'switch':
                _ToggleContainer = $("<div>").addClass('toggle-container').addClass(!_param.SuppressLabel ? _ToggelContainerClass : "");
                _ToggleButton = $("<div>").addClass('toggle-button');
                _ToggleButton.attr('title', 'Do you smoke');

                _DisplayDiv.append(_ToggleContainer);
                _ToggleContainer.append(_ToggleButton);
                _ToggleContainer.toggleClass('active', isActive);
                    _ToggleButton.toggleClass('active', isActive);
                _DisplayDiv.append(_ToggleText);

                this._SuppressLabel(_param.SuppressLabel, _param.position, _param.label)
                this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)

                _ToggleContainer.click(() => {
                    console.log("Toggle Clicked")
                    isActive = !isActive;
                    _ToggleContainer.toggleClass('active', isActive);
                    _ToggleButton.toggleClass('active', isActive);
                    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)

                });
                break;

            case 'radio':
                var radioDefault;
                _radioContainer = $('<div>').addClass('radio-container');

                _radioInput1 = $('<input>').attr({ type: 'radio', id: 'success-outlined', name: "options-outlined", checked: isActive }).addClass("btn-check");
                _radioInput2 = $('<input>').attr({ type: 'radio', id: 'danger-outlined', name: "options-outlined", autocomplete: "off",checked: !isActive }).addClass("btn-check");
                _radioInput2.addClass("btn-check")

                var _labelInput1 = $('<label>').attr({ for: "success-outlined", class: "btn btn-outline-success" }).text("No I don't Smoke");
                var _labelInput2 = $('<label>').attr({ for: "danger-outlined", class: "btn btn-outline-danger" }).text("Yes I Smoke");

                _radioContainer.append(_radioInput1, _labelInput1, '<br>', _radioInput2, _labelInput2);
                _DisplayDiv.append(_radioContainer);
                break;

            default:
                alert("Please Enter Valid ControlType")
        }


    }

    /**
     * 
     * @param {*} isActive  returns boolean , True if checked 
     * @param {*} TextOne Element text content
     * @param {*} TextTwo Element text content
     */

    this._ToggleTextFunction = function (isActive, TextOne, TextTwo) {
        _DisplayText?.text((_checkbox?.is(":checked") || isActive) ? TextOne : TextTwo)
    }

    /**
     * 
     * @param {*} SuppressLabel  Displays label text according to SuppressLabel value
     * @param {*} position  It define the position of the label
     * @param {*} label  It sets the element to the label
     */

    this._SuppressLabel = function (SuppressLabel, position, label) {
        if (!SuppressLabel) {
            _DisplayText = $(label).addClass(position);
            _DisplayDiv.append(_DisplayText);
        }
    }

    /**
     * This returns the value
     * @returns boolean - True if checked
     */

    this.val = (param) => {
        if (param == undefined) {
            switch (_param.controlType) {
                case 'checkbox':
                    return _checkbox.prop('checked');

                case 'switch':
                    return _ToggleContainer.hasClass("active");

                case 'radio':
                    return $('input[name=options-outlined]:checked')[0].checked;

            }
        } else {
            switch (_param.controlType) {
                case 'checkbox':
                    _checkbox.prop('checked', param);
                    isActive = param;
                    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)
                    break;
                case 'switch':
                    param ? _ToggleContainer.addClass("active") : _ToggleContainer.removeClass("active");
                    isActive = param;
                    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)
                    break;
                case 'radio':
                    param ? _radioInput1.prop('checked', true) : _radioInput2.prop('checked', true);
            }
        }

    }

    this.construct(param);

}