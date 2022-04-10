import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);


const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: 'alt' });
