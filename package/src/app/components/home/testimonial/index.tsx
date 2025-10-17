'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import StarRating from '@/app/components/shared/StarRating';
import { GoogleReviewsResponse } from '@/app/types/review';

export default function Testimonials() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        setReviewsData(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Auto-rotate reviews every 6 seconds
  useEffect(() => {
    if (!reviewsData?.reviews.length) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) =>
        prev === reviewsData.reviews.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [reviewsData]);

  const handleDotClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  const handleWriteReview = () => {
    // TODO: Replace with your actual Google Business Profile review URL
    const googleReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || '#';
    window.open(googleReviewUrl, '_blank');
  };

  if (isLoading) {
    return (
      <section className="px-4 md:px-0 bg-white dark:bg-darkmode">
        <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto pt-12 pb-4">
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500 dark:text-gray-400">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  const currentReview = reviewsData?.reviews[currentReviewIndex];

  return (
    <section className="px-4 md:px-0 bg-white dark:bg-darkmode">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto pt-12 pb-4">
        {/* Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
            What Our Clients Say
          </h2>
          {reviewsData && (
            <div className="flex items-center justify-center gap-3 mb-2">
              <StarRating rating={reviewsData.rating} size="lg" showNumber />
              <span className="text-gray-600 dark:text-gray-400">
                ({reviewsData.user_ratings_total} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Review Display */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          {currentReview ? (
            <div className="relative min-h-[300px] flex flex-col justify-between">
              {/* Quote Icon */}
              <Image
                src="/images/testimonial/quote.svg"
                alt="quote"
                className="mb-4 md:mb-6"
                height={135}
                width={135}
              />

              {/* Review Text */}
              <div className="flex-grow mb-6">
                <p className="text-lg md:text-2xl text-gray mb-4 leading-relaxed">
                  {currentReview.text}
                </p>
                <StarRating rating={currentReview.rating} size="md" />
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mb-6">
                {currentReview.profile_photo_url && (
                  <Image
                    src={currentReview.profile_photo_url}
                    alt={currentReview.author_name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="text-lg md:text-2xl text-midnight_text dark:text-white font-medium">
                    {currentReview.author_name}
                  </p>
                  <p className="text-gray text-base md:text-lg">
                    {currentReview.relative_time_description}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              {reviewsData && reviewsData.reviews.length > 1 && (
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  {reviewsData.reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentReviewIndex
                          ? 'bg-primary w-8'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center">No reviews available</p>
          )}
        </div>

        {/* Write Review Button & Google Badge */}
        <div className="flex flex-col items-center mt-8 gap-4" data-aos="fade-up">
          <button
            onClick={handleWriteReview}
            className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Write a Review
          </button>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Verified Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
