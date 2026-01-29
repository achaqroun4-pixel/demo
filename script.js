/* ============================================
   LANGUAGE TRANSLATION SYSTEM
   ============================================ */

const translations = {
    en: {
        'Fresh Fruits & Vegetables': 'Fresh Fruits & Vegetables',
        'Fruits and vegetables fresh and good quality': 'Order fresh, quality fruits and vegetables directly to your home. Quick delivery, best prices.',
        'Ordering Hours': 'Ordering Hours',
        'Delivery Time': 'Delivery Time',
        'Next day at 12h00': 'Next day at 12h00',
        'Order Now': 'Order Now',
        'Orders are open from 18h00 to 00h00. Please try again during ordering hours.': 'Orders are open from 18h00 to 00h00. Please try again during ordering hours.'
    },
    fr: {
        'Fresh Fruits & Vegetables': 'Fruits et Légumes Frais',
        'Fruits and vegetables fresh and good quality': 'Commandez des fruits et légumes frais et de qualité directement chez vous. Livraison rapide, meilleurs prix.',
        'Ordering Hours': 'Heures de Commande',
        'Delivery Time': 'Temps de Livraison',
        'Next day at 12h00': 'Lendemain à 12h00',
        'Order Now': 'Commander',
        'Orders are open from 18h00 to 00h00. Please try again during ordering hours.': 'Les commandes sont ouvertes de 18h00 à 00h00. Veuillez réessayer pendant les heures de commande.'
    },
    ar: {
        'Fresh Fruits & Vegetables': 'الفواكه والخضروات الطازجة',
        'Fruits and vegetables fresh and good quality': 'اطلب الفواكه والخضروات الطازجة والعالية الجودة مباشرة إلى منزلك. توصيل سريع وأفضل الأسعار.',
        'Ordering Hours': 'ساعات الطلب',
        'Delivery Time': 'وقت التسليم',
        'Next day at 12h00': 'اليوم التالي الساعة 12:00',
        'Order Now': 'اطلب الآن',
        'Orders are open from 18h00 to 00h00. Please try again during ordering hours.': 'الطلبات متاحة من 18:00 إلى 00:00. يرجى المحاولة مرة أخرى خلال ساعات الطلب.'
    }
};

// Current language state
let currentLanguage = 'en';

/* ============================================
   LANGUAGE TOGGLE FUNCTIONALITY
   ============================================ */

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        currentLanguage = this.dataset.lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update page direction for Arabic
        if (currentLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
            document.body.dir = 'ltr';
        }
        
        // Translate page content
        translatePage();
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', currentLanguage);
    });
});

// Function to translate all elements with data-* attributes
function translatePage() {
    document.querySelectorAll('[data-en][data-fr][data-ar]').forEach(element => {
        if (element.hasAttribute('data-' + currentLanguage)) {
            element.textContent = element.getAttribute('data-' + currentLanguage);
        }
    });
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // Set active button
    document.querySelector(`[data-lang="${savedLanguage}"]`)?.classList.add('active');
    
    // Set page direction
    if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.dir = 'rtl';
    }
    
    // Translate page
    translatePage();
    
    // Setup time-based ordering
    setupTimeBasedOrdering();
});

/* ============================================
   TIME-BASED ORDERING LOGIC
   ============================================ */

function setupTimeBasedOrdering() {
    const commanderBtn = document.getElementById('commanderBtn');
    const timeWarning = document.getElementById('timeWarning');
    
    // Function to check if current time is within ordering hours (18h00 - 00h00)
    function isOrderingTimeValid() {
        const now = new Date();
        const hours = now.getHours();
        
        // Orders open from 18h00 (18) to 00h00 (0)
        // Valid if hours >= 18 OR hours === 0 (midnight)
        return hours >= 18 || hours === 0;
    }
    
    // Function to update button and warning state
    function updateOrderingStatus() {
        const isValid = isOrderingTimeValid();
        
        if (isValid) {
            commanderBtn.disabled = false;
            timeWarning.style.display = 'none';
        } else {
            commanderBtn.disabled = true;
            timeWarning.style.display = 'block';
        }
    }
    
    // Initial check
    updateOrderingStatus();
    
    // Check every minute if time validity changes
    setInterval(updateOrderingStatus, 60000);
    
    // Add click handler for Commander button
    commanderBtn.addEventListener('click', function(e) {
        if (isOrderingTimeValid()) {
            // Scroll to products section
            const productsSection = document.getElementById('products');
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ============================================
   GLOBAL STATE FOR CART & PRODUCTS
   ============================================ */

const appState = {
    currentLanguage: 'en',
    cart: {},  // Will store product quantities: {productId: quantity}
    products: [] // Will be populated in Step 2
};
