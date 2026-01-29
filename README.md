# 👨‍💻 Akash Pathak - Portfolio

A modern, responsive portfolio website showcasing my projects and skills as a Full Stack Developer.

![Portfolio Preview](./public/me.jpg)

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode** - Seamless light/dark theme toggle with localStorage persistence
- **Modern UI** - Glassmorphism effects, smooth animations, and clean aesthetics
- **Performance Optimized** - Built with Vite for lightning-fast development and builds
- **Accessible** - Semantic HTML and ARIA-compliant components

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling (using Rolldown)
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components & Libraries
- **Radix UI** - Accessible component primitives (Dropdown Menu, Switch)
- **Tabler Icons** - Beautiful icon set
- **Lucide React** - Icon library
- **Framer Motion** - Smooth animations
- **ShadCN** - Component architecture pattern

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **tw-animate-css** - Animation utilities

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/PATHAKAAKASH19/portfolio1.git

# Navigate to project directory
cd portfolio1

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio1/
├── public/              # Static assets
│   ├── bg.jpeg         # Light mode background
│   ├── bgBlack.jpeg    # Dark mode background
│   ├── me.jpg          # Profile picture
│   └── project*.png    # Project screenshots
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   │   ├── NavBar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── switch.tsx
│   │   ├── About.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # App entry point
│   └── index.css      # Global styles & Tailwind config
├── index.html         # HTML template
└── package.json       # Dependencies & scripts
```

## 🎨 Features Breakdown

### Home Section
- Eye-catching hero with custom fonts (Caveat Brush)
- Call-to-action buttons
- Smooth animations

### Projects Section
- Showcases key projects with images
- Links to live demos and GitHub repositories
- Glassmorphism card design with hover effects

### About Section
- Personal introduction
- Tech stack visualization
- Education timeline
- Social media links (GitHub, LinkedIn, Twitter/X, Email)

### Theme Toggle
- Persistent dark/light mode preference
- Smooth transitions
- System preference detection

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📧 Contact

- **Email**: pathakAakash8900@gmail.com
- **LinkedIn**: [Akash Pathak](https://www.linkedin.com/in/akash-pathak-48026a221/)
- **GitHub**: [@PATHAKAAKASH19](https://github.com/PATHAKAAKASH19)
- **Twitter/X**: [@PathakAkash_10](https://x.com/PathakAakash_10)
- **Website**: [akash-pathak.xyz](https://akash-pathak.xyz)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Tabler Icons](https://tabler-icons.io/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Akash Pathak**
