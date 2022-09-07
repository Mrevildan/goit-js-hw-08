import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href ="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source=${original}
    alt=${description}
/>
</a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
    
});

console.log(galleryItems);
