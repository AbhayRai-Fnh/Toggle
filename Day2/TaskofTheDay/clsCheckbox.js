/**
 * Example
 * {controlType:"radio",SuppressLabel:false,position:"left",label:"<small>",TextOne:"Hello I Am Abhay",TextTwo:"Hello Two"}
 *
 * controlType : checkbox ||switch||radio
 * SuppressLabel : type Boolean, Displays label if false
 * Position : left||top , default right for label
 * label : accepts HTML tag
 * TextOne/TextTwo : Sets Text content of HTML tag
 * isActive : returns Boolean ,Default state of the controls
 * Default : Set the default value of controls
 * id : set the id for the radio controls
 *
 * @param {*} param accepts a JSON obejct
 */
let clsCheckbox = function (param) {
  var _DisplayDiv;
  var _DivDescription;
  var _Description;
  var _checkbox;
  var _ControlDiv;
  var _DisplayText;
  var _ToggleContainer;
  var _ToggelContainerClass;
  var _ToggleButton;
  var isActive = false;
  var _checkboxClass;
  var _param;
  var _radioContainer;
  var _radioInput1;
  var _radioInput2;
  var _labelInput1;
  var _labelInput2;

  this.construct = function (param) {
    _param = param;
    if (_param.Default) isActive = _param.Default;
    if (_param.controlType == undefined) _param.controlType = "checkbox";
    if (_param.position == "left") {
      _checkboxClass = "CheckboxLeft";
      _ToggelContainerClass = "toggle-containerLeft";
    } else if (_param.position == "top") {
      _checkboxClass = "CheckboxTop";
      _ToggelContainerClass = "toggle-containerTop";
    }

    _DisplayDiv = $("<div>").addClass("DisplayDiv");
    _DivDescription = $("<div>");
    _Description = $("<small>").text(_param.Desc);
    _DivDescription.append(_Description);
    _param.controlType ? _DisplayDiv.append(_DivDescription) : "";
    $("body").append(_DisplayDiv);

    _ControlDiv = $("<div>").addClass(
      _param.position == undefined || _param.position == "right"
        ? "containerDivClass"
        : ""
    );
    switch (_param.controlType) {
      case "checkbox":
        _checkbox = $("<input>");
        _checkbox
          .attr("type", "checkbox")
          .addClass(!_param.SuppressLabel ? _checkboxClass : "");
        _checkbox.prop("checked", isActive);
        _checkbox.attr("title", "Do you smoke");
        _ControlDiv.append(_checkbox);
        _DisplayDiv.append(_ControlDiv);

        this._SuppressLabel(
          _param.SuppressLabel,
          _param.position,
          _param.label
        );
        this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);

        _checkbox.click(() => {
          isActive = !isActive;
          _checkbox.prop("checked", isActive);
          this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
          _checkbox.trigger("Event_Change", [isActive]);
        });

        break;

      case "switch":
        _ToggleContainer = $("<div>")
          .addClass("toggle-container")
          .addClass(!_param.SuppressLabel ? _ToggelContainerClass : "");
        _ToggleButton = $("<div>").addClass("toggle-button");
        _ToggleButton.attr("title", "Do you smoke");

        _ControlDiv.append(_ToggleContainer);
        _ToggleContainer.append(_ToggleButton);
        _ToggleContainer.toggleClass("active", isActive);
        _ToggleButton.toggleClass("active", isActive);
        _DisplayDiv.append(_ControlDiv);

        this._SuppressLabel(
          _param.SuppressLabel,
          _param.position,
          _param.label
        );
        this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
        _ToggleContainer.on("click", () => {
          isActive = !isActive;
          _ToggleContainer.toggleClass("active", isActive);
          _ToggleButton.toggleClass("active", isActive);
          this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
          _ToggleContainer.trigger("Event_Change", [isActive]);
        });

        break;

      case "radio":
        if (!_param.id) break;
        _radioContainer = $("<div>")
          .addClass("radio-container")
          .attr("title", "Do you smoke");

        _radioInput1 = $("<input>")
          .attr({
            type: "radio",
            id: "success-outlined" + _param.id,
            name: "options-outlined" + _param.id,
            checked: isActive,
          })
          .addClass("btn-check");
        _radioInput2 = $("<input>")
          .attr({
            type: "radio",
            id: "danger-outlined" + _param.id,
            name: "options-outlined" + _param.id,
            autocomplete: "off",
            checked: !isActive,
          })
          .addClass("btn-check");
        _radioInput2.addClass("btn-check");

        _labelInput1 = $("<label>")
          .attr({
            for: "success-outlined" + _param.id,
            class: "btn btn-outline-success",
          })
          .text("");
        _labelInput2 = $("<label>")
          .attr({
            for: "danger-outlined" + _param.id,
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
        _ControlDiv.append(_radioContainer);
        _DisplayDiv.append(_ControlDiv);

        this._SuppressLabel(
          _param.SuppressLabel,
          _param.position,
          _param.label
        );
        this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);

        _radioInput1.on("change", () => {
          if (_radioInput1.is(":checked")) {
            isActive = true;
            this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
            _radioInput1.trigger("Event_Change", [isActive]);
          }
        });

        _radioInput2.on("change", () => {
          if (_radioInput2.is(":checked")) {
            isActive = false;
            this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
            _radioInput2.trigger("Event_Change", [isActive]);
          }
        });
        break;
    }
    /**
     * Event_Change - Event Handler fires whenever the value changes for all controlType: checkbox, switch & radio
     */
    $(_checkbox).on("Event_Change", Event_Change);
    $(_ToggleContainer).on("Event_Change", Event_Change);
    $(_radioInput1).on("Event_Change", Event_Change);
    $(_radioInput2).on("Event_Change", Event_Change);
  };

  Event_Change = (event, isActive) => {
    console.log(`Element of type ${_param.controlType} changed to ${isActive}`);
  };

  /**
   *
   * @param {*} isActive  returns boolean , True if checked
   * @param {*} TextOne Element text content
   * @param {*} TextTwo Element text content
   */

  this._ToggleTextFunction = function (isActive, TextOne, TextTwo) {
    _DisplayText?.text(
      _checkbox?.is(":checked") || isActive ? TextOne : TextTwo
    );
    if (_param.controlType == "radio") {
      _labelInput1.text(TextOne);
      _labelInput2.text(TextTwo);
    }
  };

  /**
   *
   * @param {*} SuppressLabel  Displays label text according to SuppressLabel value
   * @param {*} position  It define the position of the label
   * @param {*} label  It sets the element to the label
   */

  this._SuppressLabel = function (SuppressLabel = false, position, label) {
    if (!SuppressLabel) {
      _DisplayText = $(label).addClass(position);
      if (_param.controlType != "radio") _ControlDiv.append(_DisplayText);
    }
  };

  /**
   * This returns the value
   * @returns boolean - True if checked
   */

  this.val = (param) => {
    if (param == undefined) {
      switch (_param.controlType) {
        case "checkbox":
          return _checkbox.prop("checked");

        case "switch":
          return _ToggleContainer.hasClass("active");

        case "radio":
          return _radioInput1[0].checked ? true : false;
      }
    } else {
      switch (_param.controlType) {
        case "checkbox":
          _checkbox.prop("checked", param);
          isActive = param;
          this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
          _checkbox.trigger("Event_Change", [isActive]);
          break;
        case "switch":
          param
            ? _ToggleContainer.addClass("active")
            : _ToggleContainer.removeClass("active");
          isActive = param;
          this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
          _ToggleContainer.trigger("Event_Change", [isActive]);
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
    switch (_param.controlType) {
      case "checkbox":
        _checkbox.prop("checked", _param.Default);
        this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
        break;
      case "switch":
        _param.Default
          ? _ToggleContainer.addClass("active")
          : _ToggleContainer.removeClass("active");
        break;
      case "radio":
        _param.Default
          ? _radioInput1.prop("checked", true)
          : _radioInput2.prop("checked", true);
    }
  };

  /**
   *
   * @param {*} TextOne label text content for true
   * @param {*} TextTwo label text content for false
   * Edit the label text content
   */

  this.label = function (TextOne, TextTwo) {
    _param.TextOne = TextOne;
    _param.TextTwo = TextTwo;
    this._ToggleTextFunction(isActive, _param.TextOne, _param.TextTwo);
  };

  /**
   *
   * @returns Boolean , Whether there is value in the obhect
   */

  this.isFilled = function () {
    switch (_param.controlType) {
      case "checkbox":
        return isActive;
      case "switch":
        return isActive;
      case "radio":
        return _radioInput1[0].checked || _radioInput2[0].checked;
    }
  };

  /**
   *
   * @param {*} toolTipText Edit the title text content on mmouseover
   */

  this.toolTipText = function (toolTipText) {
    switch (_param.controlType) {
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
    if (_param.Default != isActive) isActive = true;
    switch (_param.controlType) {
      case "checkbox":
        _checkbox.prop("checked", isActive);
        break;
      case "switch":
        isActive
          ? _ToggleContainer.addClass("active")
          : _ToggleContainer.removeClass("active");
        break;
      case "radio":
        isActive
          ? _radioInput1.prop("checked", true)
          : _radioInput2.prop("checked", true);
        break;
    }
  };

  this.getDesign = function () {
    return _DisplayDiv;
  };

  this.construct(param);
};
