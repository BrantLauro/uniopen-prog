'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// depoimentos variables
const depoimentosItem = document.querySelectorAll("[data-depoimentos-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDesc = document.querySelector("[data-modal-desc]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const depoimentosModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < depoimentosItem.length; i++) {

  depoimentosItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-depoimentos-avatar]").src;
    modalImg.alt = this.querySelector("[data-depoimentos-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-depoimentos-title]").innerHTML;
    modalDesc.innerHTML = this.querySelector("[data-depoimentos-desc]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-depoimentos-text]").innerHTML;

    depoimentosModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", depoimentosModalFunc);
overlay.addEventListener("click", depoimentosModalFunc);


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}




const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
