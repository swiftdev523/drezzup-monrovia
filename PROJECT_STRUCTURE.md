# Drezzup Stores - E-Commerce Website

A modern, fast, and fully responsive e-commerce website built with React, Vite, and Tailwind CSS.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer)
│   ├── home/            # Home page specific components
│   │   ├── HeroCarousel.jsx
│   │   ├── CategoriesSection.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── BrandsSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── InstagramSection.jsx
│   │   ├── CategoryCard.jsx
│   │   └── ProductCard.jsx
│   └── ui/              # Reusable UI components
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Section.jsx
├── config/              # Configuration files
│   └── constants.js     # Site config, nav links, hero slides
├── data/                # Mock data
│   └── products.js      # Products, categories, brands
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## ✨ Features

### Implemented Features

- ✅ **Auto-rotating Hero Carousel** - 3 slides with smooth transitions
- ✅ **Responsive Navigation** - Clean header matching original design
- ✅ **Category Grid** - 8 product categories with hover effects
- ✅ **Product Sections** - New Releases & Best Sellers
- ✅ **Brand Showcase** - Nike, Jordan, Adidas logos
- ✅ **Features Section** - Why Choose Us with icons
- ✅ **Instagram Gallery** - 6-image grid
- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- ✅ **Cart Badge** - Red notification badge on cart icon
- ✅ **Search Functionality** - Expandable search input

### Component Architecture

- **Modular Design** - Separated by feature/function
- **Reusable UI Components** - Button, Card, Section wrappers
- **Configuration-driven** - Easy to update via constants.js
- **Clean Imports** - Organized folder structure

## 🚀 Performance Optimizations

- **Code Splitting** - Components organized by route/feature
- **Optimized Images** - Unsplash CDN with proper sizing
- **Minimal Bundle** - Only essential dependencies
- **Fast Refresh** - Vite HMR for instant updates

## 🎨 Styling Approach

- **Tailwind CSS** - Utility-first styling
- **Responsive Design** - Mobile-first approach
- **Smooth Transitions** - Hover effects and animations
- **Consistent Spacing** - Using Tailwind's spacing scale

## 📦 Dependencies

```json
{
  "react": "Latest",
  "lucide-react": "Icons library",
  "tailwindcss": "Styling",
  "@tailwindcss/vite": "Vite plugin",
  "vite": "Build tool"
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### Update Site Info

Edit `src/config/constants.js`:

- Site name, tagline
- Contact information
- Navigation links
- Hero carousel slides

### Update Products

Edit `src/data/products.js`:

- Categories
- Products (new releases, best sellers)
- Brand logos

## 🎯 Key Components

### HeroCarousel

- Auto-rotates every 5 seconds
- Manual navigation with arrows
- Dot indicators
- Smooth fade transitions

### Header

- Sticky navigation
- Expandable search
- Cart with badge counter
- Responsive menu

### Reusable UI

- `<Button>` - 3 variants (primary, outline, white)
- `<Card>` - Consistent card styling
- `<Section>` - Page section wrapper

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Future Enhancements

- Add product filtering
- Implement cart functionality
- Add product detail pages
- Backend integration
- User authentication
- Payment gateway

## 📄 License

All rights reserved © 2026 Drezzup Stores
