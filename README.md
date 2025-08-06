# Team Objectives App

A modern, responsive team objectives management application built with Next.js and deployed on GitLab Pages.

[![Pipeline Status](https://gitlab.com/your-username/team-objectives-app/badges/main/pipeline.svg)](https://gitlab.com/your-username/team-objectives-app/-/commits/main)
[![Deployed on GitLab Pages](https://img.shields.io/badge/Deployed%20on-GitLab%20Pages-orange?style=flat-square&logo=gitlab)](https://your-username.gitlab.io/team-objectives-app)

## ✨ Features

- **📋 Objective Management**: Create, edit, and delete team objectives
- **📊 Progress Tracking**: Visual progress bars with interactive sliders
- **👥 Team Assignment**: Assign objectives to team members
- **🎯 Priority Levels**: Categorize objectives by Low, Medium, High priority
- **📈 Status Tracking**: Monitor objectives through Not Started, In Progress, Completed states
- **📅 Due Date Management**: Set and track objective deadlines
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **💾 Local Storage**: Data persists between browser sessions
- **🎨 Modern UI**: Clean interface built with shadcn/ui components

## 🚀 Quick Start

### Deploy to GitLab Pages

1. **Fork or clone this repository**
   \`\`\`bash
   git clone https://gitlab.com/your-username/team-objectives-app.git
   cd team-objectives-app
   \`\`\`

2. **Push to your GitLab repository**
   \`\`\`bash
   git remote set-url origin https://gitlab.com/YOUR-USERNAME/YOUR-PROJECT-NAME.git
   git push origin main
   \`\`\`

3. **Enable GitLab Pages**
   - Go to your GitLab project
   - Navigate to **Settings** → **Pages**
   - The CI/CD pipeline will automatically build and deploy your app
   - Access your app at: `https://YOUR-USERNAME.gitlab.io/YOUR-PROJECT-NAME`

### Local Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: GitLab Pages (Static Export)
- **CI/CD**: GitLab CI/CD Pipeline

## 📁 Project Structure

\`\`\`
team-objectives-app/
├── .gitlab-ci.yml          # GitLab CI/CD pipeline
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main application
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## 🔧 Configuration

### GitLab Pages Setup
The project is pre-configured for GitLab Pages deployment:
- Static export enabled in `next.config.mjs`
- GitLab CI/CD pipeline in `.gitlab-ci.yml`
- Optimized build process for static hosting

### Environment Variables
No environment variables required - the app uses local storage for data persistence.

## 📊 Sample Data

The app comes with 10 pre-loaded sample objectives showcasing:
- Different priority levels and statuses
- Various team member assignments
- Realistic software development tasks
- Progress tracking examples

## 🔄 CI/CD Pipeline

The GitLab CI/CD pipeline includes:
- **Build Stage**: Install dependencies and build static files
- **Deploy Stage**: Deploy to GitLab Pages on main branch
- **Preview Stage**: Create preview deployments for merge requests

## 🎯 Usage

1. **View Objectives**: Browse existing objectives in the card grid
2. **Add New Objective**: Click "Add Objective" to create new objectives
3. **Edit Objectives**: Use the dropdown menu on each card to edit
4. **Track Progress**: Adjust progress using the slider on each objective
5. **Monitor Stats**: View summary statistics in the dashboard cards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Merge Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [DEPLOYMENT.md](DEPLOYMENT.md) guide
- **Issues**: Report bugs or request features via GitLab Issues
- **Pipeline Status**: Monitor deployments in GitLab CI/CD

---

**Live Demo**: [https://your-username.gitlab.io/team-objectives-app](https://your-username.gitlab.io/team-objectives-app)
\`\`\`

```text file=".gitignore"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Next.js
.next/
out/
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Temporary folders
tmp/
temp/

# GitLab CI cache
.gitlab-ci-cache/
