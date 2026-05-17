// Хранилище (localStorage)
let currentData = {
    services: [],
    prices: [],
    portfolio: [],
    blog: [],
    master: {}
};

// Загрузка данных из localStorage
function loadAllData() {
    const saved = localStorage.getItem('nailmaster_data');
    if (saved) {
        currentData = JSON.parse(saved);
    } else {
        // Данные
        currentData = {
            services: [
                {
                    id: 1,
                    name: 'Маникюр без покрытия',
                    price: '1000₽',
                    img: 'photo/7manic.png',
                    description: 'Классический маникюр с уходом за кутикулой.'
                },
                {
                    id: 2,
                    name: 'Педикюр + пяточки',
                    price: '2800₽',
                    img: 'photo/88.png',
                    description: 'Безопасный аппаратный педикюр с однотонным покрытием, а также шлифовка и обработка пяточек.'
                },
                {
                    id: 3,
                    name: 'Маникюр с покрытием',
                    price: '1800₽',
                    img: 'photo/5manic.png',
                    description: 'Маникюр с укреплением и покрытием гель-лак (без дизайна, без наращивания).'
                },
                {
                    id: 4,
                    name: 'Маникюр + наращивание',
                    price: '2500₽',
                    img: 'photo/2manic.png',
                    description: 'Маникюр-наращивание с покрытием гель-лак (без дизайна), длина до 4 единиц.'
                },
                {
                    id: 5,
                    name: 'Маникюр + дизайн',
                    price: '2200₽',
                    img: 'photo/6manic.png',
                    description: 'Маникюр с укреплением (без наращивания), покрытием гель-лак и дизайном. Дизайн заранее необходимо согласовывать с мастером.'
                },
                {
                    id: 6,
                    name: 'Маникюр + наращивание + дизайн',
                    price: '2800₽',
                    img: 'photo/1manic.png',
                    description: 'Маникюр-наращивание с покрытием гель-лак и дизайном, длина до 4 единиц. Дизайн заранее необходимо согласовывать с мастером.'
                }
            ],
            prices: [
                { id: 1, service: 'Маникюр без покрытия', cost: '1000₽' },
                { id: 2, service: 'Маникюр с покрытием (без наращивания и дизайна)', cost: '1800₽' },
                { id: 3, service: 'Маникюр с покрытием + наращивание (без дизайна)', cost: '2500₽' },
                { id: 4, service: 'Маникюр с покрытием + наращивание + дизайн', cost: '2800₽' },
                { id: 5, service: 'Маникюр с покрытием + дизайн (без наращивания)', cost: '2200₽' },
                { id: 6, service: 'Укрепление (дополнительно)', cost: '500₽' },
                { id: 7, service: 'Снятие покрытия (отдельно)', cost: '400₽' },
                { id: 8, service: 'Дизайн (педикюр)', cost: 'от 400₽' },
                { id: 9, service: 'Дизайн (маникюр)', cost: 'от 200₽' },
                { id: 10, service: 'Педикюр + пяточки', cost: '2800₽' }
            ],
            portfolio: [
                { id: 1, img: 'photo/1manic.png', category: 'design' },
                { id: 2, img: 'photo/2manic.png', category: 'coating' },
                { id: 3, img: 'photo/3manic.png', category: 'manicure' },
                { id: 4, img: 'photo/4manic.png', category: 'design' },
                { id: 5, img: 'photo/5manic.png', category: 'manicure' },
                { id: 6, img: 'photo/6manic.png', category: 'design' },
                { id: 7, img: 'photo/7manic.png', category: 'coating' },
                { id: 8, img: 'photo/1nogi.png', category: 'pedicure' },
                { id: 9, img: 'photo/2nogi.png', category: 'pedicure' },
                { id: 10, img: 'photo/3nogi.png', category: 'pedicure' }
            ],
            blog: [
                {
                    id: 1,
                    title: '🎉 Скидка 30% на педикюр',
                    date: '01.04.2026',
                    content: 'Только до конца апреля! Успейте записаться на аппаратный педикюр со скидкой 30%.'
                },
                {
                    id: 2,
                    title: '💡 Как ухаживать за кутикулой дома',
                    date: '15.03.2026',
                    content: 'Полезные советы от мастера: масла, ванночки и правильные инструменты.'
                },
                {
                    id: 3,
                    title: '✨ Новинка: дизайн с фольгой',
                    date: '10.03.2026',
                    content: 'Эффектный и стильный дизайн — теперь доступен у нас по специальной цене.'
                }
            ],
            master: {
                name: 'Майгур Елена',
                experience: '⭐ Стаж 5 лет | Преподаватель курсов | Топ-мастер 2024',
                bio: 'Дипломированный специалист, постоянно повышаю квалификацию. Использую только премиальные материалы (Luxio, TNL, Kodi). Гарантирую стойкость покрытия до 4 недель. Создаю уютную атмосферу и индивидуальный подход к каждому клиенту.',
                photo: 'master.png',
                certificates: [
                    'Диплом международной школы ногтевого сервиса',
                    'Сертификат по дизайну ногтей 2024',
                    'Повышение квалификации Luxio'
                ]
            }
        };
    }
    saveToLocalStorage();
    renderAll();
}

function saveToLocalStorage() {
    localStorage.setItem('nailmaster_data', JSON.stringify(currentData));
}

// РЕНДЕРИНГ
function renderAll() {
    renderServices();
    renderPrices();
    renderPortfolio();
    renderBlog();
    renderMaster();
    renderBookingServices();
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (grid && currentData.services) {
        grid.innerHTML = currentData.services.map(s => `
            <div class="service-card">
                <img src="${escapeHtml(s.img)}" alt="${escapeHtml(s.name)}">
                <h3>${escapeHtml(s.name)}</h3>
                <p>${s.price}</p>
                <p class="service-desc">${escapeHtml(s.description || '')}</p>
            </div>
        `).join('');
    }
}

function renderPrices() {
    const table = document.getElementById('priceTable');
    if (table && currentData.prices) {
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                ${currentData.prices.map(p => `
                    <tr>
                        <td style="padding: 12px;">${escapeHtml(p.service)}</td>
                        <td style="padding: 12px;">${p.cost}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }
}

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (grid && currentData.portfolio) {
        grid.innerHTML = currentData.portfolio.map(p => `
            <div class="portfolio-item" data-category="${p.category}">
                <img src="${p.img}" alt="Работа" loading="lazy">
            </div>
        `).join('');
    }
}

function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (grid && currentData.blog) {
        grid.innerHTML = currentData.blog.map(b => `
            <div class="blog-card">
                <h3>${escapeHtml(b.title)}</h3>
                <small>${b.date}</small>
                <p>${escapeHtml(b.content)}</p>
            </div>
        `).join('');
    }
}

function renderMaster() {
    const m = currentData.master;
    if (m) {
        const nameEl = document.getElementById('masterName');
        const expEl = document.getElementById('masterExp');
        const bioEl = document.getElementById('masterBio');
        const photoEl = document.getElementById('masterPhoto');
        const certsEl = document.getElementById('certificatesList');
        if (nameEl) nameEl.textContent = m.name || '';
        if (expEl) expEl.textContent = m.experience || '';
        if (bioEl) bioEl.textContent = m.bio || '';
        if (photoEl) photoEl.src = m.photo || '';
        if (certsEl && m.certificates) {
            certsEl.innerHTML = m.certificates.map(c => `
                <span class="certificate-item">📜 ${escapeHtml(c)}</span>
            `).join('');
        }
    }
}

// Рендеринг выпадающего списка услуг в форме записи
function renderBookingServices() {
    const select = document.getElementById('bookingService');
    if (!select) return;
    
    if (currentData.prices && currentData.prices.length > 0) {
        // Берём названия услуг из прайс-листа
        const servicesList = currentData.prices.map(p => p.service);
        
        select.innerHTML = servicesList.map(service => 
            `<option value="${escapeHtml(service)}">${escapeHtml(service)}</option>`
        ).join('');
    } else {
        // Запасной вариант, если данных нет
        select.innerHTML = '<option value="">Услуги не загружены</option>';
    }
}

// ЗАПИСЬ(календарь)
let currentAvailableSlots = [];

function generateTimeSlots() {
    const slots = [];
    for (let hour = 8; hour < 20; hour++) {
        for (let minute = 0; minute < 60; minute += 20) {
            const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
            const label = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            slots.push({ value: timeStr, label: label });
        }
    }
    return slots;
}

function loadAvailableTimeSlots(date) {
    const timeSelect = document.getElementById('bookingTime');
    if (!timeSelect) return;
    timeSelect.innerHTML = '<option value="">Загрузка...</option>';
    timeSelect.disabled = true;
    
    setTimeout(() => {
        const selectedDate = new Date(date);
        const dayOfWeek = selectedDate.getDay();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            timeSelect.innerHTML = '<option value="">Выходной день (сб и вс записи нет)</option>';
            timeSelect.disabled = true;
            return;
        }
        
        const allSlots = generateTimeSlots();
        const bookings = JSON.parse(localStorage.getItem('nailmaster_bookings') || '[]');
        const dayBookings = bookings.filter(b => b.date === date);
        
        const blockedTimes = {};
        dayBookings.forEach(booking => {
            const parts = booking.time.split(':');
            const minutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
            const startBlock = Math.max(8 * 60, minutes - 120);
            const endBlock = Math.min(20 * 60, minutes + 120);
            for (let t = startBlock; t < endBlock; t += 20) {
                const h = Math.floor(t / 60);
                const m = t % 60;
                if (h >= 8 && h < 20) {
                    blockedTimes[`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00`] = true;
                }
            }
        });
        
        const availableSlots = allSlots.filter(slot => !blockedTimes[slot.value]);
        currentAvailableSlots = availableSlots;
        
        if (availableSlots.length === 0) {
            timeSelect.innerHTML = '<option value="">Нет свободных слотов</option>';
            timeSelect.disabled = true;
        } else {
            timeSelect.innerHTML = '<option value="">Выберите время</option>' + 
                availableSlots.map(slot => `<option value="${slot.value}">${slot.label}</option>`).join('');
            timeSelect.disabled = false;
        }
    }, 50);
}

// ЗАПИСЬ КЛИЕНТА 
function addBooking(bookingData) {
    const bookings = JSON.parse(localStorage.getItem('nailmaster_bookings') || '[]');
    bookings.push({
        ...bookingData,
        id: Date.now(),
        created_at: new Date().toLocaleString('ru-RU')
    });
    localStorage.setItem('nailmaster_bookings', JSON.stringify(bookings));
    return true;
}

function getBookings() {
    return JSON.parse(localStorage.getItem('nailmaster_bookings') || '[]');
}

// Фильтры портфолио 
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.filter;
                const items = document.querySelectorAll('.portfolio-item');
                items.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// PDF 
function initPDF() {
    const btn = document.getElementById('downloadPDF');
    if (btn) {
        btn.addEventListener('click', () => {
            const rows = document.querySelectorAll('#priceTable tbody tr');
            
            // Собираем строки таблицы
            let tableRows = '';
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length >= 2) {
                    tableRows += `
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                                ${cells[0].innerText}
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                                ${cells[1].innerText}
                            </td>
                        </tr>
                    `;
                }
            });
            
            // Код для печати
            const printContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Прайс-лист NailMaster</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body {
                            font-family: 'Nunito', 'Arial', sans-serif;
                            padding: 30px;
                            background-image: radial-gradient(circle, #5E1E2B 2px, transparent 2px);
                            background-size: 30px 30px;
                            background-color: #faf8f5;
                            min-height: 100vh;
                        }
                        .container {
                            max-width: 900px;
                            margin: 0 auto;
                            background: rgba(255, 255, 255, 0.92);
                            border-radius: 24px;
                            padding: 30px;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        }
                        h2 {
                            text-align: center;
                            color: #5E1E2B;
                            margin-bottom: 25px;
                            font-size: 28px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th {
                            background: #D2BCA8;
                            padding: 12px;
                            text-align: left;
                            font-weight: 600;
                        }
                        td {
                            padding: 10px 12px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 25px;
                            padding-top: 15px;
                            border-top: 1px solid #ddd;
                            color: #888;
                            font-size: 12px;
                        }
                        @media print {
                            body {
                                padding: 0;
                                background-image: radial-gradient(circle, #5E1E2B 1px, transparent 1px);
                                background-size: 25px 25px;
                            }
                            .container {
                                background: white;
                                box-shadow: none;
                                padding: 20px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>📋 Прайс-лист NailMaster</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Услуга</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                        <div class="footer">
                            <p>Актуально на ${new Date().toLocaleDateString('ru-RU')}</p>
                            <p>© 2026 NailMaster — Студия ногтевого сервиса</p>
                        </div>
                    </div>
                </body>
                </html>
            `;
            
            const win = window.open('', '_blank');
            win.document.write(printContent);
            win.document.close();
            win.print();
        });
    }
}

//  АДМИН-ПАНЕЛЬ (функции)
function renderServicesAdmin() {
    const container = document.getElementById('servicesList');
    if (!container) return;
    container.innerHTML = currentData.services.map(s => `
        <div class="edit-item">
            <input value="${escapeHtml(s.name)}" data-field="name" data-id="${s.id}" placeholder="Название">
            <input value="${escapeHtml(s.price)}" data-field="price" data-id="${s.id}" placeholder="Цена">
            <input value="${escapeHtml(s.img)}" data-field="img" data-id="${s.id}" placeholder="URL фото">
            <textarea data-field="description" data-id="${s.id}" placeholder="Описание">
                ${escapeHtml(s.description || '')}
            </textarea>
            <button onclick="deleteServiceItem(${s.id})" class="delete-btn">Удалить</button>
        </div>
    `).join('');
    attachAdminListeners(currentData.services);
}

function addService() {
    currentData.services.push({
        id: Date.now(),
        name: 'Новая услуга',
        price: '1000₽',
        img: 'https://placehold.co/400x300/D2BCA8/white?text=Услуга',
        description: ''
    });
    renderServicesAdmin();
}

function deleteServiceItem(id) {
    currentData.services = currentData.services.filter(s => s.id !== id);
    renderServicesAdmin();
}

function saveServices() {
    saveToLocalStorage();
    alert('✅ Услуги сохранены!');
}

function renderPricesAdmin() {
    const container = document.getElementById('pricesList');
    if (!container) return;
    container.innerHTML = currentData.prices.map(p => `
        <div class="edit-item">
            <input value="${escapeHtml(p.service)}" data-field="service" data-id="${p.id}" placeholder="Услуга">
            <input value="${escapeHtml(p.cost)}" data-field="cost" data-id="${p.id}" placeholder="Цена">
            <button onclick="deletePriceItem(${p.id})" class="delete-btn">Удалить</button>
        </div>
    `).join('');
    attachAdminListeners(currentData.prices);
}

function addPrice() {
    currentData.prices.push({
        id: Date.now(),
        service: 'Новая услуга',
        cost: '500₽'
    });
    renderPricesAdmin();
}

function deletePriceItem(id) {
    currentData.prices = currentData.prices.filter(p => p.id !== id);
    renderPricesAdmin();
}

function savePrices() {
    saveToLocalStorage();
    renderBookingServices(); // Обновляем список услуг в форме записи
    alert('✅ Прайс-лист сохранен!');
}

function renderPortfolioAdmin() {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    container.innerHTML = currentData.portfolio.map(p => `
        <div class="portfolio-admin-item">
            <img src="${escapeHtml(p.img)}">
            <select data-id="${p.id}" class="portfolio-category">
                <option value="manicure" ${p.category === 'manicure' ? 'selected' : ''}>Маникюр</option>
                <option value="pedicure" ${p.category === 'pedicure' ? 'selected' : ''}>Педикюр</option>
                <option value="design" ${p.category === 'design' ? 'selected' : ''}>Дизайн</option>
                <option value="coating" ${p.category === 'coating' ? 'selected' : ''}>Покрытие</option>
            </select>
            <button onclick="deletePortfolioItem(${p.id})" class="delete-btn">Удалить</button>
        </div>
    `).join('');
    document.querySelectorAll('.portfolio-category').forEach(select => {
        select.addEventListener('change', (e) => {
            const id = parseInt(select.dataset.id);
            const item = currentData.portfolio.find(p => p.id === id);
            if (item) item.category = select.value;
        });
    });
}

function deletePortfolioItem(id) {
    currentData.portfolio = currentData.portfolio.filter(p => p.id !== id);
    renderPortfolioAdmin();
}

function uploadImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];
    const category = document.getElementById('categorySelect').value;
    if (!file) {
        alert('Выберите файл');
        return;
    }
    if (!file.type.startsWith('image/')) {
        alert('Только изображения');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        currentData.portfolio.push({
            id: Date.now(),
            img: e.target.result,
            category: category
        });
        renderPortfolioAdmin();
        input.value = '';
        alert('Фото добавлено!');
    };
    reader.readAsDataURL(file);
}

function savePortfolio() {
    saveToLocalStorage();
    alert('✅ Портфолио сохранено!');
}

function renderBlogAdmin() {
    const container = document.getElementById('blogList');
    if (!container) return;
    container.innerHTML = currentData.blog.map(b => `
        <div class="edit-item">
            <input value="${escapeHtml(b.title)}" data-field="title" data-id="${b.id}" placeholder="Заголовок">
            <input value="${escapeHtml(b.date)}" data-field="date" data-id="${b.id}" placeholder="Дата">
            <textarea data-field="content" data-id="${b.id}" rows="3" placeholder="Текст">
                ${escapeHtml(b.content)}
            </textarea>
            <button onclick="deleteBlogItem(${b.id})" class="delete-btn">Удалить</button>
        </div>
    `).join('');
    attachAdminListeners(currentData.blog);
}

function addBlogPost() {
    currentData.blog.push({
        id: Date.now(),
        title: 'Новая акция',
        date: new Date().toLocaleDateString('ru-RU'),
        content: 'Текст...'
    });
    renderBlogAdmin();
}

function deleteBlogItem(id) {
    currentData.blog = currentData.blog.filter(b => b.id !== id);
    renderBlogAdmin();
}

function saveBlog() {
    saveToLocalStorage();
    alert('✅ Блог сохранен!');
}

function renderMasterAdmin() {
    const m = currentData.master;
    document.getElementById('masterName').value = m.name || '';
    document.getElementById('masterExp').value = m.experience || '';
    document.getElementById('masterBio').value = m.bio || '';
    document.getElementById('masterPhoto').value = m.photo || '';
    document.getElementById('masterCerts').value = (m.certificates || []).join('\n');
}

function saveMaster() {
    currentData.master = {
        name: document.getElementById('masterName').value,
        experience: document.getElementById('masterExp').value,
        bio: document.getElementById('masterBio').value,
        photo: document.getElementById('masterPhoto').value,
        certificates: document.getElementById('masterCerts').value.split('\n').filter(c => c.trim())
    };
    saveToLocalStorage();
    alert('✅ Информация о мастере сохранена!');
}

function renderBookingsAdmin() {
    const container = document.getElementById('bookingsList');
    if (!container) return;
    const bookings = getBookings();
    if (bookings.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">Пока нет заявок</p>';
        return;
    }
    container.innerHTML = bookings.map(b => `
        <div class="booking-card" data-id="${b.id}">
            <strong>${escapeHtml(b.name)}</strong><br>
            📞 ${escapeHtml(b.phone)}<br>
            📧 ${escapeHtml(b.email)}<br>
            💅 ${escapeHtml(b.service)}<br>
            📅 ${b.date} ${b.time ? b.time.substring(0,5) : ''}<br>
            💬 ${b.comment || '-'}<br>
            <small>${b.created_at}</small><br><br>
            <button onclick="deleteBooking(${b.id})" class="delete-btn" style="margin-top: 8px;">
                🗑 Удалить заявку
            </button>
        </div>
    `).join('');
}

function deleteBooking(id) {
    if (confirm('❓ Вы уверены, что хотите удалить эту заявку?')) {
        let bookings = JSON.parse(localStorage.getItem('nailmaster_bookings') || '[]');
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('nailmaster_bookings', JSON.stringify(bookings));
        alert('✅ Заявка удалена!');
        renderBookingsAdmin();
    }
}

function attachAdminListeners(dataArray) {
    document.querySelectorAll('[data-field]').forEach(el => {
        el.removeEventListener('change', handleChange);
        el.addEventListener('change', handleChange);
    });
    function handleChange(e) {
        const id = parseInt(e.target.dataset.id);
        const field = e.target.dataset.field;
        const item = dataArray.find(i => i.id === id);
        if (item) item[field] = e.target.value;
    }
}

function initAdminPanel() {
    if (!document.getElementById('servicesList')) return;
    renderServicesAdmin();
    renderPricesAdmin();
    renderPortfolioAdmin();
    renderBlogAdmin();
    renderMasterAdmin();
    renderBookingsAdmin();
}

// ну допы
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>]/g, m => {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.addEventListener('change', (e) => {
            if (e.target.value) loadAvailableTimeSlots(e.target.value);
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        if (!data.name || !data.phone || !data.date || !data.time) {
            alert('❌ Заполните обязательные поля');
            return;
        }
        const isAvailable = currentAvailableSlots.some(slot => slot.value === data.time);
        if (!isAvailable) {
            alert('❌ Время уже занято');
            loadAvailableTimeSlots(data.date);
            return;
        }
        addBooking(data);
        alert('✅ Заявка отправлена! Мастер свяжется с вами.');
        form.reset();
        const timeSelect = document.getElementById('bookingTime');
        if (timeSelect) {
            timeSelect.innerHTML = '<option value="">Сначала выберите дату</option>';
            timeSelect.disabled = true;
        }
    });
}

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-list');
    if (btn && nav) {
        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.querySelector('.nav-list')?.classList.remove('active');
            }
        });
    });
}

function initAdminButton() {
    const btn = document.getElementById('adminBtn');
    if (btn) {
        btn.addEventListener('click', () => window.location.href = 'admin.html');
    }
}

function initLogout() {
    const btn = document.getElementById('logoutBtn');
    if (btn) {
        btn.addEventListener('click', () => window.location.href = 'index.html');
    }
}

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
}

// ЗАПУСК
if (document.getElementById('servicesGrid')) {
    loadAllData();
    initBookingForm();
    initMobileMenu();
    initSmoothScroll();
    initFilters();
    initPDF();
    initAdminButton();
}
if (document.getElementById('servicesList')) {
    loadAllData();
    initAdminPanel();
    initTabs();
    initLogout();
}