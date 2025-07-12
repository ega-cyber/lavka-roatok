// Вкладки
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Переключение вкладок
tabButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));

    button.classList.add('active');
    const target = button.getAttribute('href').substring(1);
    document.getElementById(target).classList.add('active');
  });
});

// Модальное окно
const productModal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const products = [
  {
    title: 'Рогатка "Лесная"',
    image: 'https://via.placeholder.com/200x150',
    description: 'Рогатка из Осины, устойчива к влаге.'
  },
  {
    title: 'Рогатка "Охотничья"',
    image: 'https://via.placeholder.com/200x150',
    description: 'Рогатка из Липы, приятная и удобная в руке.'
  },
  {
    title: 'Рогатка "Классика"',
    image: 'https://via.placeholder.com/200x150',
    description: 'Надёжная и простая модель из Дуба.'
  }
];

let currentProductIndex = null;

function openModal(index) {
  const product = products[index];
  currentProductIndex = index;
  modalImage.src = product.image;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  productModal.style.display = 'flex';
}

function closeModal() {
  productModal.style.display = 'none';
}

// Корзина
let cart = [];
const cartSection = document.getElementById('cart');

function addToCart() {
  if (currentProductIndex !== null) {
    cart.push(products[currentProductIndex]);
    updateCart();
    closeModal();
  }
}

function updateCart() {
  const cartEmpty = document.getElementById('cart-empty');
  if (!cartEmpty) return;

  if (cart.length === 0) {
    cartEmpty.innerHTML = 'Пока пусто';
    return;
  }

  let html = '<ul class="cart-list">';
  cart.forEach((item, index) => {
    html += `<li>${item.title} — 300 руб. 
      <button onclick="removeFromCart(${index})">Удалить</button>
    </li>`;
  });
  html += '</ul>';

  const total = cart.length * 300;
  html += `<p>Итого: ${total} руб.</p>`;
  html += `<button onclick="checkout()">Оплатить</button>`;

  cartEmpty.innerHTML = html;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  alert('Это только проект, как таковых товаров пока нет :)');
}
