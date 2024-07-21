import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function noImagesMessage() {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    class: 'toast-style',
    messageColor: 'white',
  });
}
