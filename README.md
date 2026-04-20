# ITDInvestech Company Website

A modern, responsive company website built with React, TypeScript, Vite, and Shadcn UI.

## Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with TypeScript for type safety
- 🎨 Shadcn UI components with Tailwind CSS
- 📱 Fully responsive design
- 🎯 Modern and clean UI/UX
- 🔧 Multiple build modes (development, staging, production)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Build for specific environments:

```bash
npm run build:dev       # Development build
npm run build:staging   # Staging build
npm run build:production # Production build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Services.tsx    # Services section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies

```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Re-usable component library
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icon library

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme.

### Content

- Update company information in the components
- Modify services in `src/components/Services.tsx`
- Change stats in `src/components/Hero.tsx`
- Update contact details in `src/components/Contact.tsx`

## License

This project is licensed under the MIT License.

