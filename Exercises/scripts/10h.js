function handlecostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal()
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input')
  let cost = Number(inputElement.value)

  if (cost < 0) {
    document.querySelector('.js-total-cost').innerHTML = "Error: cost cannot be less than $0"
  } else {
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`
  }
}
