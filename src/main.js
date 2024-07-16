import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
};

elements.submitBtn.addEventListener(`click`, event => {
  event.preventDefault();

  const trimmedInput = elements.input.value.trim();
  if (trimmedInput === '') {
    elements.submitBtn.disabled = true;
    console.log(`button is disabled`);
    return;
  } else {
    elements.submitBtn.disabled = false;
  }

  const options = {
    headers: {
      'Content-Type': `application/json`,
    },
  };

  fetch(
    `https://pixabay.com/api/?key=44952732-afe4551e0894d66c0b6ee4476&q=${trimmedInput}&image_type=photo&orientation=horizontal&safesearch=true`,
    options
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      if (!data || data.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        console.log(data);
      }
    })
    .catch(error => {
      console.log(error);
    });
});
