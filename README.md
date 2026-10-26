# KK Engineering - Full Stack Web Application

A comprehensive full-stack web application built for a construction/engineering company in Nepal, featuring a modern admin dashboard, file management system, and client-facing website.

## 🎯 Overview

This project demonstrates a complete end-to-end solution combining:
- **Backend API** built with Django REST Framework
- **Frontend UI** built with Next.js and React
- **Admin Dashboard** with role-based access control
- **File Management** system with tracking and permissions
- **Payment & Expense** tracking module
- **Notification System** for file assignments

## 🏗️ Architecture

### Tech Stack

**Backend:**
- Django 3.2.25 with Django REST Framework
- Python 3.11
- SQLite (Development) / Production Database
- Gunicorn WSGI Server

**Frontend:**
- Next.js with TypeScript
- React Components
- Tailwind CSS / Styled Components
- SEO Optimized with Metadata

**DevOps:**
- Docker & Docker Compose
- Systemd Service Management
- cPanel Deployment
- LiteSpeed Web Server

## 📋 Key Features

### Admin Dashboard
- Custom Django Admin interface with role-based permissions
- File management with client details and document tracking
- Payment tracking with bill generation
- Expense management system
- User permission management
- File movement history and audit trails

### File Management System
- File creation and assignment workflow
- Document upload and version control
- File movement tracking between users
- Building and property details management
- Notification system for file assignments

### User Management
- Role-based access control (SUPERADMIN, ADMIN, USER)
- User profile management with photo upload
- Permission-based feature access
- Activity audit trails

### Payment & Financial Tracking
- Agreement amount tracking
- Advance payment recording
- Bill generation and PDF export
- Expense tracking and categorization
- Financial dashboard with statistics

### Notifications
- Real-time file assignment notifications
- Read/unread status tracking
- Notification archiving
- Admin action tracking

## 🚀 Deployment

The application is deployed on a production server with:
- Nginx/LiteSpeed reverse proxy
- Python virtual environment isolation
- Automated service management
- Environment-based configuration
- Static and media file serving

### Production Features
- SEO optimization (sitemap.xml, robots.txt)
- HTTPS/SSL support
- Static file caching
- Database backups
- Error logging and monitoring

## 📊 Database Design

Relational database with models for:
- File (main entity with details)
- FileDetail (client and location information)
- BuildingDetail (property specifications)
- DocumentDetail (uploaded files)
- Payment (financial transactions)
- Expense (cost tracking)
- FileMovement (workflow tracking)
- Notification (user alerts)
- User (authentication and authorization)

## 🔐 Security Features

- Django CSRF protection
- Password hashing and validation
- SQL injection prevention via ORM
- Role-based access control
- Permission-based API endpoints
- Secure password reset workflow
- User session management

## 📈 Performance Optimizations

- Database query optimization with select_related/prefetch_related
- Frontend component lazy loading
- Static asset optimization
- Caching strategies
- API response pagination

## 🛠️ Development Workflow

- Version control with Git
- Environment configuration via .env files
- Database migrations for schema changes
- Custom management commands for data operations
- Admin interface for CRUD operations

## 📚 API Endpoints

RESTful API for:
- User authentication
- File CRUD operations
- Payment management
- Expense tracking
- File movement assignments
- Notification management

## 🎓 Key Learning Areas Demonstrated

- Full-stack web application development
- Django REST Framework API design
- Next.js SSR and SSG optimization
- Database design and ORM usage
- Role-based authorization patterns
- Production deployment and DevOps
- Docker containerization
- User notification systems
- Payment processing integration

## 📝 Project Structure

