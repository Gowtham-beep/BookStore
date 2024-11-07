Here's an updated README for your project:

---

# Book Store Web App

A simple, full-stack web application for managing a bookstore, allowing users to add, view, and order books. This project uses React for the frontend and Firebase for backend services, including authentication, Firestore for database management, and Firebase Storage for image storage. 

**Live Demo**: [Book Store Web App](https://book-store-iota-ten.vercel.app/)

## Features

- **User Authentication**: Sign up and log in using email/password or Google.
- **Add Books**: Admins can add new books with details like title, genre, price, and cover image.
- **Book Listings**: Display books in a responsive layout with details and a cover image.
- **Order Books**: Users can place orders by specifying the quantity, with a summary displayed afterward.
- **Responsive Design**: Optimized for mobile and desktop viewing.

## Tech Stack

- **Frontend**: React, Bootstrap, CSS for UI styling
- **Backend**: Firebase (Firestore, Authentication, Firebase Storage)
- **Deployment**: Vercel

## Installation

To run locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/book-store-app.git
    cd book-store-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure Firebase**:
   - Add your Firebase config variables in an `.env` file in the root directory, following `.env.example`.

4. **Build and run locally**:
    ```bash
    npm run build
    npm run start
    ```

5. **Visit**: Open [http://localhost:3000](http://localhost:5173) to view the app locally.

## Deployment on Vercel

1. **Deploy**: The project is already configured for Vercel. To deploy, connect your repository to Vercel and deploy using Vercel’s Git integration.
2. **Set Firebase Environment Variables** in Vercel under Project Settings -> Environment Variables.

## Firebase CORS Configuration

If you experience CORS issues, configure Firebase Storage to allow access from `https://book-store-iota-ten.vercel.app/`.

## License

MIT License. 

--- 

Let me know if you’d like to add any other details!
