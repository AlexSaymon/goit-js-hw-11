import { fetchImages } from './js/pixabay-api.js';
import { noImagesMessage } from './js/render-functions.js';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
};

elements.submitBtn.addEventListener(`click`, event => {
  event.preventDefault();

  const trimmedInput = elements.input.value.trim();
  const userInputValue = elements.input.value;
  if (trimmedInput === '') {
    elements.submitBtn.disabled = true;
    console.log(`button is disabled`);
    return;
  } else {
    elements.submitBtn.disabled = false;
  }
  fetchImages(userInputValue).then(request => {
    if (!request || request.length === 0) {
      noImagesMessage();
    } else {
      console.log(request);
    }
  });
});
