/* ============================================
   PRODUCTS DATABASE & CONFIGURATION
   ============================================ */

// Product database with translations
const productsDatabase = [
    // VEGETABLES
    {
        id: 'potato',
        category: 'vegetables',
        emoji: '🥔',
        names: { en: 'Potatoes', fr: 'Pommes de terre', ar: 'بطاطا' },
        price: 15,  // per kg in MAD (Moroccan Dirham)
    },
    {
        id: 'tomato',
        category: 'vegetables',
        emoji: '🍅',
        names: { en: 'Tomatoes', fr: 'Tomates', ar: 'طماطم' },
        price: 18,
    },
    {
        id: 'carrot',
        category: 'vegetables',
        emoji: '🥕',
        names: { en: 'Carrots', fr: 'Carottes', ar: 'جزر' },
        price: 12,
    },
    {
        id: 'onion',
        category: 'vegetables',
        emoji: '🧅',
        names: { en: 'Onions', fr: 'Oignons', ar: 'بصل' },
        price: 10,
    },
    {
        id: 'lettuce',
        category: 'vegetables',
        emoji: '🥬',
        names: { en: 'Lettuce', fr: 'Laitue', ar: 'خس' },
        price: 14,
    },
    {
        id: 'cucumber',
        category: 'vegetables',
        emoji: '🥒',
        names: { en: 'Cucumbers', fr: 'Concombres', ar: 'خيار' },
        price: 13,
    },
    {
        id: 'pepper',
        category: 'vegetables',
        emoji: '🫑',
        names: { en: 'Bell Peppers', fr: 'Poivrons', ar: 'فليفلة' },
        price: 20,
    },
    {
        id: 'garlic',
        category: 'vegetables',
        emoji: '🧄',
        names: { en: 'Garlic', fr: 'Ail', ar: 'ثوم' },
        price: 25,
    },

    // HERBS & SALADS
    {
        id: 'absinthe',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Wormwood', fr: 'Absinthe', ar: 'شيح' },
        price: 3.00,
        image: 'images/herbes/absinthe.png'
    },
    {
        id: 'aneth',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Dill', fr: 'Aneth', ar: 'شبت' },
        price: 12.00,
        image: 'images/herbes/aneth.png'
    },
    {
        id: 'asperge',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Asparagus', fr: 'Asperge', ar: 'هليون' },
        price: 68.00,
        image: 'images/herbes/asperge.png'
    },
    {
        id: 'basilic',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Basil', fr: 'Basilic', ar: 'ريحان' },
        price: 12.00,
        image: 'images/herbes/basilic.png'
    },
    {
        id: 'bouquet_aromatique',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Aromatic Herb Bouquet', fr: 'Bouquet Aromatique', ar: 'باقة أعشاب عطرية' },
        price: 7.00,
        image: 'images/herbes/bouquet_aromatique.png'
    },
    {
        id: 'celeri',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Celery', fr: 'Celeri', ar: 'كرفس' },
        price: 3.00,
        image: 'images/herbes/celeri.png'
    },
    {
        id: 'ciboulette',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Chives', fr: 'Ciboulette', ar: 'ثوم معمر' },
        price: 12.00,
        image: 'images/herbes/ciboulette.png'
    },
    {
        id: 'coriandre',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Coriander', fr: 'Coriandre', ar: 'كزبرة' },
        price: 5.00,
        image: 'images/herbes/coriandre.png'
    },
    {
        id: 'epinard',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Spinach', fr: 'Epinard', ar: 'سبانخ' },
        price: 21.00,
        image: 'images/herbes/epinard.png'
    },
    {
        id: 'feuilles_betterave',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Beet Leaves', fr: 'Feuilles de Betterave', ar: 'أوراق الشمندر' },
        price: 16.00,
        image: 'images/herbes/feuilles_betterave.png'
    },
    {
        id: 'laitue',
        category: 'herbs',
        emoji: '🥬',
        names: { en: 'Lettuce', fr: 'Laitue', ar: 'خس' },
        price: 9.00,
        image: 'images/herbes/laitue.png'
    },
    {
        id: 'menthe',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Mint', fr: 'Menthe', ar: 'نعناع' },
        price: 5.00,
        image: 'images/herbes/menthe.png'
    },
    {
        id: 'micro_pousse_barquet',
        category: 'herbs',
        emoji: '🌱',
        names: { en: 'Micro Sprouts', fr: 'Micro Pousses', ar: 'براعم صغيرة' },
        price: 31.00,
        image: 'images/herbes/micro_pousse_barquet.png'
    },
    {
        id: 'persil',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Parsley', fr: 'Persil', ar: 'بقدونس' },
        price: 5.00,
        image: 'images/herbes/persil.png'
    },
    {
        id: 'romarin',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Rosemary', fr: 'Romarin', ar: 'إكليل الجبل' },
        price: 12.00,
        image: 'images/herbes/romarin.png'
    },
    {
        id: 'roquette',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Arugula', fr: 'Roquette', ar: 'جرجير' },
        price: 21.00,
        image: 'images/herbes/roquette.png'
    },
    {
        id: 'thym',
        category: 'herbs',
        emoji: '🌿',
        names: { en: 'Thyme', fr: 'Thym', ar: 'زعتر' },
        price: 12.00,
        image: 'images/herbes/thym.png'
    },

    // FRUITS
    {
        id: 'ananas_import',
        category: 'fruits',
        emoji: '🍍',
        names: { en: 'Pineapple Import', fr: 'Ananas Import', ar: 'أناناس' },
        price: 28,
        image: 'images/fruites/ananas_import.jpg',
    },
    {
        id: 'avocat_fuerte',
        category: 'fruits',
        emoji: '🥑',
        names: { en: 'Avocado Fuerte', fr: 'Avocat Fuerte', ar: 'أفوكا' },
        price: 45,
        image: 'images/fruites/avocat_fuerte.png',
    },
    {
        id: 'avocat_hass',
        category: 'fruits',
        emoji: '🥑',
        names: { en: 'Avocado Hass', fr: 'Avocat Hass', ar: 'أفوكا' },
        price: 50,
        image: 'images/fruites/avocat_hass.png',
    },
    {
        id: 'banane_import',
        category: 'fruits',
        emoji: '🍌',
        names: { en: 'Banana Import', fr: 'Banane Import', ar: 'موز' },
        price: 16,
        image: 'images/fruites/banane_import.png',
    },
    {
        id: 'banane_maroc',
        category: 'fruits',
        emoji: '🍌',
        names: { en: 'Banana Morocco', fr: 'Banane Maroc', ar: 'موز' },
        price: 14,
        image: 'images/fruites/banane_maroc.png',
    },
    {
        id: 'citron_jaune',
        category: 'fruits',
        emoji: '🍋',
        names: { en: 'Yellow Lemon', fr: 'Citron Jaune', ar: 'الحامض الأصفر' },
        price: 18,
        image: 'images/fruites/citron_jaune.png',
    },
    {
        id: 'dragon_fruit',
        category: 'fruits',
        emoji: '🐉',
        names: { en: 'Dragon Fruit', fr: 'Dragon Fruit', ar: 'فاكهة التنين' },
        price: 40,
        image: 'images/fruites/dragon_fruit.png',
    },
    {
        id: 'fraises',
        category: 'fruits',
        emoji: '🍓',
        names: { en: 'Strawberries', fr: 'Fraises', ar: 'فراولة' },
        price: 32,
        image: 'images/fruites/fraises.png',
    },
    {
        id: 'framboises',
        category: 'fruits',
        emoji: '🫐',
        names: { en: 'Raspberries', fr: 'Framboises', ar: 'فغمبواز' },
        price: 38,
        image: 'images/fruites/framboises.png',
    },
    {
        id: 'kaki',
        category: 'fruits',
        emoji: '🍂',
        names: { en: 'Persimmon', fr: 'Kaki', ar: 'كاكي' },
        price: 22,
        image: 'images/fruites/kaki.png',
    },
    {
        id: 'kiwi',
        category: 'fruits',
        emoji: '🥝',
        names: { en: 'Kiwi', fr: 'Kiwi', ar: 'كيوي' },
        price: 26,
        image: 'images/fruites/kiwi.png',
    },
    {
        id: 'mangue',
        category: 'fruits',
        emoji: '🥭',
        names: { en: 'Mango', fr: 'Mangue', ar: 'مانغا' },
        price: 35,
        image: 'images/fruites/mangue.png',
    },
    {
        id: 'orange_navel',
        category: 'fruits',
        emoji: '🍊',
        names: { en: 'Orange Navel', fr: 'Orange Navel', ar: 'نافيل' },
        price: 20,
        image: 'images/fruites/orange_navel.png',
    },
    {
        id: 'poire_classique',
        category: 'fruits',
        emoji: '🍐',
        names: { en: 'Classic Pear', fr: 'Poire Classique', ar: 'الإجاص' },
        price: 24,
        image: 'images/fruites/poire_classique.png',
    },
    {
        id: 'poire_william',
        category: 'fruits',
        emoji: '🍐',
        names: { en: 'William Pear', fr: 'Poire William', ar: 'الإجاص' },
        price: 26,
        image: 'images/fruites/poire_william.png',
    },
    {
        id: 'pomme_gala',
        category: 'fruits',
        emoji: '🍎',
        names: { en: 'Gala Apple', fr: 'Pomme Gala', ar: 'تفاح' },
        price: 22,
        image: 'images/fruites/pomme_gala.png',
    },
    {
        id: 'pomme_golden_jaune',
        category: 'fruits',
        emoji: '🍎',
        names: { en: 'Golden Yellow Apple', fr: 'Pomme Golden Jaune', ar: 'تفاح' },
        price: 23,
        image: 'images/fruites/pomme_golden_jaune.png',
    },
    {
        id: 'pomme_rouge',
        category: 'fruits',
        emoji: '🍎',
        names: { en: 'Red Apple', fr: 'Pomme Rouge', ar: 'تفاح' },
        price: 21,
        image: 'images/fruites/pomme_rouge.png',
    },
    {
        id: 'pomme_vert',
        category: 'fruits',
        emoji: '🍏',
        names: { en: 'Green Apple', fr: 'Pomme Verte', ar: 'تفاح أخضر' },
        price: 22,
        image: 'images/fruites/pomme_vert.png',
    },
];

// Current filter state
let currentFilter = 'all';

/* ============================================
   PRODUCT RENDERING FUNCTION
   ============================================ */

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';  // Clear previous products

    // Filter products based on current category
    const filteredProducts = currentFilter === 'all' 
        ? productsDatabase 
        : productsDatabase.filter(product => product.category === currentFilter);

    // Create product cards
    filteredProducts.forEach(product => {
        const quantity = appState.cart[product.id] || 0;
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;

        // Get translated product name
        const productName = product.names[currentLanguage] || product.names.en;

        productCard.innerHTML = `
            <!-- Product Image/Emoji -->
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${productName}" />` : product.emoji}
            </div>

            <!-- Product Info -->
            <div class="product-info">
                <h3 class="product-name">${productName}</h3>
                <span class="product-category">${getCategoryName(product.category)}</span>
                <p class="product-price">${product.price} DH/kg</p>

                <!-- Quantity Selector -->
                <div class="quantity-selector">
                    <button class="qty-btn qty-minus" data-product-id="${product.id}">−</button>
                    <span class="qty-display">${quantity}<span class="qty-unit">kg</span></span>
                    <button class="qty-btn qty-plus" data-product-id="${product.id}">+</button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    // Attach quantity button event listeners
    attachQuantityListeners();
}

/* ============================================
   CATEGORY TRANSLATION HELPER
   ============================================ */

function getCategoryName(category) {
    const categories = {
        vegetables: {
            en: 'Vegetables',
            fr: 'Légumes',
            ar: 'الخضراوات'
        },
        fruits: {
            en: 'Fruits',
            fr: 'Fruits',
            ar: 'الفواكه'
        },
        herbs: {
            en: 'Herbs & Salads',
            fr: 'Herbes et Salades',
            ar: 'الأعشاب والسلطات'
        }
    };

    return categories[category][currentLanguage] || categories[category].en;
}

/* ============================================
   QUANTITY SELECTOR EVENT HANDLERS
   ============================================ */

function attachQuantityListeners() {
    // Plus buttons
    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.productId;
            incrementQuantity(productId);
        });
    });

    // Minus buttons
    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.productId;
            decrementQuantity(productId);
        });
    });
}

function incrementQuantity(productId) {
    // Initialize if not in cart
    if (!appState.cart[productId]) {
        appState.cart[productId] = 0;
    }
    appState.cart[productId]++;
    renderProducts();
    updateCartSummary();
}

function decrementQuantity(productId) {
    if (appState.cart[productId] && appState.cart[productId] > 0) {
        appState.cart[productId]--;
        if (appState.cart[productId] === 0) {
            delete appState.cart[productId];  // Remove from cart if 0
        }
        renderProducts();
        updateCartSummary();
    }
}

/* ============================================
   CATEGORY TAB FILTERING
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Add category tab listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentFilter = this.dataset.category;

            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');

            // Re-render products
            renderProducts();
        });
    });

    // Initial render
    renderProducts();
});

/* ============================================
   CART SUMMARY (To be completed in Step 3)
   ============================================ */

function updateCartSummary() {
    // Calculate total kg
    let totalKg = 0;
    let totalPrice = 0;

    Object.keys(appState.cart).forEach(productId => {
        const product = productsDatabase.find(p => p.id === productId);
        const quantity = appState.cart[productId];
        totalKg += quantity;
        totalPrice += product.price * quantity;
    });

    // Store in app state for later use
    appState.totalKg = totalKg;
    appState.totalPrice = totalPrice;

    console.log(`Cart updated - Total KG: ${totalKg}, Total Price: ${totalPrice} DH`);
    
    // This will be connected to cart display in Step 3
}

/* ============================================
   LANGUAGE SYNC WITH SCRIPT.JS
   ============================================ */

// Listen for language changes from script.js
const originalTranslatePage = window.translatePage;
window.translatePage = function() {
    originalTranslatePage();
    currentLanguage = currentLanguage;  // Ensure products.js stays in sync
    renderProducts();  // Re-render products with new language
};
