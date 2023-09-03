let calculation = localStorage.getItem('calculation')

      function updateCalculation(value) {
        calculation += value
        document.querySelector('.js-display').innerHTML = calculation

        saveCalculation()
      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }