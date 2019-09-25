function validateForm() {
  var dotForm = document.forms.coordinates;
  var Y = parseFloat(dotForm.yCoord.value);
  var X = parseFloat(dotForm.xCoord.value);
  var retVal = true;

  var xError = document.getElementById('x_in_error');
  if (isNaN(X) || X < -5 || X > 5) {
    xError.innerHTML = '<br>Введите число в отрезке [-5:5]';
    xError.style.visibility = 'visible';
    retVal = false;
  } else {
    xError.innerHTML = '';
    xError.style.visibility = 'hidden';
  }

  var yError = document.getElementById('y_in_error');
  if (isNaN(Y) || Y < -5 || Y > 5) {
    yError.innerHTML = '<br>Введите число в отрезке [-5:5]';
    yError.style.visibility = 'visible';
    retVal = false;
  } else {
    yError.innerHTML = '';
    yError.style.visibility = 'hidden';
  }

  return retVal;
}
