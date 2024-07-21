import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { noImagesMessage } from './js/render-functions.js';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
  gallery: document.querySelector(`.gallery`),
  loading: document.querySelector(`.loadingText`),
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

  const loadingText = document.getElementById('loadingText');

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

  elements.loading.style.display = 'block';

  setTimeout(() => {
    fetchImages(userInputValue)
      .then((elements.loading.style.display = 'none'))
      .then(processImages)
      .then((elements.gallery.style.display = 'flex'))

      .catch(error => {
        console.error(`No Images`, error);
      });
  }, 2000);
}

elements.submitBtn.addEventListener(`click`, handleFormSubmit);
elements.form.addEventListener(`submit`, handleFormSubmit);
