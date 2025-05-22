# QSkipper Backend

A robust RESTful API backend service for a food ordering and restaurant management system, enabling seamless food ordering, restaurant management, and payment processing.

## 🍽️ Overview

QSkipper Backend provides the server-side infrastructure for a food ordering platform that connects customers with restaurants. It handles user authentication, restaurant listings, menu management, order processing, and payment integration with Razorpay.

## ✨ Features

- **User Authentication**
  - Registration and login flow with verification
  - Apple authentication integration
  - JWT-based authentication

- **Restaurant Management**
  - Restaurant registration and profiles
  - Menu creation and management
  - Order processing and tracking

- **Product Catalog**
  - Food item creation and management
  - Image upload and storage
  - Product categorization
  - Rating system

- **Order Processing**
  - Real-time order status updates
  - Scheduled orders
  - Order history tracking
  - Takeaway/delivery options

- **Payment Integration**
  - Seamless integration with Razorpay
  - Secure payment verification
  - Transaction management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **Payment Gateway**: Razorpay
- **File Handling**: express-formidable
- **Development**: Nodemon
- **Notifications**: Nodemailer

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB
- Razorpay account for payment integration

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/QSkipper-Backend.git
   cd QSkipper-Backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables
   ```
   PORT=8080
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RazorPay_Key=your_razorpay_key_id
   RazorPay_Secret_key=your_razorpay_secret
   ROOT_URL=your_production_url_for_ping_service
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. For production
   ```bash
   npm start
   ```

## 📝 API Endpoints

### Authentication
- `POST /register` - Register a new user
- `POST /verify-register` - Verify user registration
- `POST /login` - User login
- `POST /verify-login` - Verify login session
- `POST /apple-registration` - Register with Apple

### Restaurant Management
- `POST /register-restaurant` - Register a new restaurant
- `POST /resturant-register` - Restaurant account registration
- `POST /resturant-login` - Restaurant login
- `GET /get_All_Restaurant` - Get all restaurants
- `GET /get_Restaurant_photo/:pid` - Get restaurant photo

### Product Management
- `POST /create-product` - Create a new food product
- `GET /get_all_product/:pid` - Get all products of a restaurant
- `GET /get_product_photo/:pid` - Get product photo
- `PUT /update-food/:pid` - Update food item
- `GET /top-picks` - Get top-rated food items
- `PUT /rating/:pid` - Rate a product

### Order Management
- `POST /order-placed` - Place a new order
- `POST /verify-order` - Verify payment and confirm order
- `POST /schedule-order-placed` - Schedule an order for later
- `GET /order-status/:oid` - Check order status
- `GET /get-UserOrder/:pid` - Get user's orders
- `GET /get-order/:pid` - Get restaurant's orders
- `PUT /order-complete/:oid` - Mark an order as completed

## 🔒 Security

The application implements several security measures:
- Password encryption using bcrypt
- JWT for secure authentication
- Secure payment verification with Razorpay

## 🌐 Deployment

The application is configured for easy deployment to cloud platforms like Render, with built-in keep-alive functionality to prevent sleep on free-tier hosting.

```javascript
// Keep-alive functionality
setInterval(async () => {
  // Self-ping to prevent service from sleeping
}, KEEP_ALIVE_INTERVAL);
```

## 💼 License

This project is licensed under the ISC License.

---

<div align="center">
  <p><i>Crafted with ❤️ by Keshav Lohiya and Team</i></p>
  <p><i>The heart and soul behind QSkipper</i></p>
</div> 