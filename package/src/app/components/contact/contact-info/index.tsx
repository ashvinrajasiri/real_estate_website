import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode pt-8 pb-0 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray">
              Looking to buy your dream home? Contact Rajasiri Sinnarajah today to get started
            </p>
          </div>
          <div className="flex md:flex-row flex-col lg:items-stretch items-start justify-center md:gap-8 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4 flex-1" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col items-start h-full">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Email
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-2 dark:text-gray">
                    Get in touch via email
                  </p>
                  <a href="mailto:srajasiri@gmail.com" className="text-primary hover:text-blue-700 text-lg font-semibold">
                    srajasiri@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4 flex-1" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col items-start h-full">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Phone
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-2 dark:text-gray">
                    Call or text anytime
                  </p>
                  <a href="tel:4167042827" className="text-primary hover:text-blue-700 text-lg font-semibold">
                    416-704-2827
                  </a>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4 flex-1" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col items-start h-full">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Service Area
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-2 dark:text-gray">
                    Greater Toronto Area and surrounding regions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-32 pt-11 md:pb-28 pb-8" data-aos="zoom-in">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479474.6117615772!2d-79.91488437187494!3d43.71837080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9.5!3m3!1m2!1s0x882b2a1d7471156d%3A0x4ecad8e272e4c2a2!2sGreater%20Toronto%20Area%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" width="1114" height="477" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg w-full"></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-border dark:border-dark_border"></div>
      </section>
    </>
  );
};

export default ContactInfo;
