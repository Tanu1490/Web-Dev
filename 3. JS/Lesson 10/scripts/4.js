let calculation = (localStorage.getItem('calculation')) || '';
     
      displayCal();

      function displayCal(){
        document.querySelector('.js-CalResult')
         .innerHTML = calculation;
      }

      function updateCalculation(input) {
        calculation += input;
        displayCal();
        localStorage.setItem('calculation', (calculation));
      }
      