import React from 'react';
import { Metadata } from "next";
import Hero from './components/home/hero';
import Calculator from './components/home/calculator';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import BlogSmall from './components/shared/blog';
import Listing from './components/home/property-list';
import Testimonials from './components/home/testimonial';
export const metadata: Metadata = {
  title: "Rajasiri Sinnarajah | Toronto Real Estate Agent | GTA Homes",
  description: "Looking for your dream home in the Greater Toronto Area? Rajasiri Sinnarajah offers 15+ years of experience helping clients buy and sell properties across the GTA.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Listing />
      <Calculator />
      <Features />
      <Testimonials />
      <CompanyInfo />
      <BlogSmall />
    </main>
  )
}
