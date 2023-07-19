import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" loading="lazy" data-source="${original}" alt="${description}"/></a></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", onClick);

function onClick(event) {
  const { target } = event;
  const image =
    target.dataset.source ?? target.closest(".gallery__link").dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === image);
  const instance = basicLightbox.create(`
	<img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}"/></a></li>
`);

  event.preventDefault();
  instance.show();
  window.addEventListener("keydown", onPresEsc);

  function onPresEsc(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onPresEsc);
    }
  }
}
