// Получаем элементы
const burgerMenu = document.getElementById('burger-menu');
const links = document.querySelector('.block-links');

// Обработчик клика по бургеру
burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Останавливаем всплытие события, чтобы не закрыть меню сразу
    links.classList.toggle('active'); // Переключаем класс для показа/скрытия меню
});

// Обработчик клика по всему документу
document.addEventListener('click', (e) => {
    // Если клик был вне бургер-меню и самого меню, то закрываем его
    if (!burgerMenu.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('active'); // Скрываем меню
    }
});

// =========================

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// ======модальное======

// Получаем элементы
const modalOverlayMira = document.getElementById("modal-overlay-mira");
const modalOverlayArisha = document.getElementById("modal-overlay-arisha");
const closeBtnMira = document.getElementById("close-btn-mira");
const closeBtnArisha = document.getElementById("close-btn-arisha");
const measurementsBtnMira = document.getElementById("measurements-mira");
const measurementsBtnArisha = document.getElementById("measurements-arisha");

// Функция для открытия модального окна Мирославы
function openModalMira() {
    modalOverlayMira.style.display = "flex"; // Показываем модальное окно Мирославы
}

// Функция для открытия модального окна Арианы
function openModalArisha() {
    modalOverlayArisha.style.display = "flex"; // Показываем модальное окно Арианы
}

// Функция для закрытия модальных окон
function closeModal(modal) {
    modal.style.display = "none"; // Прячем модальное окно
}

// Добавляем обработчик событий на кнопки
measurementsBtnMira.addEventListener("click", openModalMira);
measurementsBtnArisha.addEventListener("click", openModalArisha);

// Добавляем обработчик события на кнопки закрытия модальных окон
closeBtnMira.addEventListener("click", () => closeModal(modalOverlayMira));
closeBtnArisha.addEventListener("click", () => closeModal(modalOverlayArisha));

// Закрытие модального окна при клике вне его содержимого
window.addEventListener("click", (e) => {
    if (e.target === modalOverlayMira) {
        closeModal(modalOverlayMira);
    }
    if (e.target === modalOverlayArisha) {
        closeModal(modalOverlayArisha);
    }
});


// ==================

