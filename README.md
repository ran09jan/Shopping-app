# FashionShop - React Shopping Application

A modern, responsive shopping application built with React for men's, women's, and children's apparel.

## Features

- 🛍️ **Multi-Category Shopping** - Browse products for men, women, and children
- 🔍 **Search Functionality** - Find products by name, description, or category
- 🛒 **Shopping Cart** - Add, remove, and manage items in your cart
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 📦 **Product Details** - Detailed product pages with size, color, and quantity selection
- 🔄 **Sort & Filter** - Sort products by name and price
- 💡 **Related Products** - Discover similar items on product pages

## Technology Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **CSS3** - Modern styling with flexbox and grid
- **Responsive Design** - Mobile-first approach

## Project Structure

```
Shopping app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Home.js & Home.css
│   │   ├── CategoryPage.js & CategoryPage.css
│   │   ├── ProductCard.js & ProductCard.css
│   │   ├── ProductDetail.js & ProductDetail.css
│   │   └── Cart.js & Cart.css
│   ├── data/
│   │   └── products.js
│   ├── App.js & App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes create-react-app build dependency

## Features Overview

### Home Page
- Hero section with call-to-action
- Category showcase with beautiful images
- Featured products grid
- Search functionality integration

### Category Pages
- Filtered products by category (men, women, children)
- Sorting options (name, price low-to-high, price high-to-low)
- Product count display
- Responsive grid layout

### Product Details
- Large product images
- Comprehensive product information
- Size and color selection
- Quantity controls
- Related products suggestions
- Breadcrumb navigation

### Shopping Cart
- Cart item management
- Quantity adjustment
- Item removal
- Order summary with GST calculation (18%)
- Responsive layout for mobile devices

### Search
- Global search functionality
- Search by product name, description, or category
- Search results displayed on home page
- No results handling

## Product Catalog

The application includes products across three categories with prices:

### Men's Apparel 

### Women's Apparel 

### Children's Apparel

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+) - Full grid layout with sidebar
- **Tablet** (768px - 1199px) - Adjusted grid columns
- **Mobile** (< 768px) - Single column layout with optimized navigation

## State Management

The application uses React hooks for state management:
- `useState` for local component state
- `useEffect` for side effects and data fetching
- Props drilling for sharing state between components

## Styling Approach

- **CSS Grid & Flexbox** for layout
- **CSS Custom Properties** for consistent theming
- **Mobile-first** responsive design
- **Smooth animations** and hover effects
- **Modern design patterns** with cards and shadows

## Currency & Pricing

- **Currency**: Indian Rupees (₹)
- **Tax**: 18% GST (Goods and Services Tax)
- **Shipping**: Free on all orders

## Future Enhancements

Potential improvements for the application:
- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Payment integration
- Inventory management
- Advanced filtering (size, color, price range)
- Product image gallery
- Related products algorithm
- Order history
- Email notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.

---

**Note:** This is a demo application with sample data. Product images are sourced from Unsplash for demonstration purposes. 
