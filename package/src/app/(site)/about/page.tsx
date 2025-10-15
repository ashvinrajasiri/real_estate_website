import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CompanyInfo from "@/app/components/home/info";

export const metadata: Metadata = {
  title: "About Us | Real Estate Agent",
  description: "Learn more about our real estate services and experience",
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-darkmode">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="md:text-[50px] leading-[1.2] text-4xl text-midnight_text dark:text-white font-bold mb-6">
                About Your Agent
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                Your Trusted Real Estate Partner
              </p>
              <p className="text-lg text-gray dark:text-gray mb-6">
                With years of experience in the real estate market, I'm dedicated to helping you find your dream home or sell your property for the best value. My approach combines market expertise with personalized service to ensure your real estate journey is smooth and successful.
              </p>
              <div className="flex gap-4 text-midnight_text dark:text-white">
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-gray">Years Experience</p>
                </div>
                <div className="ml-8">
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray">Properties Sold</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]" data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg h-full flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-light dark:bg-semidark">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-4">
              Why Choose Me
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              I bring a unique combination of market knowledge, negotiation skills, and personal dedication to every client relationship.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-darklight p-8 rounded-lg shadow-property" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">
                Local Market Expert
              </h3>
              <p className="text-gray">
                Deep understanding of local neighborhoods, pricing trends, and market conditions to help you make informed decisions.
              </p>
            </div>
            <div className="bg-white dark:bg-darklight p-8 rounded-lg shadow-property" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">
                Personalized Service
              </h3>
              <p className="text-gray">
                Every client receives tailored attention and a customized strategy designed to meet their unique real estate goals.
              </p>
            </div>
            <div className="bg-white dark:bg-darklight p-8 rounded-lg shadow-property" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">
                Strong Negotiator
              </h3>
              <p className="text-gray">
                Skilled negotiation ensures you get the best possible deal, whether you're buying your dream home or selling your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials Section */}
      <section className="py-20 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-6">
                Experience & Credentials
              </h2>
              <p className="text-lg text-gray mb-8">
                My commitment to excellence and continuous professional development ensures that you receive the highest quality service in every transaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-midnight_text dark:text-white">Licensed Real Estate Agent</h3>
                    <p className="text-gray">Active license in good standing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-midnight_text dark:text-white">National Association of Realtors</h3>
                    <p className="text-gray">Proud member upholding the highest ethical standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-midnight_text dark:text-white">Certified Negotiation Expert</h3>
                    <p className="text-gray">Advanced training in negotiation strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-midnight_text dark:text-white">Top Producer Award</h3>
                    <p className="text-gray">Recognized for outstanding sales performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/5 dark:to-blue-900/20 rounded-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-midnight_text dark:text-white mb-6">
                  Service Areas
                </h3>
                <p className="text-lg text-gray mb-6">
                  I specialize in helping clients across multiple neighborhoods and property types:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-midnight_text dark:text-white font-medium">Downtown & Urban Areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-midnight_text dark:text-white font-medium">Suburban Communities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-midnight_text dark:text-white font-medium">Waterfront Properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-midnight_text dark:text-white font-medium">Luxury Homes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-midnight_text dark:text-white font-medium">First-Time Home Buyers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Reuse existing component */}
      <CompanyInfo />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or just exploring your options, I'm here to help guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Contact Me Today
            </Link>
            <Link
              href="/properties/properties-list"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors text-lg font-semibold"
            >
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
