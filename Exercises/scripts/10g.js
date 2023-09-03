function turnOnOff(name) {

  const button = document.querySelector(name)

  if (! button.classList.contains('is-toggled')) {

    oneAtATime()

    button.classList.add('is-toggled')
  } else {
    button.classList.remove('is-toggled')
  }

}

function oneAtATime() {

  const previousButton = document.querySelector('.is-toggled')

  if (previousButton) {
    previousButton.classList.remove('is-toggled')
  }

}