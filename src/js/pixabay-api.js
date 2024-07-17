const API_KEY = `44952732-afe4551e0894d66c0b6ee4476`;
const URL = `https://pixabay.com/api/`;

export function fetchImages(query) {
  const url = `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  const options = {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
    },
  };

  console.log('Fetching URL:', url);
  console.log('Options:', options);

  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => data.length)

    .catch(error => {
      console.error(error);
    });
}
