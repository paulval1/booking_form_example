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

const getCurrentData = e => {
  let offset = e.currentTarget.dataset.offset;
  offset = parseInt(offset, 10);
  console.log(offset);

  let priceCents = document.querySelector('#price').dataset.amountCents;
  priceCents = parseInt(priceCents, 10);
  console.log(priceCents);
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
