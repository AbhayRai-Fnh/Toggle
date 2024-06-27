/**
 * Example
 * {controlType:"radio",SuppressLabel:false,position:"left",label:"<small>",TextOne:"Hello I Am Abhay",TextTwo:"Hello Two"}
 *
 * controlType : checkbox ||switch||radio
 * SuppressLabel : type Boolean, Displays label if false
 * Position : left||top , default right for label
 * label : accepts HTML tag
 * TextOne/TextTwo : Sets Text content of HTML tag
 * _isActive : returns Boolean ,Default state of the controls
 * Default : Set the default value of controls
 * id : set the id for the radio controls
 *
 * @param {*} param accepts a JSON obejct
 */
let clsCheckbox = function (param) {
  var _baseContainer;
  var _DivDescription;
  var _DescriptionContainer;
  var _controlDiv;
  var _ToggleContainer;
  var _checkbox;
  var _radioInput1;
  var _radioInput2;
  var _labelInput1;
  var _labelInput2;
  var _DisplayText;
  var _ToggleButton;
  var _isActive;
  var _initParam;
  var _radioContainer;

  this.construct = function (param) {
    _initParam = param;
    if (this.validation(_initParam) == false) throw "Enter Valid Param";

    if (_initParam.Default) _isActive = _initParam.Default;
    else _isActive = false;

    if (!_initParam.SuppressLabel) _initParam.SuppressLabel = false;

    if (_initParam.controlType == undefined)
      _initParam.controlType = "checkbox";

    _baseContainer = $("<div>").addClass("DisplayDiv");
    _DivDescription = $("<div>");
    _DescriptionContainer = $("<small>").text(_initParam.Desc);
    _DivDescription.append(_DescriptionContainer);
    _initParam.controlType && _initParam?.Desc
      ? _baseContainer.append(_DivDescription)
      : "";
    $("body").append(_baseContainer);

    _controlDiv = $("<div>").addClass(
      _initParam.position == undefined || _initParam.position == "right"
        ? "containerDivClass"
        : ""
    );
    switch (_initParam.controlType) {
      case "checkbox":
        if (_initParam?.isEnabled) {
          _checkbox = $("<input>")
            .attr("type", "checkbox")
            .prop("checked", _isActive);
          if (_initParam.position == "left") _checkbox.addClass("CheckboxLeft");
          else _checkbox.addClass("CheckboxTop");
          _checkbox.attr("title", "Do you smoke");
          _controlDiv.append(_checkbox);
          _baseContainer.append(_controlDiv);
          _checkbox.click(() => {
            _isActive = !_isActive;
            _checkbox.prop("checked", _isActive);
            this.ToggleTextFunction();
            _checkbox.trigger("Event_Change", [_isActive]);
          });
        } else {
          _checkbox = $("<input>")
            .attr("type", "checkbox")
            .prop("disabled", true);
          if (_initParam.position == "left") _checkbox.addClass("CheckboxLeft");
          else _checkbox.addClass("CheckboxTop");
          _controlDiv.append(_checkbox);
          _baseContainer.append(_controlDiv);
        }
        break;
      case "switch":
        _ToggleContainer = $("<div>").addClass("toggle-container");
        if (_initParam.position == "left")
          _ToggleContainer.addClass("toggle-containerLeft");
        else _ToggleContainer.addClass("toggle-containerTop");
        _ToggleButton = $("<div>").addClass("toggle-button");
        _ToggleButton.attr("title", "Do you smoke");

        _controlDiv.append(_ToggleContainer);
        _ToggleContainer.append(_ToggleButton);
        _ToggleContainer.toggleClass("active", _isActive);
        _ToggleButton.toggleClass("active", _isActive);
        _baseContainer.append(_controlDiv);

        _ToggleContainer.on("click", () => {
          _isActive = !_isActive;
          _ToggleContainer.toggleClass("active", _isActive);
          _ToggleButton.toggleClass("active", _isActive);
          this.ToggleTextFunction();
          _ToggleContainer.trigger("Event_Change", [_isActive]);
        });

        break;

      case "radio":
        if (!_initParam.id) break; //checkthe condition in validation function
        _radioContainer = $("<div>")
          .addClass("radio-container")
          .attr("title", "Do you smoke");

        _radioInput1 = $("<input>")
          .attr({
            type: "radio",
            id: "success-outlined" + _initParam.id,
            name: "options-outlined" + _initParam.id,
            checked: _isActive,
          })
          .addClass("btn-check");
        _radioInput2 = $("<input>")
          .attr({
            type: "radio",
            id: "danger-outlined" + _initParam.id,
            name: "options-outlined" + _initParam.id,
            autocomplete: "off",
            checked: !_isActive,
          })
          .addClass("btn-check");
        _radioInput2.addClass("btn-check");

        _labelInput1 = $("<label>")
          .attr({
            for: "success-outlined" + _initParam.id,
            class: "btn btn-outline-success",
          })
          .text("");
        _labelInput2 = $("<label>")
          .attr({
            for: "danger-outlined" + _initParam.id,
            class: "btn btn-outline-danger",
          })
          .text("");

        _radioContainer.append(
          _radioInput1,
          _labelInput1,
          "<br>",
          _radioInput2,
          _labelInput2
        );
        _controlDiv.append(_radioContainer);
        _baseContainer.append(_controlDiv);

        _radioInput1.on("change", radioInputChange).bind(this);
        _radioInput2.on("change", radioInputChange).bind(this);
        break;
    }

    this.SuppressLabel();
    this.ToggleTextFunction();

    radioInputChange = (e) => {
      _isActive = e.currentTarget.id.startsWith("danger");
      this.ToggleTextFunction();
      // _radioContainer.trigger("Event_Change", [_isActive]);
    };

    /**
     * Event_Change - Event Handler fires whenever the value changes for all controlType: checkbox, switch & radio
     */
    $(_checkbox).on("Event_Change", Event_Change);
    $(_ToggleContainer).on("Event_Change", Event_Change);
    $(_radioInput1).on("Event_Change", Event_Change);
    $(_radioInput2).on("Event_Change", Event_Change);
  };

  Event_Change = (event, _isActive) => {
    console.log(
      `Element of type ${_initParam.controlType} changed to ${_isActive}`
    );
  };

  /**
   * It toogle the text according to true or false value of the controls
   * @param {*} _isActive  returns boolean , True if checked
   * @param {*} TextOne Element text content
   * @param {*} TextTwo Element text content
   */

  this.ToggleTextFunction = function () {
    _DisplayText?.text(
      _checkbox?.is(":checked") || _isActive
        ? _initParam.TextOne
        : _initParam.Texttwo
    );
    if (_initParam.controlType == "radio") {
      _labelInput1.text(_initParam.TextOne);
      _labelInput2.text(_initParam.Texttwo);
    }
  };

  /**
   * Displays the label for false and don't for true
   * @param {*} SuppressLabel  Displays label text according to SuppressLabel value
   * @param {*} position  It define the position of the label
   * @param {*} label  It sets the element to the label
   */

  this.SuppressLabel = function () {
    _DisplayText = $("<small>");
    if (!_initParam.SuppressLabel) {
      if (_initParam.position) _DisplayText.addClass(_initParam.position);
      if (_initParam.controlType != "radio") _controlDiv.append(_DisplayText);
    }
  };

  /**
   * sets the value as per param & gets the value for no param
   * @returns control with current value
   */

  this.val = (param) => {
    if (param == undefined) {
      switch (_initParam.controlType) {
        case "checkbox":
          return _checkbox.prop("checked");

        case "switch":
          return _ToggleContainer.hasClass("active");

        case "radio":
          return _radioInput1[0].checked ? true : false;
      }
    } else {
      switch (_initParam.controlType) {
        case "checkbox":
          _checkbox.prop("checked", param);
          _isActive = param;
          this.ToggleTextFunction();
          _checkbox.trigger("Event_Change", [_isActive]);
          break;
        case "switch":
          param
            ? _ToggleContainer.addClass("active")
            : _ToggleContainer.removeClass("active");
          _isActive = param;
          this.ToggleTextFunction();
          _ToggleContainer.trigger("Event_Change", [_isActive]);
          break;
        case "radio":
          param
            ? _radioInput1.prop("checked", true)
            : _radioInput2.prop("checked", true);
      }
    }
  };

  /**
   * Reset the value to default value
   */
  this.clear = function () {
    switch (_initParam.controlType) {
      case "checkbox":
        _checkbox.prop("checked", _initParam.Default);
        this.ToggleTextFunction();
        break;
      case "switch":
        _initParam.Default
          ? _ToggleContainer.addClass("active")
          : _ToggleContainer.removeClass("active");
        break;
      case "radio":
        _initParam.Default
          ? _radioInput1.prop("checked", true)
          : _radioInput2.prop("checked", true);
    }
  };

  /**
   * Edit the label text content
   * @param {*} TextOne label text content for true
   * @param {*} TextTwo label text content for false
   */

  this.label = function (TextOne, TextTwo) {
    _initParam.TextOne = TextOne;
    _initParam.TextTwo = TextTwo;
    this.ToggleTextFunction();
  };

  /**
   * checks the controls is checked or unchecked
   * @returns Boolean , Current state of the control true for checked and false for unchecked
   */

  this.isFilled = function () {
    switch (_initParam.controlType) {
      case "checkbox":
        return _isActive;
      case "switch":
        return _isActive;
      case "radio":
        return _radioInput1[0].checked || _radioInput2[0].checked;
    }
  };

  /**
   * sets text content for the tooltip mouseover
   * @param {*} toolTipText Edit the title text content on mmouseover
   */

  this.toolTipText = function (toolTipText) {
    switch (_initParam.controlType) {
      case "checkbox":
        _checkbox.attr("title", toolTipText);
        break;
      case "switch":
        _ToggleButton.attr("title", toolTipText);
        break;
      case "radio":
        _radioContainer.attr("title", toolTipText);
        break;
    }
  };

  /**
   * sets the property to true if any changes take place to the default value return Boolean
   */

  this.isDirty = function () {
    if (_initParam.Default != _isActive) _isActive = true;
    switch (_initParam.controlType) {
      case "checkbox":
        _checkbox.prop("checked", _isActive);
        break;
      case "switch":
        _isActive
          ? _ToggleContainer.addClass("active")
          : _ToggleContainer.removeClass("active");
        break;
      case "radio":
        _isActive
          ? _radioInput1.prop("checked", true)
          : _radioInput2.prop("checked", true);
        break;
    }
  };

  /**
   * gets the parent div
   * @returns the base container
   */

  this.getDesign = function () {
    return _baseContainer;
  };

  /**
   *checks the datatype of the initial param
   * @param {*} _initParam Initial param of the class
   * @returns Boolean ,false for Invalid & true for valid
   */

  this.validation = function (_initParam) {
    var _ValidVal;
    console.log(_initParam?.controlType);
    if (_initParam?.controlType) {
      if (
        typeof _initParam.controlType == "string" &&
        (_initParam.controlType == "checkbox" || "switch" || "radio")
      )
        _ValidVal = true;
      else _ValidVal = false;
    }

    if (_initParam?.position) {
      if (
        typeof _initParam.position == "string" &&
        (_initParam.position == "left" || "right")
      )
        _ValidVal = true;
      else _ValidVal = false;
    }

    if (_initParam?.controlType) {
      if (_initParam.id) {
        if (
          _initParam.controlType == "radio" &&
          typeof _initParam.id == "string"
        )
          _ValidVal = true;
        else _ValidVal = false;
      }
    }

    if (_initParam?.TextOne && _initParam?.TextTwo) {
      if (
        !(
          typeof _initParam.TextOne == "string" &&
          typeof _initParam.TextTwo == "string"
        )
      )
        _ValidVal = false;
      else _ValidVal = true;
    }

    if (_initParam?.Default && _initParam?.SuppressLabel) {
      if (
        !(
          typeof _initParam.Default == "boolean" &&
          typeof _initParam.SuppressLabel == "boolean"
        )
      )
        _ValidVal = false;
      else _ValidVal = true;
    }
    return _ValidVal;
  };

  this.construct(param);
};
