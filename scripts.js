
// === МОДАЛЬНІ ВІКНА ДЛЯ ПОСЛУГ ===

// Отримуємо всі кнопки послуг, модальні вікна та кнопки закриття
const serviceButtons = document.querySelectorAll('.service-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Відкриття відповідного модального вікна
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

// Закриття модальних вікон при кліку на кнопку закриття
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Закриття модальних вікон при кліку за межами вікна
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// === ЗАВАНТАЖЕННЯ ПРИ ВІДКРИТТІ СТОРІНКИ ===

// Перевірка, чи DOM повністю завантажено
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сторінка повністю завантажена');
});

// Центрування відео при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сторінка повністю завантажена');
});

