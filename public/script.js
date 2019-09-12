function validateForm() {
    var Y = parseFloat(document.forms["coordinates"]["yCoord"].value)
    var X = parseFloat(document.forms["coordinates"]["xCoord"].value)
    var retVal = true

    var x_error = document.getElementById("x_in_error")
    if (isNaN(X) || X < -5 || X > 5) {
        x_error.innerHTML = "<br>Введите число в отрезке [-5:5]"
        x_error.style.visibility = "visible"
        retVal = false
    } else {
        x_error.innerHTML = ""
        x_error.style.visibility = "hidden"
    }

    var y_error = document.getElementById("y_in_error")
    if (isNaN(Y) || Y < -5 || Y > 5) {
        y_error.innerHTML = "<br>Введите число в отрезке [-5:5]"
        y_error.style.visibility = "visible"
        retVal = false
    } else {
        y_error.innerHTML = ""
        y_error.style.visibility = "hidden"
    }

    return retVal
}
