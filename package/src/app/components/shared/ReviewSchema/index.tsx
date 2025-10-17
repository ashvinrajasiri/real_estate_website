'use client';

import { useEffect, useState } from 'react';
import { GoogleReviewsResponse } from '@/app/types/review';

export default function ReviewSchema() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        setReviewsData(data);
      } catch (error) {
        console.error('Error fetching reviews for schema:', error);
      }
    };

    fetchReviews();
  }, []);

  if (!reviewsData) return null;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rajasiri.com',
    name: 'Rajasiri Sinnarajah Real Estate',
    description: 'Professional real estate services in the Greater Toronto Area with 15+ years of experience',
    url: 'https://rajasiri.com',
    telephone: '+1-XXX-XXX-XXXX', // TODO: Replace with actual phone
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewsData.rating.toFixed(1),
      reviewCount: reviewsData.user_ratings_total,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviewsData.reviews.slice(0, 5).map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author_name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: new Date(review.time).toISOString(),
      reviewBody: review.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
