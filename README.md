# Qoffa Smart - Fruit & Vegetable Ordering Website

## Project Overview
A one-page website for ordering fresh fruits and vegetables with multi-language support (English, French, Arabic).

## Current Step Status: ✅ STEP 2 COMPLETE

### Step 1: Home Section ✅
**Features Implemented:**
- ✅ Modern, responsive hero section with gradient background
- ✅ Language toggle (English, Français, العربية)
- ✅ RTL support for Arabic
- ✅ Display of ordering hours (18h00 - 00h00)
- ✅ Display of delivery time (next day at 12h00)
- ✅ "Commander" button with time-based logic
- ✅ Automatic warning message if ordering outside business hours
- ✅ Mobile responsive design
- ✅ Language preference saved to localStorage

### Step 2: Products Section ✅
**Features Implemented:**
- ✅ Beautiful product grid with responsive design
- ✅ 16 products total: 8 vegetables + 8 fruits
- ✅ Emoji-based product images (can be replaced with real images later)
- ✅ Category tabs: All, Vegetables, Fruits
- ✅ Product filtering by category
- ✅ Quantity selector (+/- buttons) for each product
- ✅ Integer-only quantities (1kg, 2kg, 3kg...)
- ✅ Real-time cart state management
- ✅ Multi-language product names
- ✅ Pricing in MAD (Moroccan Dirham)
- ✅ Smooth scroll to products section on "Commander" click

### File Structure
```
/qoffa-smart/
├── index.html       (Main HTML structure with home + products sections)
├── styles.css       (All styling - responsive)
├── script.js        (Language toggle + time-based logic)
├── products.js      (Product data + quantity selector logic)
├── start.sh         (Quick start development server)
└── README.md        (This file)
```

## How to View the Website

### Option 1: Direct Open
Simply open `index.html` in your browser.

### Option 2: Local Server (Recommended)
```bash
chmod +x start.sh
./start.sh
```
Then visit `http://localhost:8000`

## Products Database

**Vegetables (8):** Potatoes, Tomatoes, Carrots, Onions, Lettuce, Cucumbers, Bell Peppers, Garlic

**Fruits (8):** Apples, Bananas, Oranges, Strawberries, Grapes, Watermelon, Lemons, Mangoes

Prices range from 10 to 35 MAD per kg.

## Features Testing

### Test Language Toggle:
1. Click English/Français/العربية buttons
2. Notice Arabic changes to RTL mode
3. Language preference is saved in browser

### Test Products Section:
1. Click "Order Now" button on home section
2. Page smoothly scrolls to products
3. Click category tabs (All, Vegetables, Fruits)
4. Use +/- buttons to select quantities
5. Notice products are added to internal cart state (logged to console)

### Test Time-Based Ordering:
1. Between 18h00 and 00h00: "Order Now" button is active
2. Outside these hours: Button is disabled, warning message appears

## Next Steps (To Be Implemented)

**Step 3:** Cart/Panier System - Display selected products, validate minimum 10kg, show totals
**Step 4:** Order Form - Customer information collection
**Step 5:** Order Submission - Google Sheets integration + WhatsApp automation

---

**Waiting for your approval before proceeding to Step 3!** 👋

