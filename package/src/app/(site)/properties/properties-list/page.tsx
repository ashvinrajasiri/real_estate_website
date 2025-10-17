import React from 'react';
import { Metadata } from "next";
import AdvanceSearch from '@/app/components/property-list/search';

export const metadata: Metadata = {
  title: "Browse Properties | Find Your Dream Home",
  description: "Explore our curated selection of properties. Filter by location, price, bedrooms, and more to find your perfect home.",
};

const Page = async ({ searchParams }: { searchParams: Promise<{ category?: string }> }) => {
  const params = await searchParams;
  const category = params?.category || '';

  return (
    <>
      <AdvanceSearch category={category} />
    </>
  );
};

export default Page;
