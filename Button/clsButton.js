let clsButton = function (param) {
  var _button;
  var _ulList;
  var _list;
  var _baseContainer;
  this.construct = function (param) {
    _initParam = param;

    if (!_initParam.isEnabled) _initParam.isEnabled = true;
    if (!_initParam.DisplayType) _initParam.DisplayType = "Label";
    if (!_initParam.LabelAlignment) _initParam.LabelAlignment = "center";

    _button = $("<button>").attr({
      type: "button",
      title: _initParam.toolTiptext,
      disabled: !_initParam.isEnabled,
    });
    _button.on("click", () => {
      console.log("Button is Clicked");
    });
    _baseContainer = $("<div>").append(_button);
    $("body").append(_baseContainer);
    
    console.log(_initParam.isEnabled);

    switch (_initParam.DisplayType) {
      case "Label":
        _button.text(_initParam.label);
        break;
      case "LabelWithIcon":
        _button
          .text(_initParam.label)
          .css({ margin: "5px" })
          .append('<span class="material-symbols-outlined">menu</span>');
        break;
      case "LabelWithMenu":
        console.log(_initParam.dataList);
        _button.text(_initParam.label).css({ margin: "5px", width: "50%" });
        _ulList = $("<ul>").css({ display: "none", listStyleType: "none" });
        _initParam.dataList.forEach((data) => {
          console.log(data);
          _list = $("<li>").text(data.label);
          _ulList.append(_list);
        });
        _button.on("click", () => {
          _ulList.toggle();
        });
        $("body").append(_ulList);
        break;
      case "IconOnly":
        _button
          .css({ margin: "5px" })
          .append('<span class="material-symbols-outlined">menu</span>');
        break;
    }
    switch (_initParam.LabelAlignment) {
      case "left":
        _button.css({ textAlign: "left" });
        break;
      case "right":
        _button.css({ textAlign: "right" });
        break;
      case "center":
        _button.css({ textAlign: "center" });
        break;
    }
  };
  /**
   * sets or gets the isEnabled property of the button
   * @param {*} param Sets the isEnabled property
   * @returns current vaue of isEnabled property
   */
  this.isEnabled = function (param) {
    if (param != undefined) {
      _initParam.isEnabled = param;
    } else {
      return _initParam.isEnabled;
    }
  };
  /**
   *
   * @param {*} param sets the toolTip text content
   */
  this.toolTipText = function (param) {
    _button.attr({ title: param });
  };
  /**
   *
   * @param {*} param sets the label of the button
   */
  this.label = function (param) {
    _button.text(param);
  };
  this.construct(param);
};
