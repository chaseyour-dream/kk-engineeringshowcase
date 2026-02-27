# Latest Updates - Contact Page, Reviews & Gallery Enhancements

## Summary of Changes

### 1. Contact Page Redesign ✅
- **New Layout**: Contact info (phone, email, location) in one column, inquiry form beside it
- **Second Row**: Review submission form + Google Maps side by side
- **Review Form Fields**:
  - Client Name
  - Vehicle Model Selected
  - Photo Upload
  - Rating (1-5 stars)
  - Review Description
- **Status**: Reviews are pending approval by default

### 2. Customer Review System ✅
- **Backend Model**: `CustomerReview` with fields:
  - client_name
  - model_selected
  - photo (image upload)
  - review_description
  - rating (1-5)
  - status (pending/approved/rejected)
- **Admin Features**:
  - View all reviews
  - Approve/Reject reviews (bulk actions)
  - Create and edit reviews manually
  - Filter by status and rating
- **Frontend Display**: "What Our Clients Say" section on homepage
  - Carousel/slider showing one review at a time
  - Auto-advance every 5 seconds
  - Manual navigation with arrows
  - Shows client photo, name, model, rating, and review text

### 3. Gallery Video Support ✅
- **Model Updates**: `GalleryImage` renamed to `GalleryMedia`
  - Added `media_type` field (image/video)
  - Added `video` field for video uploads
  - Supports both images and videos
- **Admin Panel**:
  - Select media type (Image or Video)
  - Upload appropriate file based on selection
  - Auto-clears unused field
- **Frontend Features**:
  - Gallery page displays both images and videos
  - Video preview on hover
  - Play icon overlay on video thumbnails
  - Full-screen modal for viewing
  - Video controls in modal view
- **Accordion Gallery**: Updated to support video playback

### 4. Charging Station Enhancements ✅
- **New Field**: `charging_type` dropdown
  - Fast Charging (green badge)
  - Moderate Charging (yellow badge)
  - Slow Charging (blue badge)
- **Display Locations**:
  - Charging station cards on homepage
  - Charging station detail pages
  - Color-coded badges for easy identification

### 5. Photo Upload Fix ✅
- **Issue**: User-uploaded photos in reviews weren't being fetched
- **Solution**: 
  - Added `MultiPartParser` and `FormParser` to `CustomerReviewViewSet`
  - Updated serializer to properly handle file uploads
  - Ensured media URLs are built with absolute paths

## API Endpoints

### Reviews
- `GET /api/reviews/` - Get all approved reviews
- `POST /api/reviews/` - Submit a new review (requires photo upload)

### Gallery
- `GET /api/gallery/` - Get all gallery media (images and videos)
- Supports filtering by category

### Charging Stations
- `GET /api/charging-stations/` - Get all charging stations (includes charging_type)
- `GET /api/charging-stations/{id}/` - Get specific station details

## Database Migrations

Run these commands to apply all changes:

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

## New Migrations Created
1. `0018_customerreview.py` - Customer review model
2. `0019_alter_galleryimage_options_galleryimage_media_type_and_more.py` - Gallery video support
3. `0020_chargingstation_charging_type.py` - Charging type field

## Admin Panel Access

### Managing Reviews
1. Go to Admin Panel → Customer Reviews
2. View all submitted reviews
3. Use bulk actions to approve/reject multiple reviews
4. Edit individual reviews or create new ones
5. Filter by status (pending/approved/rejected) and rating

### Managing Gallery Media
1. Go to Admin Panel → Gallery Media
2. Select media type (Image or Video)
3. Upload appropriate file
4. Set category, title, description, and order
5. Media displays on gallery page and accordion gallery

### Managing Charging Stations
1. Go to Admin Panel → Charging Stations
2. Select charging type from dropdown
3. Charging type badge appears on all station displays

## Frontend Components Updated

1. **ContactSection.tsx** - Complete redesign with review form
2. **CustomerReviews.tsx** - New component for homepage review carousel
3. **AccordionGallery.tsx** - Updated to support videos
4. **GalleryPage.tsx** - Updated to display both images and videos
5. **ChargingStationsSection.tsx** - Added charging type badges
6. **ChargingStationDetailPage.tsx** - Added charging type display
7. **HomePage (page.tsx)** - Added CustomerReviews component

## Testing Checklist

- [ ] Submit a contact inquiry
- [ ] Submit a customer review with photo
- [ ] Check review appears in admin as "pending"
- [ ] Approve review in admin
- [ ] Verify review appears on homepage
- [ ] Upload video to gallery
- [ ] Check video plays in accordion gallery
- [ ] Check video plays in full gallery page
- [ ] Set charging type for stations
- [ ] Verify charging type badges appear correctly

## Notes

- All reviews require admin approval before appearing on the website
- Videos should be in web-compatible formats (MP4, WebM)
- Photo uploads are required for customer reviews
- Charging type defaults to "moderate" if not specified
