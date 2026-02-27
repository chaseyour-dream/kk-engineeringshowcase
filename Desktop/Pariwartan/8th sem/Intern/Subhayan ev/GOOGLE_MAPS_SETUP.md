# Google Maps Integration Guide

## Overview
Google Maps has been integrated into:
1. Charging Station Detail Pages - Shows location map beside station details (from backend)
2. Contact Page - Shows office location beside enquiry form (static)

## Features

### Charging Station Maps (Backend Managed)
- Each charging station can have its own custom Google Maps embed code
- Admins can paste the embed code directly in the Django admin panel
- No API key required - uses Google Maps free embed feature
- If no map is provided, shows a placeholder with contact information

### Contact Page Map (Static)
- Shows main office location
- Can be customized in the frontend code

## Setup Instructions

### 1. Add Maps to Charging Stations (Admin Panel)

1. Log in to Django admin panel at `http://localhost:8000/admin`
2. Go to "Charging Stations"
3. Click on a charging station to edit
4. Scroll to "Google Maps Integration" section
5. Get the embed code:
   - Go to [Google Maps](https://www.google.com/maps)
   - Search for the charging station location
   - Click "Share" button
   - Click "Embed a map" tab
   - Copy the entire `<iframe>` code
6. Paste the iframe code in the "Map embed code" field
7. Click "Save"

**Example embed code:**
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
```

### 2. Update Contact Page Map (Optional)

File: `frontend/components/ContactSection.tsx`

To customize the contact page map:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in ContactSection.tsx (around line 150)

### 3. Customize Contact Page Location Details

Update the location information in `frontend/components/ContactSection.tsx`:

```typescript
<div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
  <FaMapMarkerAlt className="text-red-600 text-xl mt-1 flex-shrink-0" />
  <div>
    <p className="font-semibold text-gray-900">Main Office</p>
    <p className="text-gray-600">Your actual address here</p>
  </div>
</div>
```

## Database Changes

A new migration has been created and applied:
- Migration: `0017_chargingstation_map_embed_code.py`
- Field: `map_embed_code` (TextField, optional)

## Features Implemented

### Charging Station Detail Page
- Two-column layout (desktop) with station details on left, map on right
- Responsive design (stacks on mobile)
- Dynamic map loaded from backend database
- Fallback placeholder if no map is configured
- Red "Send Inquiry" button at bottom of station details card
- Location address displayed below map

### Contact Page
- Two-column layout with enquiry form on left, map on right
- Static map showing main office location
- Contact information cards below map
- Responsive design

## Admin Panel Features

The Charging Station admin now has organized fieldsets:
1. Basic Information - Name, location, description, image
2. Contact Details - Contact person and phone
3. Google Maps Integration - Embed code with instructions

## Testing

1. Add a map embed code to a charging station in admin
2. Navigate to that charging station's detail page
3. Verify the map loads correctly
4. Test the "Send Inquiry" button
5. Visit the contact page
6. Verify the map and form display side by side

## Benefits

- No API key required (uses free Google Maps embed)
- Each charging station can have a unique map
- Easy for admins to manage through Django admin
- Graceful fallback if map is not configured
- Fully responsive on all devices
- Lazy loading for better performance

## Notes

- The charging station maps are managed from the backend
- The contact page map is static and hardcoded in the frontend
- All maps use Google's free embed feature (no API limits)
- Maps are responsive and work on mobile devices
- Embed codes are stored as HTML in the database and rendered safely
