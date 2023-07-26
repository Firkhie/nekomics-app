// Navbar Button
let mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("open");
});

let sortByBtn = document.querySelector('#sort-by-btn');
let sortBySelected = document.querySelector('#sort-by-selected')
let sortByMenu = document.querySelectorAll('#sort-by-menu li')
// Sort-by Button
sortByBtn.addEventListener("click", () => {
  sortByBtn.classList.toggle("open");
})
// Sort-by Menu
sortByMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    sortBySelected.innerText = menu.innerText;
  })

})
// Scroll Top
let scrollTopBtn = document.querySelector("#scroll-top-btn")
scrollTopBtn.addEventListener("click", () => {
  // For Safari
  document.body.scrollTo({ top: 0, behavior: 'smooth' });
  // For Chrome, Firefox, IE, and Opera
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
})

// OnScroll
window.onscroll = () => {
  mobileMenuBtn.classList.remove("open");
  // sortByBtn.classList.remove("open");
};

// Hero Carousel
const heroCarousel = document.getElementById("hero-carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const heroCarouselItems = document.querySelectorAll(".hero-carousel-item");

let currentIndex = 0;
let itemWidth = heroCarouselItems[0].clientWidth;

let isDragging = false;
let touchStartX = 0;
let touchMoveX = 0;
let touchOffsetX = 0;

const handleDragStart = (e) => {
  isDragging = true;
  stopAutoplay();
  touchStartX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  heroCarousel.style.transition = "none";
};

const handleDragMove = (e) => {
  if (!isDragging) return;
  touchMoveX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
  touchOffsetX = touchMoveX - touchStartX;
  const dragDistance = -currentIndex * itemWidth + touchOffsetX;
  heroCarousel.style.transform = `translateX(${dragDistance}px)`;
};

const handleDragEnd = () => {
  isDragging = false;
  startAutoplay();

  const swipeThreshold = itemWidth / 3;
  if (Math.abs(touchOffsetX) > swipeThreshold) {
    if (touchOffsetX > 0) {
      currentIndex =
        (currentIndex - 1 + heroCarouselItems.length) %
        heroCarouselItems.length;
    } else {
      currentIndex = (currentIndex + 1) % heroCarouselItems.length;
    }
  }

  heroCarousel.style.transition = "transform 0.3s ease-in-out";
  heroCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

heroCarousel.addEventListener("mousedown", handleDragStart);
heroCarousel.addEventListener("touchstart", handleDragStart, {
  passive: true,
});
heroCarousel.addEventListener("mousemove", handleDragMove);
heroCarousel.addEventListener("touchmove", handleDragMove, {
  passive: true,
});
heroCarousel.addEventListener("mouseup", handleDragEnd);
heroCarousel.addEventListener("touchend", handleDragEnd);

const moveCarousel = () => {
  heroCarousel.style.transition = "transform 0.3s ease-in-out";
  heroCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

const autoplay = () => {
  currentIndex = (currentIndex + 1) % heroCarouselItems.length;
  moveCarousel();
};

let autoplayInterval = setInterval(autoplay, 4000);

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
  autoplayInterval = null; // Menyimpan state interval sebagai null saat dihentikan
};

const startAutoplay = () => {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(autoplay, 4000);
  }
};

heroCarousel.addEventListener("mouseenter", stopAutoplay);
heroCarousel.addEventListener("mouseleave", startAutoplay);

const resizeHandler = () => {
  itemWidth = heroCarouselItems[0].clientWidth;
  heroCarousel.style.transition = "none";
  heroCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

window.addEventListener("resize", resizeHandler);

prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + heroCarouselItems.length) % heroCarouselItems.length;
  moveCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % heroCarouselItems.length;
  moveCarousel();
});

// Event listener untuk mengatur status draggable saat melakukan klik pada elemen-elemen dalam carousel
heroCarouselItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (isDragging) {
      e.preventDefault();
      isDragging = false;
    }
  });

  item.querySelector("img").addEventListener("dragstart", (e) => {
    e.preventDefault();
  });

  const readNowButton = item.querySelector("a");
  if (readNowButton) {
    readNowButton.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  }
});
