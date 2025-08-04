# Portfolio Website - Prashuk Jain

## Overview

This is a modern, responsive portfolio website built for Prashuk Jain, a student developer. The application showcases a personal portfolio with sections for about, skills, projects, achievements, and contact information. It's built using a full-stack TypeScript architecture with React frontend and Express backend, though currently implemented as a primarily frontend-focused application with backend infrastructure ready for future expansion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript (minimal implementation, ready for expansion)
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Extensive use of shadcn/ui components for consistent design
- **Animations**: Framer Motion for smooth animations and transitions
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Typography**: Custom font integration (Inter, Poppins, Fira Code)
- **Layout**: Responsive design with mobile-first approach

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API design with `/api` prefix routing
- **Middleware**: Request logging, JSON parsing, error handling
- **Development**: Hot reload with Vite integration
- **Storage**: Memory-based storage implementation with database interface ready

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Configured migration system in `/migrations` directory
- **Validation**: Zod schema validation for type safety

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests with proper error handling
3. **Storage Layer**: Abstract storage interface allows switching between memory and database storage
4. **Response Handling**: Consistent JSON responses with proper HTTP status codes
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript support
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Animation**: Framer Motion for complex animations
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod validation

### Backend Dependencies
- **Runtime**: Node.js with ES modules
- **Database**: Neon Database (PostgreSQL) with connection pooling
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: PostgreSQL session store configured
- **Development**: tsx for TypeScript execution

### Build Tools
- **Bundler**: Vite for fast development and production builds
- **TypeScript**: Strict type checking across the entire codebase
- **PostCSS**: Tailwind CSS processing with autoprefixer
- **ESBuild**: Server-side bundling for production

## Deployment Strategy

### Development Setup
- **Concurrent Development**: Vite dev server with Express API integration
- **Hot Reload**: Both client and server support hot module replacement
- **Environment Variables**: Database URL and other config via environment variables
- **Type Safety**: Shared types between client and server in `/shared` directory

### Production Build
- **Client Build**: Vite builds optimized React application to `/dist/public`
- **Server Build**: ESBuild bundles Express server to `/dist/index.js`
- **Static Assets**: Client assets served from Express in production
- **Database**: PostgreSQL database with connection pooling for scalability

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimized with lazy loading and efficient bundle splitting
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support
- **Type Safety**: End-to-end TypeScript with strict mode enabled

The architecture is designed to be scalable and maintainable, with clear separation of concerns and ready for future feature additions like user authentication, content management, or API integrations.