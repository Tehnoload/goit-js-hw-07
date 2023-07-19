import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" loading="lazy" alt="${description}" title="${description}"/></a></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
1;
