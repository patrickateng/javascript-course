function toggling(name) {

  const button = document.querySelector(name)

  if (!button.classList.contains('its-toggled')) {

    turnOffPreviousButton()

    button.classList.add('its-toggled')
  } else {
    button.classList.remove('its-toggled')
  }

}

function turnOffPreviousButton () {
  const previousButton = document.querySelector('.its-toggled')

  if (previousButton) {
    previousButton.classList.remove('its-toggled')
  }
}