/*
For this we need to grab the + & - buttons and set an event listener on them
Then when a button is clicked we get the current values of:
    data-offset 
    data-amount-cents
    data-count
    textContent of #count
Set values of:
    data-count, textContent of #count, input[price-input]-value, input[submit]-value

*/

const updateCount = (counter, count) => {
  counter.dataset.count = count;
  counter.innerText = count;
};

const getCurrentData = e => {
  // offset is number to increment/decrement, here 1
  let offset = e.currentTarget.dataset.offset;
  offset = parseInt(offset, 10);

  let unitPriceCents = document.querySelector('#price').dataset.amountCents;
  unitPriceCents = parseInt(unitPriceCents, 10);

  const counter = document.querySelector('#counter');
  let count = parseInt(counter.dataset.count, 10) + offset;
  console.log(count);
  updateCount(counter, count);
};

const setEventListener = button => {
  button.addEventListener('click', e => {
    // console.log(e);
    getCurrentData(e);
  });
};

const buttons = document.querySelectorAll('.incrementer');
buttons.forEach(button => {
  setEventListener(button);
});
