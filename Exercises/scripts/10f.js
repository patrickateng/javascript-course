function toggling(name) {

  const button = document.querySelector(name)

  if (!button.classList.contains('its-toggled')) {
    button.classList.add('its-toggled')
  } else {
    button.classList.remove('its-toggled')
  }

}