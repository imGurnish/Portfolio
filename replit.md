# Portfolio Website Application

## Overview

This is a modern personal portfolio website built as a full-stack application showcasing professional experience, projects, and skills. The application features a sleek, animated frontend with a React-based single-page application and an Express.js backend infrastructure. The portfolio highlights cybersecurity expertise, fintech experience, and full-stack development capabilities with sections for about, skills, projects, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Built with React 18 using functional components and hooks
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible interface
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth animations and transitions throughout the portfolio
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Node.js Runtime**: ES modules configuration with TypeScript support
- **Express.js Framework**: RESTful API server with middleware for logging and error handling
- **Development Server**: Vite integration for seamless development experience with HMR
- **Storage Interface**: Abstract storage layer with in-memory implementation for user data
- **Error Handling**: Centralized error handling middleware with structured JSON responses

### Design System
- **Component Library**: Comprehensive UI component system using Radix UI primitives
- **Theming**: CSS custom properties for dark theme with neutral color palette
- **Typography**: Inter font family with multiple font weights
- **Layout**: Responsive design with mobile-first approach and glass morphism effects

### Data Storage
- **Database Setup**: Drizzle ORM configured for PostgreSQL with schema definitions
- **User Schema**: Basic user table with UUID primary keys and unique usernames
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Development Storage**: In-memory storage implementation for development phase

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database adapter
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: CLI tool for database migrations and schema management

### UI and Animation Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **framer-motion**: Animation library for smooth UI transitions
- **@tanstack/react-query**: Server state management and caching
- **embla-carousel-react**: Carousel component for project showcases

### Styling and Theming
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional CSS class utility
- **cmdk**: Command menu component for navigation

### Development Tools
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### Form and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation (via drizzle-zod)

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **date-fns**: Modern JavaScript date utility library