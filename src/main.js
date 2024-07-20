import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/loader.css';
import { fetchImages } from './js/pixabay-api.js';
import { noImagesMessage } from './js/render-functions.js';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
  gallery: document.querySelector(`.gallery`),
  loader: document.querySelector(`.loader`),
};

const lightbox = new SimpleLightbox('.image-link', {
  captions: true,
  captionSelector: `img`,
  captionsData: `alt`,
  captionType: `attr`,
  captionPosition: `bottom`,
  captionDelay: 250,
});

function handleFormSubmit(event) {
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
    return `
  <div class ="image-container">
    <a href="${largeImageURL}" class = "image-link">

    <li class="image-item">
      <img src="${webformatURL}" alt="${tags}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${likes}</p>
        <p><span class = "comment-head">Views</span> ${views}</p>
        <p><span class = "comment-head">Comments</span> ${comments}</p>
        <p><span class = "comment-head">Downloads</span> ${downloads}</p>
      </li>
    </div>
    </a>
  </div>
  `;
  }

  function processImages(res) {
    const images = res.hits;
    let imageMarkup = '';
    images.forEach(image => {
      imageMarkup += createImageCard(image);
    });
    elements.gallery.innerHTML = imageMarkup;
    lightbox.refresh();
  }

  elements.gallery.innerHTML = '';
  elements.form.reset();

  if (emptyInputInfo()) {
    elements.submitBtn.disabled = false;
    return;
  }

  let imagesFetched = false;
  let timeoutCompleted = false;

  elements.loader.classList.add('active');

  const checkAndRemoveLoader = () => {
    if (imagesFetched && timeoutCompleted) {
      elements.loader.classList.remove('active');
      elements.submitBtn.disabled = false;
    }
  };

  fetchImages(userInputValue)
    .then(processImages)
    .then(() => {
      imagesFetched = true;
      checkAndRemoveLoader();
    })
    .catch(error => {
      console.error(`No Images`, error);
      imagesFetched = true;
      checkAndRemoveLoader();
    });

  setTimeout(() => {
    timeoutCompleted = true;
    checkAndRemoveLoader();
  }, 2000);
}

elements.submitBtn.addEventListener(`click`, handleFormSubmit);
elements.form.addEventListener(`submit`, handleFormSubmit);
