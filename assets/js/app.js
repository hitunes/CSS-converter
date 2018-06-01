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
        _input.addEventListener("input", (e) => {
          // set output to visible
          _output.style.display = "block";
          // set the other results div to display block and the pt result to display none
          _inchResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "block";
          _ptResult.style.display = "none";
          // get the input value and save in a var
          var _unit = e.target.value;

          // display the output
          _inchOutput.innerHTML = _unit / 0.0022046 + "In";
          // percentage output
          _percentageOutput.innerHTML = _unit / 2.2046 + "%";
          // ounce output
          _emOutput.innerHTML = _unit * 16 + "em";
        });
      } else if (_selectItem.value === "inch") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _unit = e.target.value;

          _inchResult.style.display = "none";
          _ptResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "block";

          // percentage output
          _percentageOutput.innerHTML = _unit / 1000 + "%";

          // pt output
          _emOutput.innerHTML = _unit * 0.03527 + "em";

          _ptOutput.innerHTML = _unit * 0.0022046 + "pt";
        });
      } else if (_selectItem.value === "percentage") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _unit = e.target.value;
          _inchResult.style.display = "block";
          _ptResult.style.display = "block";
          _emResult.style.display = "block";
          _percentageResult.style.display = "none";

          //output
          _inchOutput.innerHTML = _unit / 1000 + "In";
          // pt output
          _emOutput.innerHTML = _unit * 35.27 + "em";
          _ptOutput.innerHTML = _unit * 2.2046 + "pt";
        });
      } else if (_selectItem.value === "em") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _unit = e.target.value;
          _inchResult.style.display = "block";
          _ptResult.style.display = "block";
          _percentageResult.style.display = "block";
          _emResult.style.display = "none";

          _percentageOutput.innerHTML = _unit / 35.27 + "%";
          // pt output
          _inchOutput.innerHTML = _unit / 0.03527 + "In";
          _ptOutput.innerHTML = _unit / 16 + "pt";
        });
      }
    });
  }
};
