# 🚀 Frontend Boilerplate

<p align="center">
  <img src="https://img.shields.io/npm/v/frontend-boilerplate?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/frontend-boilerplate?style=flat-square" alt="npm downloads" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="license" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
</p>

<p align="center">
  A modern, scalable, and production-ready CLI to scaffold frontend projects with best practices built-in.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-architectures">Architectures</a> •
  <a href="#-what-you-get">What You Get</a> •
  <a href="#-documentation">Documentation</a>
</p>

---

## 🚀 Quick Start

### Installation
```bash
# Using npx (recommended)
npx frontend-boilerplate my-awesome-app
npx create-frontend-app my-awesome-app
```

Or follow these steps:
```bash
# Using npx (recommended)
npx frontend-boilerplate my-awesome-app

# Or install globally
npm install -g frontend-boilerplate
create-frontend-app my-awesome-app

# Navigate to your project
cd my-awesome-app

# Install dependencies
npm install

# Start developing
npm run dev
```

### 🎯 With Options
```bash
# Specify template
npx frontend-boilerplate my-app --template react-ts

# Choose package manager
npx frontend-boilerplate my-app --package-manager yarn

# Skip automatic dependency installation
npx frontend-boilerplate my-app --skip-install
```

### What happens when you run it?

1. ✅ Creates a Vite + React + TypeScript project
2. ✅ Asks you to choose from 7 architecture patterns
3. ✅ Generates the complete folder structure
4. ✅ Configures GitHub Actions, Husky, Biome, and Lighthouse CI
5. ✅ Installs all dependencies
6. ✅ Ready to start coding! 🎉

---

## ✨ Features

- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 18 + TypeScript** - Modern React with full type safety
- 🏗️ **7 Architecture Patterns** - Choose the perfect structure for your project
- 🔧 **Pre-configured Tools** - GitHub Actions, Husky, Biome, Lighthouse CI
- 📦 **Ready to Deploy** - Production-ready from day one
- 🎨 **Best Practices** - Industry-standard patterns and conventions
- 🚦 **Git Hooks** - Automated linting and testing on commit
- 📊 **Performance Monitoring** - Lighthouse CI integration
- 📝 **Documentation** - Auto-generated READMEs in every folder

---

## 🚀 Quick Start

```bash
# Using npx (recommended)
npx frontend-boilerplate my-awesome-app

# Or install globally
npm install -g frontend-boilerplate
create-frontend-app my-awesome-app

# Navigate to your project
cd my-awesome-app

# Install dependencies
npm install

# Start developing
npm run dev
```

### 🎯 With Options

```bash
# Specify template
npx frontend-boilerplate my-app --template react-ts

# Choose package manager
npx frontend-boilerplate my-app --package-manager yarn

# Skip automatic dependency installation
npx frontend-boilerplate my-app --skip-install
```

---

## 🏗️ Architectures

Choose from **7 production-ready architectures** during project setup:

### 1. 🎯 Monolithic (Classic SPA)
**Best for:** Small to medium projects, MVPs, rapid prototyping

Simple and traditional structure for Single Page Applications.

```
src/
├── components/     # Reusable UI components
├── pages/          # Application pages
├── services/       # API services
├── hooks/          # Custom React hooks
└── utils/          # Utilities and helpers
```

### 2. 📚 Layered Architecture
**Best for:** Medium to large projects, clear separation of concerns

Clear separation between presentation, business logic, and data layers.

```
src/
├── presentation/   # UI components and pages
├── application/    # Business logic and use cases
├── domain/         # Domain models and entities
├── infrastructure/ # External services and APIs
└── shared/         # Shared utilities
```

### 3. 🧩 Feature-Based / Modular
**Best for:** Large projects, multiple teams, microservices

Organization by features/modules with vertical slicing.

```
src/
├── features/
│   ├── auth/       # Authentication feature
│   ├── user/       # User management
│   └── dashboard/  # Dashboard feature
└── shared/         # Shared components
```

### 4. 🎯 Clean Architecture
**Best for:** Enterprise applications, long-term maintainability

Clean architecture with inverted dependencies and SOLID principles.

```
src/
├── core/           # Business rules and entities
├── adapters/       # Interface adapters
├── infrastructure/ # External implementations
└── ui/             # User interface
```

### 5. ⚛️ Atomic Design
**Best for:** Design system projects, component libraries

Components organized by complexity level (atoms → molecules → organisms).

```
src/
├── components/
│   ├── atoms/      # Basic building blocks
│   ├── molecules/  # Simple combinations
│   ├── organisms/  # Complex components
│   └── templates/  # Page layouts
└── pages/          # Complete pages
```

### 6. 🌐 Micro-Frontends
**Best for:** Large-scale applications, independent teams

Independent applications integrated into a single shell.

```
src/
├── apps/
│   ├── shell/      # Main container
│   ├── auth/       # Auth micro-app
│   └── dashboard/  # Dashboard micro-app
└── shared/         # Shared resources
```

### 7. 🎮 MVC / MVVM
**Best for:** Traditional applications, developers familiar with MVC

Model-View-Controller / Model-View-ViewModel pattern.

```
src/
├── models/         # Data models
├── views/          # UI components
├── controllers/    # Application logic
└── viewModels/     # View data preparation
```

---

## 📦 What You Get

### Development Tools

- **🔍 Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- **🐶 Husky** - Git hooks for automated quality checks
- **📋 lint-staged** - Run linters on staged files only
- **✅ Commitlint** - Conventional commits validation
- **🏠 Lighthouse CI** - Automated performance audits

### GitHub Workflows

Pre-configured CI/CD pipeline with:
- ✅ Automated linting and formatting checks
- ✅ Build verification
- ✅ Lighthouse performance reports on PRs
- ✅ Ready for deployment

### Configuration Files

All projects include:
- ✅ `biome.json` - Linter and formatter config
- ✅ `lighthouserc.js` - Lighthouse CI config
- ✅ `CHANGELOG.md` - Track your changes
- ✅ `.github/pull_request_template.md` - PR template
- ✅ `.github/workflows/ci.yml` - CI/CD pipeline
- ✅ Git hooks for pre-commit and commit-msg

---

## 📖 Documentation

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check code with Biome
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Biome
npm run format:check     # Check formatting

# Performance
npm run lighthouse       # Run Lighthouse audit
```

### Project Structure

Every architecture includes detailed `README.md` files in key folders explaining:
- Purpose of each directory
- Best practices for that folder
- Examples and patterns to follow

### Conventional Commits

All projects enforce conventional commits:

```bash
feat: add user authentication
fix: resolve login redirect issue
docs: update API documentation
style: format code with Biome
refactor: simplify auth logic
test: add user service tests
chore: update dependencies
```

---

## 🎨 Customization

### Modify Architecture

You can easily customize the generated structure by:

1. Editing `src/architectures/structures.ts` in the boilerplate source
2. Adding your own architecture patterns
3. Extending existing architectures

### Add Your Own Templates

```typescript
// Example: Add a new architecture
export const architectures = {
  // ... existing architectures
  myCustomArchitecture: {
    name: 'My Custom Architecture',
    description: 'Custom structure for my needs',
    folders: {
      src: {
        // Your folder structure
      }
    }
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔀 Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Kroquetitaa/frontend-boilerplate.git
cd frontend-boilerplate

# Install dependencies
npm install

# Build
npm run build

# Test locally
npm link
create-frontend-app test-project
```

---

## 📊 Comparison

| Feature | CRA | Vite | Next.js | **Frontend Boilerplate** |
|---------|-----|------|---------|--------------------------|
| ⚡ Fast HMR | ❌ | ✅ | ✅ | ✅ |
| 🏗️ Architecture Patterns | ❌ | ❌ | ❌ | ✅ (7 options) |
| 🔧 Pre-configured Tools | ⚠️ | ❌ | ⚠️ | ✅ |
| 📊 Performance Monitoring | ❌ | ❌ | ❌ | ✅ |
| 🐶 Git Hooks | ❌ | ❌ | ❌ | ✅ |
| 📝 Auto Documentation | ❌ | ❌ | ❌ | ✅ |
| 🚀 Production Ready | ⚠️ | ❌ | ✅ | ✅ |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Biome-2.1-60A5FA?style=for-the-badge&logo=biome&logoColor=white" alt="Biome" />
</p>

---

## 📜 License

This project is licensed under the **MIT License**.

Copyright © 2026 [kroquetitaa](https://github.com/Kroquetitaa)

See the [LICENSE](LICENSE) file for full details.

---

## 💖 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Biome](https://biomejs.dev/) - One toolchain for your web project
- [Husky](https://typicode.github.io/husky/) - Modern native git hooks
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Automated auditing

---

## 📞 Support

- 🐛 [Report a bug](https://github.com/Kroquetitaa/frontend-boilerplate/issues)
- 💡 [Request a feature](https://github.com/Kroquetitaa/frontend-boilerplate/issues)
- 💬 [Discussions](https://github.com/Kroquetitaa/frontend-boilerplate/discussions)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Kroquetitaa">kroquetitaa</a>
</p>

<p align="center">
  <sub>If you found this helpful, consider giving it a ⭐️</sub>
</p>