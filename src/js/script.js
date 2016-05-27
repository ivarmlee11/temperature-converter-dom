

document.addEventListener('DOMContentLoaded', function() {


  var tempInput;
  var tempInput2;
  var tempSubmit = document.getElementById('tempSubmit');
  var radioButtonCels = document.getElementById('celsRadio');
  var radioButtonFar = document.getElementById('farRadio');
  var tempOutputs = document.getElementById('tempOut');

  var farToCels = function() {
    var convertedTempOne = (tempInput2 - 32) * (5 / 9);
  // tempOutputs.innerHTML = convertedTempOne;
    document.getElementById('tempOutput').innerHTML = convertedTempOne;
  };

  var celsToFar = function() {
    var convertedTempTwo = tempInput * (9 / 5) + 32;
    // tempOutputs.innerHTML = convertedTempTwo;
    document.getElementById('tempOutput').innerHTML = convertedTempTwo;
  };

  tempSubmit.addEventListener("click", function(event){
    event.preventDefault();
    tempInput = document.getElementById('tempText').value;
    tempInput2 = document.getElementById('tempText').value;
    if(document.getElementById('celsRadio').checked){
      celsToFar();
    }else{
      farToCels();
    };
  });

  document.getElementById('tempText').addEventListener("enter", function(event){
    event.preventDefault();
    tempInput = document.getElementById('tempText').value;
    tempInput2 = document.getElementById('tempText').value;
    if(document.getElementById('celsRadio').checked){
      celsToFar();
    }else{
      farToCels();
    };
  });
});
