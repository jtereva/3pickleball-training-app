# Pickleball Training App

A comprehensive 8-week pickleball training program built with React, Vite, and Tailwind CSS. This production-ready application helps players systematically improve their skills through structured drills, progress tracking, and personalized training sessions.

## 🏓 Features

### Core Training Program
- **8-Week Structured Program**: Progressive training divided into 4 phases
- **Phase 1 (Weeks 1-2)**: Foundation & Consistency
- **Phase 2 (Weeks 3-4)**: Power & Placement
- **Phase 3 (Weeks 5-6)**: Advanced Strategy & Match Tactics
- **Phase 4 (Weeks 7-8)**: Competition Preparation

### Key Functionality
- ✅ **Progress Tracking**: Mark drills as complete with persistent storage
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔐 **User Authentication**: Simple sign-in with personalized experience
- 💾 **Local Storage**: Progress persists between sessions
- 🏃‍♂️ **Warmup/Cooldown Routines**: Dedicated preparation and recovery guides
- 📊 **Session Progress**: Visual progress bars and completion tracking

### Technical Features
- ⚡ **Vite Build System**: Fast development and optimized production builds
- 🎨 **Tailwind CSS**: Modern, responsive styling
- 🏗️ **Modular Architecture**: Well-organized components and utilities
- 🚀 **GitHub Pages Deployment**: Automated CI/CD pipeline
- 📦 **Production Ready**: Optimized for performance and scalability

## 🛠️ Tech Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jtereva/3pickleball-training-app.git
cd 3pickleball-training-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (requires setup)

## 📱 Usage

### Getting Started
1. **Sign In**: Click the sign-in button to create a simple profile
2. **Select Week**: Choose your current training week (1-8)
3. **Choose Session**: Select from available training sessions
4. **Track Progress**: Mark drills as complete as you finish them

### Training Structure
Each week contains multiple training sessions with specific drills:
- **Drill Details**: Each drill includes setup instructions, focus points, and duration
- **Progress Tracking**: Visual progress bars show session completion
- **Phase Focus**: Clear indication of what each training phase emphasizes

### Warmup & Cooldown
Access dedicated warmup and cooldown routines:
- **Dynamic Warmup**: 10-minute preparation routine
- **Cool-down**: 5-minute recovery routine with stretching and reflection

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AuthComponent.jsx
│   ├── DrillCard.jsx
│   ├── ProgressTracker.jsx
│   ├── RoutineCard.jsx
│   └── WeekSelector.jsx
├── data/               # Training program data
│   └── trainingProgram.js
├── utils/              # Utility functions
│   └── localStorage.js
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## 🚀 Deployment

### GitHub Pages (Automatic)
The app automatically deploys to GitHub Pages when changes are pushed to the main branch using GitHub Actions.

### Manual Deployment
```bash
npm run build
npm run deploy
```

### Other Platforms
The built files in the `dist/` folder can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Any static hosting service**

## 🔧 Configuration

### Environment Variables
The app uses localStorage for data persistence and doesn't require external APIs by default.

### Customization
- **Training Data**: Modify `src/data/trainingProgram.js` to customize drills
- **Styling**: Update Tailwind classes or `src/index.css`
- **Components**: Extend functionality by modifying components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🏓 About Pickleball Training

This application was designed to provide structured, progressive training for pickleball players of all levels. The 8-week program is based on established training methodologies and focuses on:

- **Fundamentals**: Building solid technique foundations
- **Consistency**: Developing reliable shot execution
- **Strategy**: Learning advanced tactics and game situations
- **Competition**: Preparing for tournament play

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/jtereva/3pickleball-training-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible about the issue

---

**Happy Training! 🏓**
