var FirstClass = function () {
    var _private;

    this._publicvalue = "Abhay";

    this.construct = function () {
         _private = "Private Value"
    }

    this._retunPrivateValue = function (param) {
        if (param) {
            _private = param;
            return _private;
        }
        else {
            return _private;
        }
    }

    this._PrintPrivateValue = function () {
        console.log(_private)
    }

    this.construct()
}
var obj = new FirstClass;

obj._publicvalue;
obj._retunPrivateValue("TestClass");
obj._PrintPrivateValue()