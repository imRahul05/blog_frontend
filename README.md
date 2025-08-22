# Bloggy - React Blog Application

A modern, responsive blog application built with React.js, featuring user authentication, article management, commenting system, and interactive features like upvoting.

🌐 **Live Demo:** [https://bloogyy.vercel.app/](https://bloogyy.vercel.app/)

## Features

- **User Authentication**: Secure login and registration using Firebase Auth
- **Article Management**: Browse and read articles with rich content
- **Interactive Engagement**: 
  - Upvote system for articles
  - Comment system with user authentication
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Dynamic content updates for votes and comments
- **Navigation**: Smooth single-page application navigation with React Router
- **Modern UI**: Clean, professional design with glassmorphism effects

## Technology Stack

### Frontend
- **React.js** (v18.3.1) - Modern JavaScript library for building user interfaces
- **React Router DOM** (v6.23.1) - Declarative routing for React applications
- **Tailwind CSS** (v3.4.3) - Utility-first CSS framework for rapid UI development

### Backend Integration
- **Firebase Authentication** (v10.12.2) - Secure user authentication and authorization
- **Axios** (v1.7.2) - Promise-based HTTP client for API requests
- **MongoDB** - Database for storing articles, comments, and user data (backend)

### Development Tools
- **Create React App** - Development environment and build tools
- **ESLint** - Code linting and formatting
- **Web Vitals** - Performance monitoring

## Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- A Firebase project with Authentication enabled
- Access to the backend API server

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/imRahul05/blog_frontend.git
   cd blog_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory and add your configuration:
   ```env
   REACT_APP_BACKEND_URL=your_backend_api_url
   ```

4. **Firebase Configuration**
   
   The Firebase configuration is located in `src/index.js`. Update the `firebaseConfig` object with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`

## Usage

### For Users
1. **Browse Articles**: Visit the Articles page to see all available blog posts
2. **Read Articles**: Click on any article to read the full content
3. **User Registration**: Create an account to access interactive features
4. **Login**: Sign in to upvote articles and leave comments
5. **Engage**: Upvote articles you like and participate in discussions through comments

### For Developers
- **Development**: Use `npm start` for development with hot reloading
- **Building**: Use `npm run build` to create a production build
- **Testing**: Use `npm test` to run the test suite

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddCommentForm.js    # Comment submission form
│   ├── ArticlesList.js      # Articles listing component
│   └── commnetList.js       # Comments display component
├── pages/              # Page components
│   ├── Authentication/      # Auth-related pages
│   │   ├── CreateAccountPage.js
│   │   └── LoginPage.js
│   ├── AboutPage.js         # About page
│   ├── ArticlePage.js       # Individual article view
│   ├── ArticleListPage.js   # Articles listing page
│   ├── HomePage.js          # Landing page
│   ├── NotFoundPage.js      # 404 error page
│   └── article-content.js   # Static article content
├── hooks/              # Custom React hooks
│   └── useUser.js          # User authentication hook
├── config/             # Configuration files
│   └── conf.js             # API configuration
├── assets/             # Static assets (images, etc.)
├── App.js              # Main application component
├── NavBar.js           # Navigation component
└── index.js            # Application entry point
```

## API Integration

The application connects to a backend API for:
- **Articles**: CRUD operations for blog posts
- **Comments**: Adding and retrieving article comments  
- **Upvotes**: Managing article upvote functionality
- **User Management**: Handling user-specific data

### Key API Endpoints
- `GET /api/articles` - Fetch all articles
- `GET /api/articles/:id` - Fetch specific article
- `PUT /api/articles/:id/upvote` - Upvote an article
- `POST /api/articles/:id/comments` - Add a comment

## Deployment

### Vercel (Current)
The application is deployed on Vercel with automatic deployments from the main branch.

#### Deploy Your Own
1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project and configure environment variables
4. Deploy with automatic builds on push

### Other Platforms
The app can also be deployed on:
- **Netlify**: Static site hosting with continuous deployment
- **Heroku**: Full-stack application hosting
- **Firebase Hosting**: Google's web hosting solution

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_BACKEND_URL` | Backend API base URL | Yes |

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling consistency
- Maintain component modularity and reusability
- Write meaningful commit messages
- Test your changes thoroughly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Rahul** - [@imRahul05](https://github.com/imRahul05)

---

### Additional Notes

- This is the frontend portion of a full-stack blog application
- The backend API handles data persistence and business logic
- Firebase is used specifically for user authentication
- The application follows modern React patterns with functional components and hooks

For issues, feature requests, or questions, please open an issue on GitHub.
