import { galleryItems } from './gallery-items.js';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

let galleryItemEl = galleryItems
  .map(
    item => `
<li class='gallery__item'>
  <a class='gallery__link' href='${item.original}'>
    <img
      class='gallery__image'
      src='${item.preview}'
      alt='${item.description}'
    />
  </a>
</li>`
  )
  .join('');

galleryEl.innerHTML = galleryItemEl;
console.log(galleryItems);

const imageFromSimpleLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
