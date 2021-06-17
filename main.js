const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

let height, weight;

// Height event listener
heightInput.addEventListener('change', (e) => {
  checkNumber(e.target.value);

  height = e.target.value;
  console.log(height);
});

// Weight event listener
weightInput.addEventListener('change', (e) => {
  checkNumber(e.target.value);
  weight = e.target.value;
});

// Input Validation
const checkNumber = (val) => {
  if (isNaN(val)) {
    return alert('Please enter number only');
  }
};
