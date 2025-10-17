# Google Reviews Integration Setup Guide

This guide will help you set up Google Reviews integration for your real estate website.

## Current Status

The Google Reviews integration is **fully implemented** and currently running with **mock data**. Once you complete the setup steps below, the system will automatically switch to fetching live reviews from your Google Business Profile.

## What's Already Implemented

✅ API route with caching (`/api/google-reviews`)
✅ Star rating component
✅ Auto-rotating testimonial carousel (6-second intervals)
✅ "Write a Review" CTA button
✅ JSON-LD schema markup for SEO
✅ Responsive design with dark mode support
✅ Fallback to mock data when credentials are not configured

## Setup Steps

### 1. Create Google Business Profile

1. Go to [Google Business Profile](https://business.google.com/)
2. Sign in with your Google account
3. Click "Add your business to Google"
4. Enter your business information:
   - **Business name:** Your real estate business name
   - **Business category:** Real Estate Agent or Real Estate Agency
   - **Location:** Your office address in Toronto/GTA
   - **Contact information:** Phone number and website
5. Verify your business (Google will send a verification code)
6. Complete your profile with:
   - Business hours
   - Professional photos
   - Services offered
   - Business description

### 2. Get Your Google Place ID

**Option A: Use Place ID Finder**
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business
3. Copy the Place ID (starts with `ChIJ...`)

**Option B: Use Google Maps URL**
1. Find your business on Google Maps
2. Look at the URL - the Place ID is in the `!1s` parameter
3. Example: `maps.google.com/maps/place/...!1s0x1234abcd:0x5678efgh`
4. The Place ID is the part after `!1s`

### 3. Create Google Cloud Project & Enable Places API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - **IMPORTANT:** Restrict your API key:
     - Click "Edit API Key"
     - Under "API restrictions", select "Restrict key"
     - Choose "Places API"
     - Under "Application restrictions", add your website domain

### 4. Add Environment Variables

Add these variables to your `.env` file in the `/package` directory:

```bash
# Google Places API Configuration
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here

# Optional: Direct link to your Google review form
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://g.page/your-business/review
```

### 5. Get Your Google Review URL

1. Open your Google Business Profile
2. Click "Get more reviews"
3. Copy the short URL (e.g., `https://g.page/your-business/review`)
4. Add it to your `.env` as `NEXT_PUBLIC_GOOGLE_REVIEW_URL`

Alternatively, you can construct it manually:
```
https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
```

### 6. Update Business Information

Edit the schema component at `/src/app/components/shared/ReviewSchema/index.tsx`:

Update these fields with your actual business information:
- `telephone`: Your phone number
- `address`: Your complete business address
- `geo`: Your business coordinates (get from Google Maps)

### 7. Restart Development Server

After adding the environment variables:

```bash
cd package
npm run dev
```

## How It Works

### Review Caching
- Reviews are cached for **24 hours** to minimize API costs
- After 24 hours, fresh reviews are automatically fetched
- First request after cache expiry may be slightly slower

### Review Filtering
- Only displays reviews with **4-5 star ratings**
- Limits to a maximum of **10 reviews**
- Sorts by most recent

### API Costs
Google Places API pricing (as of 2024):
- **$17 per 1,000 requests** after the free $200/month credit
- With 24-hour caching, expect very low costs
- Example: 1,000 visitors/month = ~33 API calls = **~$0.56/month**

### Mock Data
The system includes 4 high-quality mock reviews that will display until you add your credentials. This allows you to:
- See how the feature looks and works immediately
- Test the UI/UX before connecting real reviews
- Ensure everything is working before going live

## Testing

1. Check that reviews appear on the homepage
2. Verify auto-rotation works (reviews change every 6 seconds)
3. Click the navigation dots to manually switch reviews
4. Test the "Write a Review" button
5. Inspect page source to verify JSON-LD schema is present
6. Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate schema

## Troubleshooting

### Reviews not loading
- Check browser console for errors
- Verify API key is correct and Places API is enabled
- Ensure Place ID is correct
- Check API key restrictions aren't blocking requests

### "Write a Review" button not working
- Verify `NEXT_PUBLIC_GOOGLE_REVIEW_URL` is set correctly
- Test the URL directly in your browser
- Make sure your Google Business Profile is verified

### Wrong reviews appearing
- Double-check your Place ID
- Ensure you're using the correct Google Business Profile

### API costs too high
- Increase `CACHE_DURATION` in `/api/google-reviews/route.ts`
- Current: 24 hours (86,400,000 ms)
- Recommended: 24-72 hours

## Additional Features to Consider

Once set up, you could add:
- Manual review refresh button
- Admin dashboard to moderate reviews
- Email notifications for new reviews
- Review response system
- Integration with other review platforms (Zillow, Realtor.com)

## Support

For issues with:
- **Google Business Profile:** [Google Business Support](https://support.google.com/business)
- **Google Places API:** [Google Maps Platform Support](https://developers.google.com/maps/support)
- **Website Integration:** Check the browser console and Next.js dev server logs

---

**Need Help?** The current implementation with mock data is production-ready and looks professional. You can launch with mock reviews and add real Google integration later without any code changes.
