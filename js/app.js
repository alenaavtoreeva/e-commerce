// Данные товаров
const PRODUCTS = [
  {
    id: 'g1', 
    title: 'The Legend of Zelda: Tears of the Kingdom', 
    desc: 'Оригинальная коробочная версия для Nintendo Switch. Продолжение легендарной игры Breath of the Wild с новыми локациями, способностями и сюжетом.', 
    price: 4990, 
    img: 'img/zelda.jpg',
    category: 'Игра',
    features: [
      'Продолжение Breath of the Wild',
      'Новые локации в небесах и под землей',
      'Улучшенная система crafting',
      'Более 100 часов игрового процесса',
      'Поддержка русского языка'
    ],
    details: 'The Legend of Zelda: Tears of the Kingdom — это долгожданное продолжение легендарной игры Breath of the Wild. Отправляйтесь в новое приключение по Хайрулу, исследуйте таинственные острова в небесах и опасные пещеры под землей. С помощью новых способностей создавайте уникальные транспортные средства и оружие, чтобы противостоять могущественным врагам.'
  },
  {
    id: 'g2', 
    title: 'Super Mario Odyssey', 
    desc: 'Полное приключение Марио в 3D — физическое издание с коробкой и инструкцией. Исследуйте разнообразные королевства в компании Кеппи.', 
    price: 4290, 
    img: 'img/mario.jpg',
    category: 'Игра',
    features: [
      'Более 15 уникальных королевств',
      'Новый персонаж Кеппи',
      'Механика захвата врагов и объектов',
      'Кооперативный режим для двух игроков',
      'Коллекционные луны для исследования'
    ],
    details: 'Super Mario Odyssey возвращает нас к корням 3D-платформеров с новой механикой захвата. Бросьте свою шляпу Кеппи, чтобы захватывать врагов и объекты, используя их уникальные способности. Путешествуйте по разнообразным королевствам на воздушном корабле "Одиссея" в поисках лун, чтобы спасти принцессу Пит от свадьбы с Боузером.'
  },
  {
    id: 'f1', 
    title: 'Фигурка amiibo — Link (Zelda Series)', 
    desc: 'Коллекционная фигурка NFC для игр Nintendo. Разблокируйте уникальный контент в играх серии Zelda и других проектах.', 
    price: 2490, 
    img: 'img/amiibo-link.jpg',
    category: 'Аксессуар',
    features: [
      'Высокодетализированная коллекционная фигурка',
      'NFC-чип для взаимодействия с играми',
      'Разблокировка уникального контента',
      'Поддержка в Zelda, Smash Bros и других играх',
      'Официальная лицензия Nintendo'
    ],
    details: 'Фигурка amiibo Link из серии The Legend of Zelda — это высокодетализированная коллекционная фигурка с встроенным NFC-чипом. При использовании с играми Nintendo Switch она разблокирует уникальный контент: костюмы, оружие, предметы и других персонажей. Фигурка выполнена в стиле игры The Legend of Zelda: Breath of the Wild.'
  },
  {
    id: 'g3',
    title: 'Animal Crossing: New Horizons',
    desc: 'Создайте свой идеальный остров в этой уютной игре с бесконечными возможностями. Приглашайте животных-соседей, ловите рыб и насекомых.',
    price: 3990,
    img: 'img/animal-crossing.jpg',
    category: 'Игра',
    features: [
      'Создайте и кастомизируйте свой остров',
      'Более 400 видов рыб и насекомых',
      'Динамическая смена времен года',
      'Мультиплеер до 8 игроков',
      'Постоянные обновления и события'
    ],
    details: 'Animal Crossing: New Horizons — это уютная жизненная симуляция, где вы создаете свой собственный остров с нуля. Ловите рыб, собирайте насекомых, сажайте цветы и общайтесь с милыми животными-соседями. Игра синхронизирована с реальным временем и временами года, предлагая постоянно меняющийся игровой мир.'
  },
  {
    id: 'f2',
    title: 'Nintendo Switch Pro Controller',
    desc: 'Профессиональный контроллер для Nintendo Switch с улучшенной эргономикой, гироскопом, HD-вибрацией и 40-часовой батареей.',
    price: 5490,
    img: 'img/pro-controller.jpg',
    category: 'Аксессуар',
    features: [
      'Улучшенная эргономика для длительных игровых сессий',
      'HD-вибрация для тактильной обратной связи',
      'Встроенный гироскоп и акселерометр',
      'До 40 часов работы от батареи',
      'Подключается через USB-C или Bluetooth'
    ],
    details: 'Nintendo Switch Pro Controller разработан для комфортной игры в любом режиме. Благодаря улучшенной эргономике и аналоговым стикам с высокой точностью он идеально подходит для длительных игровых сессий. Контроллер оснащен HD-вибрацией, гироскопом и акселерометром для полной совместимости со всеми играми Switch.'
  },
  {
    id: 'g4',
    title: 'Pokémon Scarlet / Violet',
    desc: 'Отправляйтесь в приключение по открытому миру в новейшей части Pokémon. Исследуйте регион Паления, ловите новых покемонов и сражайтесь в эпических битвах.',
    price: 4590,
    img: 'img/pokemon.png',
    category: 'Игра',
    features: [
      'Полностью открытый мир для исследования',
      'Более 100 новых покемонов',
      'Три разных сюжетных линии',
      'Кооперативная игра до 4 игроков',
      'Новые механики теражайзинг и райд-баттлы'
    ],
    details: 'Pokémon Scarlet и Violet представляют собой новую эру покемонов с полностью открытым миром. Исследуйте регион Паления, где городские районы плавно переходят в дикую природу без переходов. Выберите одну из трех сюжетных линий, ловите покемонов в любом порядке и участвуйте в новых райд-баттлах вместе с друзьями.'
  }
];

// Промокоды
const PROMOS = {
  'SAVE10': {type:'percent', value:10, label:'10% скидка на весь заказ'},
  'SAVE50': {type:'fixed', value:50, label:'50 ₽ скидка на заказ'},
  'FREESHIP': {type:'shipping', value:0, label:'Бесплатная доставка'}
};

// localStorage keys
const LS_KEYS = {CART:'demo_cart_v3', PROMO:'demo_cart_promo_v3'};

// State
const state = {
  cart: {}, // id -> qty
  promo: null,
  currentProduct: null
};

// DOM refs
const productsEl = document.getElementById('products');
const cartListEl = document.getElementById('cartList');
const itemsCountEl = document.getElementById('itemsCount');
const subtotalEl = document.getElementById('subtotal');
const discountEl = document.getElementById('discount');
const shippingEl = document.getElementById('shipping');
const totalEl = document.getElementById('total');
const promoInput = document.getElementById('promoInput');
const applyPromoBtn = document.getElementById('applyPromo');
const promoMsg = document.getElementById('promoMsg');
const checkoutBtn = document.getElementById('checkout');
const clearCartBtn = document.getElementById('clearCart');
const cartIndicator = document.getElementById('cartIndicator');
const cartCountEl = document.querySelector('.cart-count');

// Modal refs
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalAddToCart = document.getElementById('modalAddToCart');
const modalQuantityControls = document.getElementById('modalQuantityControls');
const modalQuantity = document.getElementById('modalQuantity');
const modalDecBtn = document.getElementById('modalDecBtn');
const modalIncBtn = document.getElementById('modalIncBtn');

// Инициализация
function init(){
  loadFromStorage();
  renderProducts();
  renderCart();
  attachEvents();
}

// Рендер товаров
function renderProducts(){
  console.log('renderProducts вызвана, товаров:', PRODUCTS.length);
  productsEl.innerHTML = '';
  PRODUCTS.forEach(p => {
    const qty = getQty(p.id);
    const el = document.createElement('div');
    el.className = 'product-card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}" class="product-image" data-id="${p.id}">
      <div class="product-content">
        <span class="product-category">${p.category}</span>
        <h3 class="product-title" data-id="${p.id}">${p.title}</h3>
        <p class="product-description">${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">${formatMoney(p.price)}</div>
          <div class="product-actions">
            ${qty > 0 ? `
              <button class="btn-quantity" data-action="dec" data-id="${p.id}" aria-label="уменьшить">−</button>
              <div class="quantity-display">${qty}</div>
              <button class="btn-quantity" data-action="inc" data-id="${p.id}" aria-label="увеличить">+</button>
            ` : `
              <button class="btn-add" data-action="add" data-id="${p.id}">
                <i class="fas fa-cart-plus"></i> В корзину
              </button>
            `}
          </div>
        </div>
      </div>
    `;
    productsEl.appendChild(el);
  });
  
  // Добавляем обработчики событий
  productsEl.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', onProductAction);
  });
  
  // Добавляем обработчики для открытия модального окна
  productsEl.querySelectorAll('.product-image, .product-title').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      openProductModal(id);
    });
  });
}

// Открытие модального окна с информацией о товаре
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  state.currentProduct = product;
  
  // Заполняем модальное окно данными
  modalTitle.textContent = product.title;
  modalImage.src = product.img;
  modalImage.alt = product.title;
  modalCategory.textContent = product.category;
  modalPrice.textContent = formatMoney(product.price);
  modalDescription.textContent = product.details || product.desc;
  
  // Заполняем особенности товара
  modalFeatures.innerHTML = '';
  if (product.features && product.features.length > 0) {
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
      modalFeatures.appendChild(li);
    });
  }
  
  // Обновляем состояние кнопок в модальном окне
  const qty = getQty(productId);
  if (qty > 0) {
    modalAddToCart.style.display = 'none';
    modalQuantityControls.style.display = 'flex';
    modalQuantity.textContent = qty;
  } else {
    modalAddToCart.style.display = 'flex';
    modalQuantityControls.style.display = 'none';
  }
  
  // Показываем модальное окно
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeProductModal() {
  productModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  state.currentProduct = null;
}

// Рендер корзины
function renderCart(){
  // Получаем товары в корзине
  const items = Object.entries(state.cart).map(([id,qty]) => {
    const prod = PRODUCTS.find(p => p.id === id);
    return {...prod, qty};
  }).filter(i => i.qty > 0);

  // Обновляем индикатор корзины
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalItems;
  
  // Рендерим список товаров в корзине
  if (items.length > 0) {
    cartListEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.title}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${item.qty} × ${formatMoney(item.price)} = ${formatMoney(item.price * item.qty)}</div>
          <div class="cart-item-actions">
            <button class="btn-cart-action" data-action="dec" data-id="${item.id}" aria-label="уменьшить">−</button>
            <button class="btn-cart-action" data-action="inc" data-id="${item.id}" aria-label="увеличить">+</button>
            <button class="btn-cart-action remove" data-action="remove" data-id="${item.id}" aria-label="удалить"><i class="fas fa-times"></i></button>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    cartListEl.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-basket"></i>
        <p>Ваша корзина пуста</p>
        <p style="font-size: 13px; margin-top: 5px;">Добавьте товары из каталога</p>
      </div>
    `;
  }

  // Рассчитываем итоги
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsCount = items.reduce((sum, item) => sum + item.qty, 0);
  const shipping = calcShipping(subtotal, state.promo);
  const discount = calcDiscount(subtotal, state.promo);
  const total = Math.max(0, subtotal - discount + shipping);

  // Обновляем значения в интерфейсе
  itemsCountEl.textContent = itemsCount;
  subtotalEl.textContent = formatMoney(subtotal);
  discountEl.textContent = formatMoney(discount);
  shippingEl.textContent = formatMoney(shipping);
  totalEl.textContent = formatMoney(total);

  // Обновляем сообщение о промокоде
  if (state.promo && PROMOS[state.promo]) {
    promoMsg.textContent = `Промокод "${state.promo}" применен: ${PROMOS[state.promo].label}`;
    promoMsg.className = 'promo-message success';
    promoInput.value = state.promo;
  } else {
    promoMsg.textContent = '';
    promoMsg.className = 'promo-message';
  }

  // Добавляем обработчики событий для элементов корзины
  cartListEl.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', onCartAction);
  });

  // Обновляем количества в списке товаров
  document.querySelectorAll('.product-card .quantity-display').forEach(display => {
    const card = display.closest('.product-card');
    const id = card.querySelector('[data-id]').dataset.id;
    const qty = getQty(id);
    
    // Обновляем отображение количества
    display.textContent = qty;
    
    // Показываем/скрываем кнопки в зависимости от количества
    const actionsDiv = card.querySelector('.product-actions');
    if (qty > 0) {
      actionsDiv.innerHTML = `
        <button class="btn-quantity" data-action="dec" data-id="${id}" aria-label="уменьшить">−</button>
        <div class="quantity-display">${qty}</div>
        <button class="btn-quantity" data-action="inc" data-id="${id}" aria-label="увеличить">+</button>
      `;
      
      // Добавляем обработчики для новых кнопок
      actionsDiv.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', onProductAction);
      });
    } else {
      actionsDiv.innerHTML = `
        <button class="btn-add" data-action="add" data-id="${id}">
          <i class="fas fa-cart-plus"></i> В корзину
        </button>
      `;
      
      // Добавляем обработчик для новой кнопки
      actionsDiv.querySelector('[data-action]').addEventListener('click', onProductAction);
    }
  });

  // Сохраняем состояние
  saveToStorage();
}

// Вспомогательные функции
function formatMoney(num){ 
  return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0}).format(num); 
}

function getQty(id){ 
  return state.cart[id] || 0; 
}

function changeQty(id, delta){ 
  const cur = getQty(id); 
  const next = Math.max(0, cur + delta); 
  if(next === 0){ 
    delete state.cart[id]; 
  } else { 
    state.cart[id] = next; 
  } 
  renderCart();
  renderProducts();
  
  // Обновляем модальное окно если оно открыто для этого товара
  if (state.currentProduct && state.currentProduct.id === id) {
    if (next > 0) {
      modalAddToCart.style.display = 'none';
      modalQuantityControls.style.display = 'flex';
      modalQuantity.textContent = next;
    } else {
      modalAddToCart.style.display = 'flex';
      modalQuantityControls.style.display = 'none';
    }
  }
}

function setQty(id, value){ 
  const v = Math.max(0, Math.trunc(Number(value) || 0)); 
  if(v <= 0) {
    delete state.cart[id]; 
  } else { 
    state.cart[id] = v; 
  } 
  renderCart();
  renderProducts();
}

function onProductAction(e){
  e.stopPropagation();
  const btn = e.currentTarget;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  
  if(action === 'add') {
    state.cart[id] = (state.cart[id] || 0) + 1;
    renderCart();
    renderProducts();
    
    // Обновляем модальное окно если оно открыто для этого товара
    if (state.currentProduct && state.currentProduct.id === id) {
      modalAddToCart.style.display = 'none';
      modalQuantityControls.style.display = 'flex';
      modalQuantity.textContent = getQty(id);
    }
  }
  
  if(action === 'inc') {
    changeQty(id, 1);
  }
  
  if(action === 'dec') {
    changeQty(id, -1);
  }
}

function onCartAction(e){
  const btn = e.currentTarget;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  
  if(action === 'inc') {
    changeQty(id, 1);
  }
  
  if(action === 'dec') {
    changeQty(id, -1);
  }
  
  if(action === 'remove') {
    delete state.cart[id];
    renderCart();
    renderProducts();
    
    // Обновляем модальное окно если оно открыто для этого товара
    if (state.currentProduct && state.currentProduct.id === id) {
      modalAddToCart.style.display = 'flex';
      modalQuantityControls.style.display = 'none';
    }
  }
}

function calcShipping(subtotal, promo){
  if(subtotal === 0) return 0;
  
  const base = subtotal >= 5000 ? 0 : 250;
  if(promo && PROMOS[promo] && PROMOS[promo].type === 'shipping') return 0;
  
  return base;
}

function calcDiscount(subtotal, promo){
  if(!promo || !PROMOS[promo]) return 0;
  
  const p = PROMOS[promo];
  if(p.type === 'percent') return Math.round(subtotal * (p.value / 100));
  if(p.type === 'fixed') return Math.min(p.value, subtotal);
  
  return 0;
}

// Генерация JSON файла заказа
function generateOrderJSON() {
  const items = Object.entries(state.cart).map(([id, qty]) => {
    const product = PRODUCTS.find(p => p.id === id);
    return {
      productId: id,
      productName: product.title,
      quantity: qty,
      unitPrice: product.price,
      totalPrice: product.price * qty
    };
  }).filter(item => item.quantity > 0);
  
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = calcShipping(subtotal, state.promo);
  const discount = calcDiscount(subtotal, state.promo);
  const total = Math.max(0, subtotal - discount + shipping);
  
  const order = {
    orderId: 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    timestamp: new Date().toISOString(),
    items: items,
    summary: {
      subtotal: subtotal,
      discount: discount,
      shipping: shipping,
      total: total
    },
    promoCode: state.promo || null,
    promoDetails: state.promo ? PROMOS[state.promo] : null
  };
  
  return order;
}

// Обработчики событий
function attachEvents(){
  applyPromoBtn.addEventListener('click', applyPromo);
  promoInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') applyPromo();
  });

  checkoutBtn.addEventListener('click', () => {
    const items = Object.entries(state.cart).map(([id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      return `${qty} × ${product.title}`;
    }).join('\n');
    
    if(!items) {
      alert('Корзина пуста. Добавьте товары перед оформлением заказа.');
      return;
    }
    
    // Генерируем JSON файл заказа
    const orderJSON = generateOrderJSON();
    console.log('Сгенерирован JSON заказа:', orderJSON);
    
    // В реальном проекте здесь была бы отправка на сервер
    // Для демонстрации просто покажем информацию о заказе
    alert(`Заказ оформлен!\n\nНомер заказа: ${orderJSON.orderId}\n\n${items}\n\nИтого: ${totalEl.textContent}\n\nСпасибо за покупку в SwitchVerse Store!`);
    
    // Очищаем корзину после оформления
    state.cart = {};
    state.promo = null;
    promoInput.value = '';
    renderCart();
    renderProducts();
    
    // Закрываем модальное окно если оно открыто
    closeProductModal();
  });

  clearCartBtn.addEventListener('click', () => {
    if(Object.keys(state.cart).length === 0) {
      alert('Корзина уже пуста.');
      return;
    }
    
    if(confirm('Вы уверены, что хотите очистить корзину?')) {
      state.cart = {};
      state.promo = null;
      promoInput.value = '';
      renderCart();
      renderProducts();
      
      // Закрываем модальное окно если оно открыто
      closeProductModal();
    }
  });
  
  cartIndicator.addEventListener('click', () => {
    document.querySelector('.cart-sidebar').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Обработчики для модального окна
  modalClose.addEventListener('click', closeProductModal);
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
  
  modalAddToCart.addEventListener('click', () => {
    if (state.currentProduct) {
      const id = state.currentProduct.id;
      state.cart[id] = (state.cart[id] || 0) + 1;
      renderCart();
      renderProducts();
      
      modalAddToCart.style.display = 'none';
      modalQuantityControls.style.display = 'flex';
      modalQuantity.textContent = getQty(id);
    }
  });
  
  modalDecBtn.addEventListener('click', () => {
    if (state.currentProduct) {
      changeQty(state.currentProduct.id, -1);
    }
  });
  
  modalIncBtn.addEventListener('click', () => {
    if (state.currentProduct) {
      changeQty(state.currentProduct.id, 1);
    }
  });
  
  // Закрытие модального окна по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('active')) {
      closeProductModal();
    }
  });
}

// Промокоды
function applyPromo(){
  const code = (promoInput.value || '').trim().toUpperCase();
  
  if(!code) {
    promoMsg.textContent = 'Введите промокод';
    promoMsg.className = 'promo-message error';
    return;
  }
  
  if(!PROMOS[code]) {
    promoMsg.textContent = 'Неверный промокод';
    promoMsg.className = 'promo-message error';
    return;
  }
  
  if(state.promo === code) {
    promoMsg.textContent = 'Этот промокод уже применен';
    promoMsg.className = 'promo-message';
    return;
  }
  
  state.promo = code;
  promoMsg.textContent = `Промокод "${code}" успешно применен!`;
  promoMsg.className = 'promo-message success';
  renderCart();
}

// Сохранение и загрузка из localStorage
function saveToStorage(){
  try {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(state.cart));
    localStorage.setItem(LS_KEYS.PROMO, JSON.stringify(state.promo));
  } catch(e) {
    console.warn('Не удалось сохранить в localStorage', e);
  }
}

function loadFromStorage(){
  try {
    const raw = localStorage.getItem(LS_KEYS.CART);
    const promoRaw = localStorage.getItem(LS_KEYS.PROMO);
    
    if(raw) state.cart = JSON.parse(raw);
    if(promoRaw) state.promo = JSON.parse(promoRaw);
  } catch(e) {
    console.warn('Ошибка чтения localStorage', e);
  }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM загружен, запускаем инициализацию');
  init();
});

// Экспорт для отладки
window.__demoCart = {state, PRODUCTS, PROMOS, generateOrderJSON};