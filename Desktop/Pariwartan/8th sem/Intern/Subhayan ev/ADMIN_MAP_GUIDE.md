# Admin Guide: Adding Google Maps to Charging Stations

## Quick Steps

### Step 1: Get the Map Embed Code

1. Open [Google Maps](https://www.google.com/maps) in your browser
2. Search for the charging station location (e.g., "Kathmandu, Nepal")
3. Click the "Share" button
4. Click on the "Embed a map" tab
5. (Optional) Choose map size: Small, Medium, Large, or Custom
6. Click "COPY HTML"

### Step 2: Add to Django Admin

1. Go to your admin panel: `http://localhost:8000/admin`
2. Login with your admin credentials
3. Click on "Charging Stations" in the sidebar
4. Click on the charging station you want to add a map to
5. Scroll down to the "Google Maps Integration" section
6. Paste the copied HTML code into the "Map embed code" field
7. Click "Save" at the bottom

### Step 3: Verify

1. Go to your website
2. Navigate to the charging station detail page
3. The map should now appear beside the station details

## Example Embed Code

The code you copy should look like this:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7234567890123!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
```

## Tips

- You can customize the map size in Google Maps before copying
- The map will automatically adjust to fit the page layout
- If you don't add a map, a placeholder will be shown instead
- You can update the map anytime by editing the charging station
- No API key or payment required - this uses Google's free embed feature

## Troubleshooting

**Map not showing?**
- Make sure you copied the entire `<iframe>` code
- Check that you pasted it in the "Map embed code" field
- Verify you clicked "Save" after pasting
- Try refreshing the charging station detail page

**Wrong location?**
- Go back to Google Maps and search for the correct location
- Get a new embed code
- Replace the old code in the admin panel

## Need Help?

Contact your technical administrator if you encounter any issues.
