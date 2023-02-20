// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

console.log(galleryList);

const cardMarkup = createGalaryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardMarkup);

function createGalaryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a ', {
  captionData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
