/**
 * 
 * 
 * Example
 * {controlType:"radio",SuppressLabel:false,position:"left",label:"<small>",TextOne:"Hello I Am Abhay",TextTwo:"Hello Two"}
 * 
 * @param {*} param accepts a JSON obejct
 */
var clsCheckbox = function (param) {
    var _DisplayDiv;
    var _checkbox;
    var _checkboxLabel;
    var _textLabel;
    var _DisplayText;
    var _ToggelContainer;
    var _ToggelContainerClass;
    var _ToggleButton;
    var _ToggleText;
    var isActive = false;
    var _radioInput;
    var _checkboxClass;
    var _param;
    var _radioContainer;
    var _radioInput1;

    this.construct = function (param) {
        _param = param;

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

                _checkbox.click(() => {
                    isActive = !isActive;
                    _checkbox.prop('checked', isActive);

                    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)
                })
                this._SuppressLabel(_param.SuppressLabel, _param.position, _param.label)

                this.getter("checkbox");

                break;

            case 'switch':
                _ToggleContainer = $("<div>").addClass('toggle-container').addClass(!_param.SuppressLabel ? _ToggelContainerClass : "");
                _ToggleButton = $("<div>").addClass('toggle-button');
                _ToggleButton.attr('title', 'Do you smoke');

                _DisplayDiv.append(_ToggleContainer);
                _ToggleContainer.append(_ToggleButton);
                _DisplayDiv.append(_ToggleText);

                _ToggleContainer.click(() => {
                    console.log("Toggle Clicked")
                    isActive = !isActive;
                    _ToggleContainer.toggleClass('active', isActive);
                    _ToggleButton.toggleClass('active', isActive);

                    // this._ToggleTextFunction(isActive, TextOne, TextTwo)
                });
                this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo)
                this._SuppressLabel(_param.SuppressLabel, _param.position, _param.label);

                this.getter("switch");
                break;

            case 'radio':
                _radioContainer = $('<div>').addClass('radio-container');

                _radioInput1 = $('<input>').attr({ type: 'radio', id: 'success-outlined', name: "options-outlined" }).addClass("btn-check");

                var _radioInput2 = $('<input>').attr({ type: 'radio', id: 'danger-outlined', name: "options-outlined", autocomplete: "off" }).addClass("btn-check");
                _radioInput2.addClass("btn-check")

                var _labelInput1 = $('<label>').attr({ for: "success-outlined", class: "btn btn-outline-success" }).text("No I don't Smoke");
                var _labelInput2 = $('<label>').attr({ for: "danger-outlined", class: "btn btn-outline-danger" }).text("Yes I Smoke");

                _radioContainer.append(_radioInput1, _labelInput1, '<br>', _radioInput2, _labelInput2);
                _DisplayDiv.append(_radioContainer);

                // console.log($('input[name="options-outlined"]:checked').val());
                this.getter("radio")
                break;
        }


    }
    // this.CheckBoxValue = function (param) {
    //     if (param == 1 || param == true) {
    //         _checkbox.prop('checked', true)
    //     }
    //     else if (param == 0 || param == false)
    //         _checkbox.prop('checked', false)
    //     this._ToggleTextFunction()
    // }

    this._ToggleTextFunction = function (isActive, TextOne, TextTwo) {
        _DisplayText?.text((_checkbox?.is(":checked") || isActive) ? TextOne : TextTwo)
        _DisplayDiv.append(_DisplayText);
    }

    this._SuppressLabel = function (SuppressLabel, position, label) {
        if (!SuppressLabel) {
            _DisplayText = $(label).addClass(position);
            _DisplayDiv.append(_DisplayText);
        }
    }

    this.getter = function (param) {
        if (param == 'checkbox' || param == 'switch')
            return isActive
        // else if (param == 'radio')
        //     return $('input[name="options-outlined"]:checked').val()

    }

    /**
     * This returns the value
     * @returns boolean - True if checked
     */
    this.val = () => {
        switch (_param.controlType) {
            case 'checkbox':
                return _checkbox.prop('checked');

            case 'switch':
                return _ToggleContainer.hasClass("active");

            case 'radio':
                return _radioInput1[0].checked;
            //console.log(_radioInput1.isC);
        }
    }

    this.construct(param);


}