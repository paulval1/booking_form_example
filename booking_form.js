/*
For this we need to grab the + & - buttons and set an event listener on them
Then when a button is clicked we get the current values of:
    data-offset 
    data-amount-cents
    data-count
    textContent of #count
Set values of:
    data-count, textContent of #count,
    input[price-input]-value, input[submit]-value
Then make sure u can't go below 1 offset/person in display
*/
const minus = document.querySelector('.minus');

const updateCount = (counter, count) => {
  counter.dataset.count = count;
  counter.innerText = count;
};

// now price in cents in input #price-input
const setInputPrice = totalPrice => {
  document.getElementById('price-input').value = totalPrice;
};

const setButtonPrice = totalPrice => {
  document.getElementById('submit').value = `Pay ${totalPrice / 100}€`;
};

/*
const disableMinus = count => {
  if (count < 2) {
    // minus.removeAttribute('href');
    minus.disabled = true;
    console.log(minus);
  } else {
    // minus.setAttribute('href', '#');
    minus.disabled = true;
  }
};
*/

const getCurrentData = e => {
  // offset is number to increment/decrement, here 1
  const btn = e.currentTarget;
  let offset = btn.dataset.offset;
  offset = parseInt(offset, 10);

  // get unit price in cents
  let unitPriceCents = document.querySelector('#price').dataset.amountCents;
  unitPriceCents = parseInt(unitPriceCents, 10);

  // count number of participants
  const counter = document.querySelector('#counter');
  let count = parseInt(counter.dataset.count, 10) + offset;
  // updateCount(counter, count);

  // check if participants < 1 and if so stop everything
  if (btn.classList.contains('minus')) {
    if (count < 1) {
      console.log(count);
      return;
    } else {
      updateCount(counter, count);
    }
  } else {
    updateCount(counter, count);
  }

  // what is current price?
  const totalPrice = count * unitPriceCents;
  setInputPrice(totalPrice);
  setButtonPrice(totalPrice);

  // disableMinus(count);
};

const setEventListener = button => {
  button.addEventListener('click', e => {
    getCurrentData(e);
  });
};

const buttons = document.querySelectorAll('.incrementer');
buttons.forEach(button => {
  setEventListener(button);
});
