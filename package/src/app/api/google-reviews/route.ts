import { NextResponse } from 'next/server';
import { GoogleReview, GoogleReviewsResponse } from '@/app/types/review';

// In-memory cache for reviews (in production, use Redis or database)
let cachedReviews: GoogleReviewsResponse | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Mock reviews for development (replace with actual API call when credentials are ready)
const mockReviews: GoogleReview[] = [
  {
    author_name: "Sarah M.",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Working with Rajasiri was an absolute pleasure. Their expertise and dedication made finding our dream home in Toronto effortless. Highly recommend for anyone looking to buy or sell in the GTA!",
    time: Date.now() - 14 * 24 * 60 * 60 * 1000,
    language: "en",
    profile_photo_url: "https://ui-avatars.com/api/?name=Sarah+M&background=2F73F2&color=fff"
  },
  {
    author_name: "Michael Chen",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "Outstanding service from start to finish. Rajasiri helped us navigate the competitive Toronto market with ease. We found the perfect home for our growing family!",
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
    language: "en",
    profile_photo_url: "https://ui-avatars.com/api/?name=Michael+Chen&background=2F73F2&color=fff"
  },
  {
    author_name: "Jennifer & Tom Williams",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "Professional, knowledgeable, and incredibly patient. Rajasiri went above and beyond to ensure we got the best deal on our new condo in downtown Toronto. 5 stars!",
    time: Date.now() - 60 * 24 * 60 * 60 * 1000,
    language: "en",
    profile_photo_url: "https://ui-avatars.com/api/?name=Jennifer+Williams&background=2F73F2&color=fff"
  },
  {
    author_name: "Priya Sharma",
    rating: 5,
    relative_time_description: "3 months ago",
    text: "As first-time homebuyers, we were nervous about the process. Rajasiri made everything so simple and stress-free. Their local market knowledge is unmatched!",
    time: Date.now() - 90 * 24 * 60 * 60 * 1000,
    language: "en",
    profile_photo_url: "https://ui-avatars.com/api/?name=Priya+Sharma&background=2F73F2&color=fff"
  }
];

async function fetchGoogleReviews(): Promise<GoogleReviewsResponse> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If no credentials are set, return mock data
  if (!apiKey || !placeId) {
    console.log('Google Places API credentials not found, using mock data');
    return {
      reviews: mockReviews,
      rating: 5.0,
      user_ratings_total: mockReviews.length,
      cached: false,
      lastUpdated: new Date().toISOString()
    };
  }

  try {
    // Fetch place details from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Filter for high-rated reviews (4-5 stars only)
    const filteredReviews = (data.result?.reviews || []).filter(
      (review: GoogleReview) => review.rating >= 4
    );

    return {
      reviews: filteredReviews.slice(0, 10), // Limit to 10 reviews
      rating: data.result?.rating || 5.0,
      user_ratings_total: data.result?.user_ratings_total || 0,
      cached: false,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    // Fallback to mock data if API fails
    return {
      reviews: mockReviews,
      rating: 5.0,
      user_ratings_total: mockReviews.length,
      cached: false,
      lastUpdated: new Date().toISOString()
    };
  }
}

export async function GET() {
  try {
    const now = Date.now();

    // Check if we have cached data and if it's still valid
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      console.log('Returning cached reviews');
      return NextResponse.json({
        ...cachedReviews,
        cached: true
      });
    }

    // Fetch fresh reviews
    console.log('Fetching fresh reviews from Google Places API');
    const reviewsData = await fetchGoogleReviews();

    // Update cache
    cachedReviews = reviewsData;
    cacheTimestamp = now;

    return NextResponse.json(reviewsData);
  } catch (error) {
    console.error('Error in reviews API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
