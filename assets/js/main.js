document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll(".slider");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const nextBtns = document.querySelectorAll(".next-btn");
  const cardsList = document.querySelectorAll(".card");
  const cardWidth = cardsList[0].offsetWidth;
  const visibleCards = 3; // Number of cards visible at a time

  // Iterate over each slider
  sliders.forEach((slider, sliderIndex) => {
    const cards = slider.querySelectorAll(".card");
    let currentIndex = 0;

    // Set initial position of the slider
    slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

    // Add event listeners to buttons
    prevBtns[sliderIndex].addEventListener("click", () => slidePrev(sliderIndex));
    nextBtns[sliderIndex].addEventListener("click", () => slideNext(sliderIndex));

    function slidePrev(index) {
      if (currentIndex > 0) {
        currentIndex --;
        sliders[index].style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        updateActiveCard(index);
      }
    }

    function slideNext(index) {
      if (currentIndex < cards.length - visibleCards) {
        currentIndex ++;
        sliders[index].style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        updateActiveCard(index);
      }
    }

    function updateActiveCard(index) {
      cards.forEach((card, cardIndex) => {
        if (cardIndex >= currentIndex && cardIndex < currentIndex + visibleCards) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }
  });
});


// category

// JavaScript untuk menambahkan event click pada kategori
const categoryItems = document.querySelectorAll('.category-btn li');
const categoryCards = document.querySelectorAll('.r-block-card');

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Hapus class 'active' dari semua kategori
    categoryItems.forEach(item => item.classList.remove('active'));

    // Tambahkan class 'active' pada kategori yang diklik
    item.classList.add('active');

    // Dapatkan kategori yang diklik
    const category = item.innerText;

    // Tampilkan atau sembunyikan card sesuai dengan kategori yang dipilih
    categoryCards.forEach(card => {
      if (category === 'All') {
        card.style.display = 'flex';
      } else if (card.classList.contains(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});





// blok kanan dan kiri

// Mendapatkan elemen-elemen yang diperlukan
const leftBlockCardFull = document.querySelector('.l-block-card.full');
const rightBlockCards = document.querySelectorAll('.r-block-card');

// Membuat fungsi untuk menampilkan preview card di block kiri
function showPreviewCard(event) {
  // Menghentikan event propagation agar tidak mempengaruhi elemen lain
  event.stopPropagation();

  // Mengambil data dari card yang diklik
  const clickedCard = event.currentTarget;

  // Mengganti gambar, judul, dan deskripsi di block kiri
  const imgSrc = clickedCard.querySelector('img').getAttribute('src');
  const title = clickedCard.querySelector('h4').textContent;
  const date = clickedCard.querySelector('p').textContent;
  const description = clickedCard.querySelector('.block-card-desc').textContent;
  const readFull = clickedCard.querySelector('a').getAttribute('href');

  leftBlockCardFull.querySelector('img').setAttribute('src', imgSrc);
  leftBlockCardFull.querySelector('h4').textContent = title;
  leftBlockCardFull.querySelector('p').textContent = date;
  leftBlockCardFull.querySelector('.block-card-desc').textContent = description;
  leftBlockCardFull.querySelector('a').setAttribute('href', readFull);

  // Menghapus kelas "full" dari semua card di block kanan
  rightBlockCards.forEach(card => {
    card.classList.remove('full');
  });

  // Menambahkan kelas "full" pada card yang di klik
  clickedCard.classList.add('full');
}

// Mengatur card pertama di block kanan sebagai aktif saat program dijalankan
const firstCard = rightBlockCards[0];
const imgSrc = firstCard.querySelector('img').getAttribute('src');
const title = firstCard.querySelector('h4').textContent;
const date = firstCard.querySelector('p').textContent;
const description = firstCard.querySelector('.block-card-desc').textContent;
const readFull = firstCard.querySelector('a').getAttribute('href');

leftBlockCardFull.querySelector('img').setAttribute('src', imgSrc);
leftBlockCardFull.querySelector('h4').textContent = title;
leftBlockCardFull.querySelector('p').textContent = date;
leftBlockCardFull.querySelector('.block-card-desc').textContent = description;
leftBlockCardFull.querySelector('a').setAttribute('href', readFull);
firstCard.classList.add('full');

// Menambahkan event listener untuk setiap card di block kanan
rightBlockCards.forEach(card => {
  card.addEventListener('click', showPreviewCard);
});

// Menambahkan event listener pada block kiri untuk mengembalikan tampilan awal saat diklik
leftBlockCardFull.addEventListener('click', () => {
  // Menghapus kelas "full" dari semua card di block kanan
  rightBlockCards.forEach(card => {
    card.classList.remove('full');
  });
});


// category end

// fitting body into zoom
function setZoomFactor() {
  // Mendapatkan lebar body dengan penambahan 3px
  const bodyWidth = document.body.clientWidth + 3;

  // Mendapatkan lebar jendela browser
  const windowWidth = window.innerWidth;

  // Menghitung faktor zoom
  const zoomFactor = windowWidth / bodyWidth;

  // Mengatur zoom browser
  document.body.style.zoom = zoomFactor;
}

document.addEventListener('DOMContentLoaded', setZoomFactor);

window.addEventListener('resize', function() {
  setZoomFactor();
});

