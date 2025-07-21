# 🌟 Instructflow

**Instructflow** is a modern web application where users can discover, share, and manage AI prompts. Built with Next.js 15, it features a beautiful gradient-themed UI and seamless user authentication.

![Instructflow Banner](public/assets/images/logo.svg)

## ✨ Features

- 🔐 **Google OAuth Authentication** - Secure sign-in with NextAuth.js
- 📝 **Create & Share Prompts** - Write and publish your AI prompts
- 🔍 **Advanced Search** - Search by username, tags, or prompt content
- 👤 **Personal Profiles** - View user profiles and their prompts
- ✏️ **Edit & Delete** - Manage your own prompts
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Beautiful UI** - Cotton candy gradient theme with glassmorphism effects
- 🏷️ **Tag-based Organization** - Organize prompts with hashtags
- 📋 **Copy to Clipboard** - Easy prompt copying functionality

## 🚀 Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js with Google Provider
- **Styling:** Custom CSS with Poppins font
- **Deployment:** Vercel-ready

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/instructflow.git
   cd instructflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret

   # Google OAuth
   GOOGLE_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # MongoDB
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
instructflow/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # NextAuth configuration
│   │   ├── prompt/               # Prompt CRUD operations
│   │   └── users/                # User-related APIs
│   ├── create-prompt/            # Create prompt page
│   ├── profile/                  # Profile pages
│   ├── update-prompt/            # Edit prompt page
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── components/                   # Reusable components
│   ├── Feed.jsx                  # Main feed component
│   ├── Form.jsx                  # Prompt form component
│   ├── Nav.jsx                   # Navigation component
│   ├── Profile.jsx               # Profile component
│   ├── PromptCard.jsx            # Individual prompt card
│   └── Provider.jsx              # Session provider
├── models/                       # Mongoose models
│   ├── prompt.js                 # Prompt schema
│   └── user.js                   # User schema
├── styles/                       # Styling
│   └── globals.css               # Global styles
├── utils/                        # Utilities
│   └── database.js               # Database connection
└── public/                       # Static assets
    └── assets/                   # Images and icons
```

## 🎨 Design Features

- **Cotton Candy Dream Theme** - Soft gradient backgrounds
- **Glassmorphism UI** - Modern translucent card designs
- **Responsive Grid Layout** - Auto-fitting card layouts
- **Poppins Typography** - Clean, modern font family
- **Smooth Animations** - Hover effects and transitions

## 📱 Pages & Functionality

### 🏠 Home Page (`/`)
- Display all prompts in a responsive grid
- Search functionality with real-time filtering
- Click tags to filter prompts

### 👤 Profile Page (`/profile`)
- View your own prompts
- Edit and delete your prompts
- Personalized profile information

### 📝 Create Prompt (`/create-prompt`)
- Create new AI prompts
- Add tags for organization
- Rich text input with validation

### ✏️ Edit Prompt (`/update-prompt`)
- Modify existing prompts
- Update tags and content
- Save changes functionality

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/prompt` | Get all prompts |
| `POST` | `/api/prompt/new` | Create new prompt |
| `GET` | `/api/prompt/[id]` | Get specific prompt |
| `PATCH` | `/api/prompt/[id]` | Update prompt |
| `DELETE` | `/api/prompt/[id]` | Delete prompt |
| `GET` | `/api/users/[id]/posts` | Get user's prompts |

## 🌍 Environment Setup

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### MongoDB Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Set up database user and network access
4. Get connection string and add to `.env.local`

## 🚀 Deployment

### Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Update Google OAuth**
   - Add production URL to Google Console
   - Update `NEXTAUTH_URL` in production environment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ and lots of ☕**