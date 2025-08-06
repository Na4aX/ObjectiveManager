# Deployment Guide for Team Objectives App

This guide explains how to deploy the Team Objectives App to GitLab Pages.

## 🚀 Quick Setup

### 1. Push to GitLab
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### 2. Enable GitLab Pages
1. Go to your GitLab project
2. Navigate to **Settings** → **Pages**
3. The pipeline will automatically run and deploy your app
4. Your app will be available at: `https://[username].gitlab.io/[project-name]`

## 📋 Prerequisites

- GitLab account
- Git repository with this code
- Node.js 18+ (handled automatically by CI/CD)

## 🔧 Configuration

### GitLab CI/CD Pipeline
The `.gitlab-ci.yml` file is pre-configured with:
- **Build Stage**: Installs dependencies and builds the static site
- **Deploy Stage**: Deploys to GitLab Pages
- **Preview Stage**: Creates preview deployments for merge requests

### Next.js Configuration
The app is configured for static export in `next.config.mjs`:
\`\`\`javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
\`\`\`

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages** in your GitLab project
2. Add your custom domain
3. Configure DNS records:
   \`\`\`
   CNAME: your-domain.com → [username].gitlab.io
   \`\`\`

## 🔄 Automatic Deployments

The pipeline automatically triggers on:
- **Push to main**: Deploys to production
- **Merge requests**: Creates preview deployments
- **Push to develop**: Builds and tests (no deployment)

## 📊 Pipeline Status

Monitor your deployments:
- Go to **CI/CD** → **Pipelines**
- Check build logs and deployment status
- Access deployed app from **Deployments** → **Environments**

## 🛠️ Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
team-objectives-app/
├── .gitlab-ci.yml          # CI/CD pipeline configuration
├── next.config.mjs         # Next.js configuration for static export
├── package.json            # Dependencies and scripts
├── app/                    # Next.js app directory
├── components/             # Reusable UI components
├── public/                 # Static assets
└── out/                    # Generated static files (after build)
\`\`\`

## 🔍 Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are listed in `package.json`
- Review build logs in GitLab CI/CD

### Pages Not Loading
- Ensure `output: 'export'` is set in `next.config.mjs`
- Check that `trailingSlash: true` is configured
- Verify images are unoptimized for static export

### 404 Errors
- Confirm all routes use static generation
- Check that no server-side features are used
- Ensure proper base path configuration if using subdirectories

## 📞 Support

For issues:
1. Check GitLab CI/CD logs
2. Review Next.js static export documentation
3. Verify GitLab Pages configuration
