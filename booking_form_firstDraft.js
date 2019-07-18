console.log(document.getElementById('price').dataset.amountCents);

const minusButton = document.querySelector('.minus');
const plusButton = document.querySelectorAll('.incrementer')[1];
let minusOffset = minusButton.getAttribute('data-offset');
minusOffset = parseInt(minusOffset, 10);

let plusOffset = plusButton.getAttribute('data-offset');
plusOffset = parseInt(plusOffset, 10);

const priceInput = document.querySelector('#price-input');
const submitBtn = document.querySelector('#submit');

let price = document.querySelector('#price').getAttribute('data-amount-cents');
price = parseInt(price, 10);
console.log(price);

const setInputValue = offset => {
  priceInput.value = price * offset;
};

const setSubmitBtnValue = offset => {
  submitBtn.value = `Pay ${(price * offset) / 100}€`;
};

//  if #counter is >= 2 activate - button else deactivate it
let peopleCounter = document.querySelector('#counter');
peopleCounterValue = parseInt(peopleCounter.textContent, 10); // number of peeps

minusButton.addEventListener('click', event => {
  console.log(peopleCounterValue);
  if (peopleCounterValue >= 2) {
    peopleCounterValue += minusOffset;
    minusButton.setAttribute('href', '#');
    peopleCounter.textContent = peopleCounterValue;
    setInputValue(peopleCounterValue);
    setSubmitBtnValue(peopleCounterValue);
  } else {
    minusButton.removeAttribute('href');
  }
});

plusButton.addEventListener('click', event => {
  peopleCounterValue += plusOffset;
  peopleCounter.textContent = peopleCounterValue;
  setInputValue(peopleCounterValue);
  setSubmitBtnValue(peopleCounterValue);
});
