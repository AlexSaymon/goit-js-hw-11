import { fetchImages } from './js/pixabay-api.js';
import { noImagesMessage } from './js/render-functions.js';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
  gallery: document.querySelector(`.gallery`),
};

elements.submitBtn.addEventListener(`click`, event => {
  event.preventDefault();

  const trimmedInput = elements.input.value.trim();
  const userInputValue = elements.input.value;

  function emptyInputInfo() {
    if (trimmedInput === '') {
      elements.submitBtn.disabled = true;
      console.log(`input is empty`);
      noImagesMessage();
      return true;
    }
    elements.submitBtn.disabled = false;
    return false;
  }

  function createImageCard({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) {
    return `<div class="image-card">
    <img src="${largeImageURL}" alt= "${tags}" />
    <div class="info">
    <p>Likes: ${likes}</p>
    <p>Views: ${views}</p>
    <p>Comments: ${comments}</p>
    <p>Downloads: ${downloads}</p>
    </div>
  </div>`;
  }

  function processImages(res) {
    const images = res.hits;
    let imageMarkup = '';
    images.forEach(image => {
      imageMarkup += createImageCard(image);
    });
    elements.gallery.innerHTML = imageMarkup;
  }

  elements.gallery.innerHTML = '';
  elements.form.reset();

  if (emptyInputInfo()) {
    elements.submitBtn.disabled = false;
    return;
  }

  fetchImages(userInputValue)
    .then(processImages)

    .catch(error => {
      console.error(`No Images`, error);
    });
});
