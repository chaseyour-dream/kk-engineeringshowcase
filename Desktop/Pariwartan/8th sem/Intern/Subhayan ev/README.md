# Shubhayaan EV Official Website

A modern, full-stack website for Shubhayaan EV - an electric vehicle services company. Built with Next.js frontend and Django REST API backend.

## Features

- **Dynamic Hero Section**: Support for both video and image backgrounds (fetched from backend)
- **Transparent Navbar**: Glass-effect navbar with black shadow that becomes solid on scroll
- **About Us Section**: Company mission, vision, and story
- **Services Section**: Four main EV services with icons and images
- **Products Section**: Two categories (EV Vehicles & Charging Equipment) with filtering
- **Admin Panel**: Django admin for easy content management
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern Animations**: Smooth transitions using Framer Motion

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

### Backend
- Django 5.0
- Django REST Framework
- SQLite (can be changed to PostgreSQL)
- CORS Headers

## Installation

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create superuser:
```bash
python manage.py createsuperuser
```

6. Run development server:
```bash
python manage.py runserver
```

Backend will run on http://localhost:8000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Frontend will run on http://localhost:3000

## Admin Panel

Access the Django admin at http://localhost:8000/admin

You can manage:
- Hero Content (video/image, title, subtitle)
- About Content (description, mission, vision)
- Services (4 main services with icons)
- Products (categorized products with images)

## Project Structure

```
shubhayaan-ev/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── package.json
│   └── next.config.js
│
└── backend/
    ├── api/
    │   ├── models.py
    │   ├── views.py
    │   ├── serializers.py
    │   ├── urls.py
    │   └── admin.py
    ├── shubhayaan_ev/
    │   ├── settings.py
    │   └── urls.py
    ├── manage.py
    └── requirements.txt
```

## API Endpoints

- `GET /api/hero/` - Get active hero content
- `GET /api/about/` - Get about content
- `GET /api/services/` - List all services
- `GET /api/products/` - List all products
- `GET /api/products/?category=ev-vehicles` - Filter products by category

## Customization

### Colors
Edit `frontend/tailwind.config.js` to change the color scheme:
- primary: Green (#2E7D32)
- secondary: Blue (#1565C0)
- accent: Teal (#00897B)

### Content
All content is managed through Django admin panel. Upload images/videos and edit text directly from the admin interface.

## Production Deployment

### Backend
1. Set `DEBUG = False` in settings.py
2. Configure proper database (PostgreSQL recommended)
3. Set up static files serving
4. Use environment variables for secrets

### Frontend
1. Build the production version:
```bash
npm run build
npm start
```

2. Update API URL in `.env.local` to production backend URL

## Contact Information

- Phone: 9857026370 / 9802590241
- Email: shubhayaanmotors@gmail.com

## License

© 2024 Shubhayaan EV Official. All rights reserved.
