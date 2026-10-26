# Quick Setup Guide

## Step 1: Backend Setup (5 minutes)

Open a terminal and run:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

When prompted, create admin credentials:
- Username: admin
- Email: admin@shubhayaan.com
- Password: (your choice)

Start the backend:
```bash
python manage.py runserver
```

## Step 2: Add Content via Admin Panel

1. Open http://localhost:8000/admin
2. Login with your superuser credentials

### Add Hero Content:
- Click "Hero Contents" → "Add Hero Content"
- Title: "POWERING THE ELECTRIC FUTURE"
- Subtitle: "Leading EV Solutions Provider"
- Media Type: Choose Image or Video
- Upload your media file
- Check "Is active"
- Save

### Add Services (Add 4 services):

1. EV Charging Stations
   - Icon: charging
   - Description: Fast and reliable charging infrastructure
   - Upload service image
   - Order: 1

2. EV Showrooms
   - Icon: showroom
   - Description: Experience our electric vehicles
   - Upload service image
   - Order: 2

3. EV Service Centers
   - Icon: service
   - Description: Expert maintenance and repairs
   - Upload service image
   - Order: 3

4. EV Fleet Solutions
   - Icon: fleet
   - Description: Complete fleet management
   - Upload service image
   - Order: 4

### Add About Content:
- Title: "Leading the EV Revolution"
- Description: Your company description
- Mission: Your mission statement
- Vision: Your vision statement
- Upload about image

### Add Products:
Add products in two categories:
- Category: ev-vehicles (cars, bikes, etc.)
- Category: charging-equipment (chargers, cables, etc.)

## Step 3: Frontend Setup (3 minutes)

Open a NEW terminal (keep backend running):

```bash
cd frontend
npm install
npm run dev
```

## Step 4: View Your Website

Open http://localhost:3000 in your browser!

## Troubleshooting

**Backend won't start?**
- Make sure Python is installed
- Check if port 8000 is available

**Frontend won't start?**
- Make sure Node.js is installed
- Delete node_modules and run `npm install` again

**Images not showing?**
- Make sure backend is running
- Check that images are uploaded via admin panel
- Verify CORS is enabled in Django settings

## Next Steps

1. Upload your company logo
2. Add real product images
3. Customize colors in tailwind.config.js
4. Add more products and services
5. Test on mobile devices

Enjoy your new website! 🚗⚡
