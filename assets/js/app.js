var app = {
  appCtrl: function() {
    // Declare all variable
    var _result = document.getElementById("result");
    var _input = document.getElementById("input");
    var _output = document.getElementById("output");
    var _pxResult = document.getElementById("pxResult");
    var _inchResult = document.getElementById("inchResult");
    var _percentageResult = document.getElementById("percentageResult");
    var _emResult = document.getElementById("emResult");
    var _ptResult = document.getElementById("ptResult");
    var _selectItem = document.getElementById("selectItem");
    var _pxOutput = document.getElementById("pxOutput");
    var _inchOutput = document.getElementById("inchOutput");
    var _percentageOutput = document.getElementById("percentageOutput");
    var _emOutput = document.getElementById("emOutput");
    var _ptOutput = document.getElementById("ptOutput");

    // Hide the input and output display
    _result.style.display = "none";
    _output.style.display = "none";

    // select the unit of measurement
    _selectItem.addEventListener("change", () => {
      // if the selected unit is pt
      if (_selectItem.value === "point") {
        _result.style.display = "block";
        _input.addEventListener("input", e => {
          // set output to visible
          _output.style.display = "block";
          // set the other results div to display block and the pt result to display none
          _inchResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "block";
          _pxResult.style.display = "block";
          _ptResult.style.display = "none";
          // get the input value and save in a var
          var _unit = e.target.value;
          // display the output
          _pxOutput.innerHTML = _unit * 96 / 72  + "px";
          _inchOutput.innerHTML = _unit / 72 + "In";
          // percentage output
          _percentageOutput.innerHTML = _unit / 12 * 100 + "%";
          // ounce output
          _emOutput.innerHTML = _unit / 12 + "em";
        });
      } else if (_selectItem.value === "inch") {
        _result.style.display = "block";
        _input.addEventListener("input", e => {
          _output.style.display = "block";
          var _unit = e.target.value;

          _pxResult.style.display = "block";
          _inchResult.style.display = "none";
          _ptResult.style.display = "block";
          _percentageResult.style.display = "none";
          _emResult.style.display = "block";

          // percentage output
          _pxOutput.innerHTML = _unit * 96 + "px";
          _percentageOutput.innerHTML = _unit / 1000 + "%";

          // pt output
          _emOutput.innerHTML = _unit * 6.022500060225 + "em";

          _ptOutput.innerHTML = _unit * 72 + "pt";
        });
      } else if (_selectItem.value === "px") {
        _result.style.display = "block";
        _input.addEventListener("input", e => {
          _output.style.display = "block";
          var _unit = e.target.value;

          _pxResult.style.display = "none";
          _inchResult.style.display = "block";
          _ptResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "block";

          _inchOutput.innerHTML = _unit / 96 + "In";
          // percentage output
          _percentageOutput.innerHTML = _unit / 16 * 100 + "%";

          // pt output
          _emOutput.innerHTML = _unit / 16 + "em";

          _ptOutput.innerHTML = _unit * 72 / 96 + "pt";
        });
      } else if (_selectItem.value === "percentage") {
        _result.style.display = "block";
        _input.addEventListener("input", e => {
          _output.style.display = "block";
          var _unit = e.target.value;

          _inchResult.style.display = "none";
          _ptResult.style.display = "block";
          _emResult.style.display = "block";
          _percentageResult.style.display = "none";

          //output
          _pxOutput.innerHTML = _unit / 100 * 16 + "px";
          _inchOutput.innerHTML = _unit / 1000 + "In";
          // pt output
          _emOutput.innerHTML = _unit / 100 + "em";
          _ptOutput.innerHTML = _unit / 100 * 12 + "pt";
        });
      } else if (_selectItem.value === "em") {
        _result.style.display = "block";
        _input.addEventListener("input", e => {
          _output.style.display = "block";
          var _unit = e.target.value;

          _pxResult.style.display = "block";
          _inchResult.style.display = "block";
          _ptResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "none";

          _pxOutput.innerHTML = _unit * 16 + "px";
          _percentageOutput.innerHTML = _unit * 100 + "%";
          // pt output
          _inchOutput.innerHTML = _unit / 6.022500060225 + "In";
          _ptOutput.innerHTML = _unit * 12 + "pt";
        });
      }
    });
  }
};
