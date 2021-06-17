const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const result = document.querySelector('#result');
const message = document.querySelector('.message');
const calculate = document.querySelector('#calculate');

let height, weight, output, msg;

// Height event listener
heightInput.addEventListener('change', (e) => {
  checkNumber(e.target.value);
  height = e.target.value;
});

// Weight event listener
weightInput.addEventListener('change', (e) => {
  checkNumber(e.target.value);
  weight = e.target.value;
});

calculate.addEventListener('click', () => {
  calculateBMI();
  category();
});

// Calculate BMI function
const calculateBMI = () => {
  output = weight / (height / 100) ** 2;
  result.textContent = output.toString().slice(0, 4);
};

const category = () => {
  if (output < 18.5) {
    msg = 'Underweight';
    message.style.color = 'yellow';
  } else if (output >= 18.5 && output < 25) {
    msg = 'Normal';
    message.style.color = '#CAFFFB';
  } else if (output >= 25 && output < 30) {
    msg = 'Overweight';
    message.style.color = '#FDDC5C';
  } else if (output >= 30) {
    msg = 'Obese';
    message.style.color = '#FA4224';
  }
  message.innerHTML = msg;
};

// Input Validation
const checkNumber = (val) => {
  if (isNaN(val)) {
    return alert('Please enter number only');
  }
};
